import { PathParts, TokenDescriptionOriginal, TokenDescriptionOriginalWithoutPath } from '../../interfaces';

const parsePath = (path: string[]): PathParts => {
  const temp = path.map((v) => v.replaceAll('/', '-'));

  const themeIndex = temp.findIndex((i) => i.includes('theme'));
  const themeName = themeIndex > -1 ? temp.splice(themeIndex, 1)[0] : undefined;

  const groupName = temp.splice(0, 1)[0];
  const tokenName = temp.splice(-1, 1)[0];
  const schemeName = temp.splice(-1, 1)[0];
  const sectionName = temp.splice(-1, 1)[0];

  return {
    groupName,
    tokenName,
    themeName: themeName?.replace(`${groupName}-`, ''),
    sectionName: sectionName?.replace(`${groupName}-`, ''),
    schemeName,
  };
};

/**
 * Обработка пути к токену для получения мета информации
 */
export const normalizePath = (token: TokenDescriptionOriginalWithoutPath): TokenDescriptionOriginal => {
  // @ts-ignore
  token.path = parsePath(token.originalPath);

  return token as TokenDescriptionOriginal;
};
