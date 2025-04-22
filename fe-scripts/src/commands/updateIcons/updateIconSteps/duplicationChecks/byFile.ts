import fs from 'fs-extra';

import { IconInfo } from '../../interfaces';

const byFile = (a: IconInfo, b: IconInfo): boolean => {
  return fs.readFileSync(a.originSvgPath).toString() === fs.readFileSync(b.originSvgPath).toString();
};

export default byFile;
