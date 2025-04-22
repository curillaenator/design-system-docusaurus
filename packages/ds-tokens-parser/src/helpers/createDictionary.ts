import toPairs from 'lodash/toPairs';
import fromPairs from 'lodash/fromPairs';

type Map = Record<string, string>;

const variate = (name: string, notatedName: string, variationAssoc: Map) => {
  const variationsMap = toPairs(variationAssoc).map(([variation, notation]) => [
    `${name}-${variation}`,
    `${notatedName}-${notation}`,
  ]);

  return {
    [name]: notatedName,
    ...fromPairs(variationsMap),
  };
};

export const createDictionary = (tokensAssoc: Map, variationsAssoc: Map) => {
  let res = {};

  toPairs(tokensAssoc).forEach(([name, notes]) => {
    res = { ...res, ...variate(name, notes, variationsAssoc) };
  });

  return res;
};
