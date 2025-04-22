import set from 'lodash/set';

import { PathParts, TokenDescriptionFinal } from '../interfaces';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const encodeTokensTree = (descriptions: TokenDescriptionFinal[]): any => {
  const result = {};

  const createPathByParts = (path: PathParts) =>
    [
      path.groupName,
      ('sectionName' in path && path?.sectionName) || ('themeName' in path && path?.themeName),
      path.schemeName,
      path.tokenName,
    ]
      .filter(Boolean)
      .join('.');

  descriptions.forEach((description) => {
    set(result, createPathByParts(description.path), description.token);
  });

  return result;
};
