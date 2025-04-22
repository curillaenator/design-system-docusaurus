import fs from 'fs-extra';
import { IconInfo, ImportConfig } from '../interfaces';

const transformIcon = (str: string, config: ImportConfig): string =>
  Object.keys(config.transformIcon).reduce(
    (acc, key) =>
      // @ts-ignore
      acc.replace(new RegExp(key, 'g'), config.transformIcon[key]),
    str,
  );

const clearIcon = (str: string, clearIcon: RegExp[]): string => clearIcon.reduce((acc, item) => acc.replace(item, ''), str);

const clearIcons = (iconsInfo: IconInfo[], config: ImportConfig) => {
  iconsInfo.forEach((icon) => {
    let file = fs.readFileSync(icon.originSvgPath).toString();
    file = clearIcon(file, config.clearIcon);
    file = transformIcon(file, config);

    fs.writeFileSync(icon.originSvgPath, file);
  });
};

export default clearIcons;
