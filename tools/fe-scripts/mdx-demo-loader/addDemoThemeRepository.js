const fs = require('fs').promises;
const path = require('path');
const upperFirst = require('lodash/upperFirst');
const camelCase = require('lodash/camelCase');

const REPLACE_MDX = ['}}', '{{'];
const REPLACE_TSX = ['"', '"'];

const getOptions = (options) => {
  const lines = options.map((option) => `${option}: true`);
  return `demoOptions={{
      ${lines}
  }}`;
};
const getPackageInfo = async (currentPath) => {
  const pathParts = currentPath.split(path.sep);

  let packageJsonPath = '';

  if (pathParts.indexOf('@pcbl-ui-v4') > -1 || pathParts.indexOf('@kit-base') > -1) {
    const currentSuffix = pathParts.indexOf('@kit-base') > -1 ? '@kit-base' : '@pcbl-ui-v4';
    // case for repository_name/node_modules, for example: "/home/user/projects/repository_name/node_modules/@pcbl-ui-v4/divider/build/stories/DividerStory.docs.tsx"
    // case for local node_modules, for example: "/home/user/projects/repository_name/packages/ui/Button/node_modules/@pcbl-ui-v4/button/build/stories/ButtonStory.docs.tsx"
    const pcblPartIndex = pathParts.indexOf(currentSuffix);
    packageJsonPath = pathParts.slice(0, pcblPartIndex).join('/') + '/' + currentSuffix + '/' + pathParts.slice(pcblPartIndex + 1, pcblPartIndex + 2) + '/package.json';
  } else {
    // case for repository_name/packages/../src, for example: "/home/user/projects/repository_name/packages/ui/Typography/src/stories/TypographyDocs.mdx"
    const srcPartIndex = pathParts.indexOf('src');
    packageJsonPath = pathParts.slice(0, srcPartIndex).join('/') + '/' + 'package.json';
  }

  const packageJsonStr = await fs.readFile(packageJsonPath);
  const packageJson = JSON.parse(packageJsonStr);

  return {
    packageName: packageJson.name,
    githubLocation: `${packageJson.repository.url}?at=refs%2Fheads%2Fmaster`,
  };
};

/**
 * Add demo from story.docs.tsx or docs.mdx file 
 * @param {string} content - content for story.doc.tsx or docs.mdx file
 * @param {string} resourcePath - path to story.doc.tsx file
 * @param {boolean} tsx - is true for tsx files
 * @returns {string}
*/
const addDemoThemeRepository = async (content, resourcePath, tsx) => {
  const isComponents = content.indexOf('// components exists') > -1;
  const demoPattern = 'Demo:[A-Za-z]*(:[A-Za-z]*)*';
  const demosMdxList = content.match(new RegExp(`{{${demoPattern}}}`, 'g'));
  const demosTsxList = content.match(new RegExp(`"${demoPattern}"`, 'g'));

  const demosList = tsx ? demosTsxList : demosMdxList;
  if (!demosList) {
    return content;
  }
  packageInfo = await getPackageInfo(resourcePath);

  const name = packageInfo?.packageName.split('/')[1] || '';
  const nameUpper = name ? upperFirst(camelCase(name)) : '';

  let presetPath = '';
  if (resourcePath.indexOf(`${path.sep}node_modules${path.sep}`) > -1) {
    // case for repository_name/node_modules, for example: "/home/user/projects/edukit/node_modules/@pcbl-ui-v4/divider/build/stories/DividerStory.docs.tsx"
    // case for local node_modules, for example: "/home/user/projects/edukit/packages/ui/Button/node_modules/@pcbl-ui-v4/button/build/stories/ButtonStory.docs.tsx"
    const packagesPathArray = resourcePath.split('node_modules')[0].split('packages');
    presetPath = packagesPathArray[0].split(path.sep).join('/') + 'packages/ui/' + nameUpper + '/src';
  } else {
    // case for repository_name/packages/../src, for example: "/home/user/projects/edukit/packages/ui/Typography/src/stories/TypographyDocs.mdx"
    presetPath = resourcePath.split(path.sep).join('/').split(`/stories/`)[0];
  }
  
  const imports = new Set([`import { Demo } from '@pcbl-ui-v4/storybook-components';`]);
  for (const demoTemplate of demosList) {
    const ReplacePattern = tsx ? REPLACE_TSX : REPLACE_MDX;
    const args = demoTemplate.replace(ReplacePattern[0], '').replace(ReplacePattern[1], '').split(':');
    const demoName = args[1];
    const options = args.slice(2);
    const importPath = './examples/' + demoName;
    const importString = `import ${demoName} from '${importPath}';`;
    const importPreset = name ? `import { ${nameUpper} as ${nameUpper}Component } from '${presetPath}/index';` : '';
    const importRawString = `import ${demoName}Raw from '!!raw-loader!${importPath}';`;
    const importComponents = `import { Components } from '${presetPath}/stories/components';`;
    imports.add(importString);
    imports.add(importPreset);
    imports.add(importRawString);
    isComponents && imports.add(importComponents);

    const componentString = `
<Demo
  demo={{
    raw: ${demoName}Raw,
    component: ${demoName},
    packageName: '${packageInfo.packageName}',
    githubLocation: '${packageInfo.githubLocation}',
    preset: ${nameUpper}Component,
    components: ${isComponents ? 'Components' : null},
  }}
  ${getOptions(options)}
/>`;
    content = content.replace(demoTemplate, componentString);
  }

  return [...imports].join('\r\n') + content;
};

module.exports = addDemoThemeRepository;
