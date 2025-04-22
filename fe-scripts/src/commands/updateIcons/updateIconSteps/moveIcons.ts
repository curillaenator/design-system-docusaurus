import * as path from 'path';

import fs from 'fs-extra';
import { IconInfo, ImportConfig } from '../interfaces';

const moveIcons = async (icons: IconInfo[], config: ImportConfig) => {
   fs.removeSync(config.targetIconsPath);
  fs.mkdirSync(config.targetIconsPath, { recursive: true });

  for (const info of icons.filter((icon) => !icon.link)) {
    const sectionTargetPath = path.resolve(config.targetIconsPath, info.typeName);
    await fs.ensureDir(sectionTargetPath);
    await fs.copy(info.originTSXPath, path.resolve(sectionTargetPath, info.targetPath));
  }
};

export default moveIcons;
