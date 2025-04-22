import crypto from 'crypto';
import path from 'path';

import fs from 'fs-extra';

import { baseConfig } from '../../baseConfig';

const createFileCache = () => {
  if (!fs.existsSync(baseConfig.tempPath)) {
    fs.mkdirSync(baseConfig.tempPath);
  }

  return {
    getPath(key: any) {
      const normalizeKey = `${crypto.createHash('md5').update(JSON.stringify(key)).digest('hex')}.json`;

      return path.resolve(baseConfig.tempPath, normalizeKey);
    },
    set(key: any, value: any) {
      const pathToCache = this.getPath(key);

      fs.writeFileSync(pathToCache, JSON.stringify(value));
    },
    has(key: any) {
      const pathToCache = this.getPath(key);

      return fs.existsSync(pathToCache);
    },
    get(key: any) {
      const pathToCache = this.getPath(key);

      return JSON.parse(fs.readFileSync(pathToCache).toString());
    },
  };
};

export default createFileCache;
