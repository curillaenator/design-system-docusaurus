import type { PackageJson } from './types';
import { assert } from './assert';

export function normalizePackageName(name: string): string {
  return name.replace('/', '__');
}
/**
 * Перенесен из https://bitbucket.pcbltools.ru/bitbucket/projects/EDUPOWER/repos/edupower/browse/front/tools/fe-scripts/src/checkDep.ts
 */

export function getPackage(packagePath: string) {
  // eslint-disable-next-line global-require, import/no-dynamic-require, @typescript-eslint/no-var-requires
  const packageJson = require(packagePath) as PackageJson;
  const { name } = packageJson;
  assert(name, `Package MUST have a name but ${packagePath} doesn't provide it`);
  const normalizedName = normalizePackageName(name);
  return {
    ...packageJson,
    name,
    get normalizedName() {
      // таким образом оно будет не emunarable и не попадёт в JSON при стрингификации
      return normalizedName;
    },
  };
}
