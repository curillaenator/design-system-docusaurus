import * as path from 'path';
import fs from 'fs-extra';

import { IconInfo, ImportConfig } from '../interfaces';
import { toUpperFirstLetter } from '../core/createIconInfo';

const updateIconsMap = (iconsMap: IconInfo[], config: ImportConfig) => {
  const sections: Record<string, IconInfo[]> = {};

  iconsMap.forEach(icon => {
    if (!sections[icon.typeName]) {
      sections[icon.typeName] = [];
    }
    sections[icon.typeName].push(icon);
  })

  const targetDir = path.dirname(config.targetPathMap);

  Object.keys(sections).forEach(sectionName => {
    const lines = [];

    const sectionIcons = sections[sectionName];

    const imports = sectionIcons.map(icon => {
      let relativePath = path.relative(targetDir, icon.targetPath).replace('.tsx', '');
      if (process.platform === 'win32') {
        relativePath = relativePath.split(path.sep).join(path.posix.sep);
      }

      return `import ${icon.componentName} from '${relativePath}';`;
    })
    lines.push(...imports);
    lines.push('');
    lines.push(`const ${sectionName} = {`);


    const linesForMap = sectionIcons.map(icon => {
      return `  ${icon.componentName}: ${icon.componentName},`;
    })

    lines.push(...linesForMap);
    lines.push('};');

    lines.push('');
    lines.push(`export default ${sectionName};`);
    lines.push('');

    fs.writeFileSync(path.join(targetDir, `${sectionName}.tsx`), lines.join('\n'));
  })


  const index = [];
  Object.keys(sections).forEach(sectionName => {
    index.push(`import ${sectionName} from './${sectionName}';`);
  });

  index.push('');

  index.push(`const IconStore = {`);

  Object.keys(sections).forEach(sectionName => {
    index.push(`  ${sectionName}: ${sectionName},`);
  });
  index.push('};');
  index.push('');

  index.push(`export default IconStore;`);

  fs.writeFileSync(config.targetPathMap, index.join('\n'));
};

export default updateIconsMap;
