#!/usr/bin/env node

import fs from 'fs-extra';

import { PackageJson } from '../utils/types';

async function setVersions(rootDir: string, pakagesDir: string): Promise<void> {
  const exists = await fs.pathExists(pakagesDir);
  if (!exists) {
    return;
  }

  const pkgJson: PackageJson = JSON.parse(fs.readFileSync(`${rootDir}/package.json`, { encoding: 'utf8' }));
  fs.writeFileSync(`${rootDir}/build/version.js`, `export const VERSION="${pkgJson.name}-${pkgJson.version}"`);
}
export default async (): Promise<void> => {
  const rootDir = process.cwd();

  await setVersions(rootDir, `${rootDir}/src`);
};
