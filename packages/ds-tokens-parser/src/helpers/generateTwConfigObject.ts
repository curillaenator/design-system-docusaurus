import mapValues from 'lodash/mapValues';
import toPairs from 'lodash/toPairs';
import fromPairs from 'lodash/fromPairs';

type TWAssoc = Record<string, string[]>;
type Tokens = Record<string, object>;

export const generateTwConfigObject = (twAssoc: TWAssoc, tokens: Tokens): Tokens => {
  const maped = mapValues(twAssoc, (assoc) => {
    if (assoc.some((tokenKey) => tokenKey in tokens)) {
      let merged = {};

      assoc.forEach((tokenKey) => {
        if (!(tokenKey in tokens)) {
          return;
        }

        merged = { ...merged, ...tokens[tokenKey] };
      });

      return merged;
    }

    return false;
  });

  return fromPairs(toPairs(maped).filter(([, val]) => !!val));
};
