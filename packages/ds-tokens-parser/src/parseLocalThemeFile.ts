import path from 'path';
import { constants } from 'fs';
import fs from 'fs/promises';

import { format } from 'prettier';

import { parseThemeObject } from './parseThemeObject';

export const parseLocalThemeFile = async (src: string, dist: string) => {
  const { dir } = path.parse(dist);
  const raw = await fs.readFile(src, 'utf-8');
  const json = JSON.parse(raw);

  try {
    await fs.access(dir, constants.F_OK);
  } catch (error) {
    await fs.mkdir(dir, { recursive: true });
  }
  const theme = JSON.stringify(parseThemeObject(json), null, 2);

  return fs.writeFile(path.resolve(dist), format(theme, { parser: 'json', endOfLine: 'crlf' }));
};
