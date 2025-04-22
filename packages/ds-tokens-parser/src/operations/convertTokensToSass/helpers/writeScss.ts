import fs from 'fs/promises';
import path from 'path';
import { constants } from 'fs';

import { format } from 'prettier';
// @ts-ignore
import convertJsToSass from '@epegzz/sass-vars-loader/src/utils/convertJsToSass';
import template from 'lodash/template';

const compiled = template(`
@import <% values.forEach(function(value) { %>'<%- value %>',<% }) %>
`);

export type ProcessedTokens = {
  subgroups: string[];
  processed: Record<string, string | Record<string, string>>;
  groupPath: string;
  groupName: string;
};

export const writeScss = async (data: ProcessedTokens) => {
  const { groupPath, subgroups, processed } = data;
  try {
    await fs.access(groupPath, constants.F_OK);
  } catch (error) {
    await fs.mkdir(groupPath, { recursive: true });
  }
  return Promise.all([
    fs.writeFile(
      path.resolve(groupPath, `_index.scss`),
      format(compiled({ values: subgroups.map((v) => `./${v}.scss`) }), { parser: 'scss' }),
    ),
    ...subgroups.map((value) => {
      const result = { [value]: processed[value] };
      return fs.writeFile(
        path.resolve(groupPath, `_${value}.scss`),
        format(convertJsToSass(result), { parser: 'scss' }),
      );
    }),
  ]);
};
