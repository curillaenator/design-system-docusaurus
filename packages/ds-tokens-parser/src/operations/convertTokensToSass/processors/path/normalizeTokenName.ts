import { escapeSpecialSymbols } from '../../helpers/escapeSpecialSymbols';
import { TokenDescriptionAbstract } from '../../interfaces';

export const normalizeTokenName = <T>(token: TokenDescriptionAbstract<T>): TokenDescriptionAbstract<T> => {
  token.path.tokenName = escapeSpecialSymbols(token.path.tokenName);

  return token;
};
