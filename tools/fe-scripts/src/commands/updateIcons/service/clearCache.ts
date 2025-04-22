import fs from 'fs-extra';

import { baseConfig } from '../baseConfig';

const clearCache = () => {
  fs.removeSync(baseConfig.tempPath);
  fs.mkdirSync(baseConfig.tempPath);
};

export default clearCache;
