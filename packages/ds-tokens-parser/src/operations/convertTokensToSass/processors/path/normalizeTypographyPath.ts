import { TokenDescriptionAbstract } from '../../interfaces';

/**
 * расчет составляющих пути к токену
 */
export const normalizeTypographyPath = <T>(token: TokenDescriptionAbstract<T>): TokenDescriptionAbstract<T> => {
  if (token.path.groupName === 'typography' && token.path.schemeName === 'text-scale') {
    token.path.schemeName = 'scale';
  }

  return token;
};
