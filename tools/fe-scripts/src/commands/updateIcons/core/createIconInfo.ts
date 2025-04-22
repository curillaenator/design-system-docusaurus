import path from 'path';

import { IconInfo, ImportConfig } from '../interfaces';
import getCamelCaseName from '../utils/getCamelCaseName';
import { FigmaElement } from '../sources/figma/responces.interface';

export const toUpperFirstLetter = (str: string): string => str[0].toUpperCase() + str.slice(1);

const createIconInfo = (node: FigmaElement, config: ImportConfig): IconInfo => {
  const nameParts = node.name.split(' / ') as [string, string, string];
  const iconName = getCamelCaseName(nameParts[2]);
  const typeName = nameParts[1];
  const componentName = toUpperFirstLetter(iconName) + 'Icon';

  const fullName = `${typeName} ${iconName}`;
  const targetPath = path.resolve(config.targetIconsPath, `${typeName}/${componentName}.tsx`);

  const originSvgPath = path.resolve(config.tempPath, `${fullName}.svg`) as string;
  const originTSXPath = path.resolve(config.tempPath, `${fullName}.tsx`) as string;

  return {
    id: node.id,
    iconName: iconName,
    typeName: typeName,
    componentName: componentName,
    fullName: fullName,
    targetPath: targetPath,
    originSvgPath: originSvgPath,
    originTSXPath: originTSXPath,

    origin: node
  };
};

export default createIconInfo;
