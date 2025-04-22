import { promises as fs } from 'fs';
import path from 'path';

export const getAllFilesFromDirRecursively = async (dir: string, filterFn: (v: string) => boolean = () => true): Promise<string[]> => {
  const entries = await fs.readdir(dir);
  const files: string[] = [],
    folders: string[] = [];

  for (let index = 0; index < entries.length; index++) {
    const entry = path.resolve(dir, entries[index]);
    const stats = await fs.stat(entry);
    (stats.isDirectory() ? folders : files).push(entry);
  }

  const nestedFiles = await Promise.all(folders.map((path) => getAllFilesFromDirRecursively(path, filterFn)));

  return files.filter(filterFn).concat(...nestedFiles);
};
