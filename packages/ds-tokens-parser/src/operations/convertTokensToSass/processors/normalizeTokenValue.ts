import { TokenDescriptionFinal, TokenDescriptionParsedToken, TokenDescriptionParsedTypography } from '../interfaces';

/**
 * Замещение полной информации о token, на информацию о его значении
 */
export const normalizeTokenValue = (
  description: TokenDescriptionParsedToken | TokenDescriptionParsedTypography,
): TokenDescriptionFinal => {
  // @ts-ignore
  description.token = description.token.value;
  // @ts-ignore
  return description;
};
