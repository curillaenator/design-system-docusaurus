#!/usr/bin/env node

import { promises as fs } from 'fs';
import path from 'path';
import { getAllFilesFromDirRecursively } from './utils/getAllFilesFromDirRecursively';

const ONLY_JS_OR_TS_FILES_REGEX = /.\.(js|ts)x?$/;
const SASS_FILE_EXTS_REGEX = /.s[ca]ss/g;

const findAllImportedSassFilePathsAndReplaceThem = async (filePath: string): Promise<void> => {
  const file = await fs.readFile(filePath, { encoding: 'utf-8' });
  const processed = file.split(SASS_FILE_EXTS_REGEX).join('.css');
  await fs.writeFile(filePath, processed, { encoding: 'utf-8' });
};

export default async (dir = 'build/'): Promise<void> => {
  const rootDir = process.cwd();
  const dirName = path.resolve(rootDir, dir);
  try {
    const filePaths = await getAllFilesFromDirRecursively(dirName, (v) => ONLY_JS_OR_TS_FILES_REGEX.test(v));
    await Promise.all(filePaths.map(findAllImportedSassFilePathsAndReplaceThem));
  } catch (e) {
    console.error(e);
  }
};
