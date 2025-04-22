import fromPairs from 'lodash/fromPairs';

import { disvowel } from '../../../utils/disvowel';
import { CollectUniqNamesOptions } from '../types';

export const collectUniqNames = (opts: CollectUniqNamesOptions) => {
  const { variatedNames, variationsAssoc, existingNames } = opts;
  const names: string[] = variatedNames.map((originalName) =>
    variationsAssoc.reduce((name, variation) => name.replace(variation, '').replace('/', '-'), originalName),
  );

  return fromPairs(
    names
      .filter((name) => !existingNames[name])
      .sort((a, b) => a.localeCompare(b))
      .map((name) => [name, disvowel(name)]),
  );
};
