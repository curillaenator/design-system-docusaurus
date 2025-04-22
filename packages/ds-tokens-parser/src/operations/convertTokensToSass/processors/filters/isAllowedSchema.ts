import { TokenDescriptionAbstract } from '../../interfaces';

const forbiddenKeys: string[] = ['text-paragraph'];

export const isAllowedSchema = <T>(token: TokenDescriptionAbstract<T>): boolean =>
  !forbiddenKeys.includes(token.path.schemeName || '');
