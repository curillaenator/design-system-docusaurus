const fs = require('fs').promises;
const path = require('path');
const upperFirst = require('lodash/upperFirst');
const camelCase = require('lodash/camelCase');

const REPLACE_MDX = ['}}', '{{'];
const REPLACE_TSX = ['"', '"'];

const getPackageInfo = async (currentPath) => {
  const pathParts = currentPath.split(path.sep);
  const srcPartIndex = pathParts.indexOf('src');

  const packageJsonPath = pathParts.slice(0, srcPartIndex).join('/') + '/' + 'package.json';
  const packageJsonStr = await fs.readFile(packageJsonPath);
  const packageJson = JSON.parse(packageJsonStr);

  return {
    packageName: packageJson.name,
    githubLocation: `${packageJson.repository.url}?at=refs%2Fheads%2Fmaster`,
  };
};

const getOptions = (options) => {
  const lines = options.map((option) => `${option}: true`);
  return `demoOptions={{
      ${lines}
  }}`;
};

// Массив компонентов xyz для которых документация перенесена
const XYZ_PRESET_EXIST = [
  'divider',
  'button',
  'radio',
  'avatar',
  'hint',
  'typography',
  'badge',
  'chip',
  'input',
  'bubble',
  'tooltip',
  'checkbox',
  'switch',
  'textarea',
  'accordion',
  'platformnotification',
];

const addDemoUikit = async (content, resourcePath, tsx) => {
  const isComponents = content.indexOf('// components exists') > -1;
  let storiesPath =
    resourcePath.indexOf(`${path.sep}stories${path.sep}`) > -1 ? resourcePath.split(`${path.sep}stories${path.sep}`)[0] + path.sep : '';
  storiesPath = storiesPath.split(path.sep).join('/');
  const isXyz = !!resourcePath.split(path.sep).find((it) => {
    return XYZ_PRESET_EXIST.indexOf(it.toLowerCase()) > -1;
  });

  const demosMdxList = content.match(/{{Demo:[A-Za-z]*(:[A-Za-z]*)*}}/g);
  const demosTsxList = content.match(/"Demo:[A-Za-z]*(:[A-Za-z]*)*"/g);
  const demosList = tsx ? demosTsxList : demosMdxList;
  if (!demosList) {
    return content;
  }
  const packageInfo = await getPackageInfo(isXyz ? resourcePath.replace(`${path.sep}ui${path.sep}`, `${path.sep}xyz${path.sep}`) : resourcePath);
  const name = packageInfo?.packageName.split('/')[1] || '';
  const nameUpper = name ? upperFirst(camelCase(name)) : '';
  const presetPath = isXyz ? storiesPath.replace(`/ui/`, `/xyz/`) : '';

  const imports = new Set([`import { Demo } from '@pcbl-ui-v4/storybook-components';`]);
  for (const demoTemplate of demosList) {
    const ReplacePattern = tsx ? REPLACE_TSX : REPLACE_MDX;
    const args = demoTemplate.replace(ReplacePattern[0], '').replace(ReplacePattern[1], '').split(':');
    const demoName = args[1];
    const options = args.slice(2);
    const importPath = './examples/' + demoName;
    const importString = `import ${demoName} from '${importPath}';`;
    const importRawString = `import ${demoName}Raw from '!!raw-loader!${importPath}';`;
    const importPreset = name ? `import { ${nameUpper} as ${nameUpper}Component } from '${presetPath}index';` : '';
    const importComponents = `import { Components } from '${presetPath}stories/components';`;

    imports.add(importString);
    imports.add(importRawString);
    isXyz && imports.add(importPreset);
    isComponents && imports.add(importComponents);

    const componentString = `
<Demo
  demo={{
    raw: ${demoName}Raw,
    component: ${demoName},
    packageName: '${packageInfo.packageName}',
    githubLocation: '${packageInfo.githubLocation}',
    preset: ${isXyz ? `${nameUpper}Component` : null},
    components: ${isComponents ? 'Components' : null},
  }}
  ${getOptions(options)}
/>`;
    content = content.replace(demoTemplate, componentString);
  }

  return [...imports].join('\r\n') + content;
};

module.exports = addDemoUikit;
