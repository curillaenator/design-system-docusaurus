import { isObject, isToken } from '../../../types/guards';
import { TokenDescriptionOriginalWithoutPath } from '../interfaces';

export const parseTokensTree = (tokens: object, path = []): TokenDescriptionOriginalWithoutPath[] =>
  Object.keys(tokens).reduce<TokenDescriptionOriginalWithoutPath[]>((acc, key: keyof typeof tokens) => {
    const token = tokens[key];
    if (isObject(token)) {
      const newPath = [...path, key];

      if (isToken(token)) {
        acc.push({
          token,
          originalPath: newPath,
        });
      } else {
        acc = acc.concat(parseTokensTree(token, newPath));
      }
    }

    return acc;
  }, []);
