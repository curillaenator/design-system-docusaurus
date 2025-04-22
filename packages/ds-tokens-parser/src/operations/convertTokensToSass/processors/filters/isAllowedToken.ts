import { TokenDescriptionAbstract } from '../../interfaces';

const forbiddenKeys: string[] = ['paragraph'];

export const isAllowedToken = <T>(token: TokenDescriptionAbstract<T>): boolean =>
  !forbiddenKeys.includes(token.path.tokenName || '');
