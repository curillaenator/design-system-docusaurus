/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import fs, { constants } from 'fs';
import path from 'path';

import { format } from 'prettier';
import fromPairs from 'lodash/fromPairs';
import keys from 'lodash/keys';
import uniq from 'lodash/uniq';

import { disvowel } from '../../utils/disvowel';

import { ResolveTokenNamesOptions } from './types';
import { findNames } from './helpers/findNames';
import { collectUniqNames } from './helpers/collectUniqNames';

export const initNotations = (opts: ResolveTokenNamesOptions) => {
  const {
    src,
    dist,
    skipAssoc = {},
    variationsAssoc = {
      tokenNames: [],
      schemaNames: [],
    },
    existingNotations = {
      componentNames: {},
      schemaNames: {},
      tokenNames: {},
    },
  } = opts;

  const { values: tokens } = require(src);
  const { componentNames, schemaNames: existingSchemaNames, tokenNames: existingTokenNames } = existingNotations;
  const { tokenNames: tokenNamesVariations, schemaNames: schemaNamesVariations } = variationsAssoc;

  const { tokensNames, schemasNames } = findNames(tokens, { skipAssoc });
  const suggestedDictionary = {
    componentNames: fromPairs(
      uniq(keys(tokens).filter((compName) => !skipAssoc[compName]))
        .filter((compName) => !componentNames[compName])
        .map((compName) => [compName, disvowel(compName)]),
    ),

    schemaNames: collectUniqNames({
      variatedNames: schemasNames,
      variationsAssoc: schemaNamesVariations,
      existingNames: existingSchemaNames,
    }),

    tokenNames: collectUniqNames({
      variatedNames: tokensNames,
      variationsAssoc: tokenNamesVariations,
      existingNames: existingTokenNames,
    }),
  };

  try {
    fs.accessSync(path.dirname(dist), constants.F_OK);
  } catch (error) {
    fs.mkdirSync(path.dirname(dist), { recursive: true });
  }

  fs.writeFileSync(dist, format(JSON.stringify(suggestedDictionary), { parser: 'json', endOfLine: 'crlf' }));
};
