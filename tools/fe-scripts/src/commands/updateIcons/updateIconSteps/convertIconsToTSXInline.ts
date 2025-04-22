import fs from 'fs-extra';
import path from 'path';

import { transform } from '@svgr/core';
import { IconInfo } from '../interfaces';

const convertToTSXInline = (iconsInfo: IconInfo[]) => {
  iconsInfo.forEach(async (icon) => {
    let file = fs.readFileSync(icon.originSvgPath).toString();
    const iconName = icon.componentName;
    const temp = await transform(file, { ref: true, typescript: true }, { componentName: icon.componentName });
    const match = temp.match(/<svg.*svg>/);

    let jsxIcon: string | null | undefined = match && match.pop();
    if (jsxIcon) {
      jsxIcon = jsxIcon.replace('<svg', '<svg {...getAttributesByProps(props)}');
      let componentTemplate = fs.readFileSync(path.resolve(__dirname, '../iconComponent.template')).toString();
      componentTemplate = componentTemplate.replaceAll('{componentName}', iconName);
      componentTemplate = componentTemplate.replaceAll('{svg}', jsxIcon);
      fs.writeFileSync(icon.originTSXPath, componentTemplate);
    }
  });
};

export default convertToTSXInline;

//SVGProps,
