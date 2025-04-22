import * as path from 'path';
import { baseConfig } from './baseConfig';
import { ImportConfig } from './interfaces';

const createConfig = (file: string, token: string, nodes: string, dist: string): ImportConfig => {
  const packagePath = path.resolve(dist, './src');
  const targetIconsPath = path.resolve(packagePath, './assets');
  const deprecatedIconsPath = path.resolve(packagePath, './deprecated');
  const targetPathMap = path.resolve(packagePath, './store/index.ts');
  const deprecatedPathMap = path.resolve(packagePath, './deprecatedIcon.ts');

  return {
    ...baseConfig,
    file: file,
    token: token,
    nodes: nodes.split(','),

    packagePath,
    targetPathMap,
    targetIconsPath,

    deprecatedPathMap,
    deprecatedIconsPath,
  };
};

export { createConfig };
