import { TokenDescriptionParsedTypography } from '../../interfaces';

import { convertTypographyValues } from './convertTypographyValues';

export const normalizeTypographyValue = (
  description: TokenDescriptionParsedTypography,
): TokenDescriptionParsedTypography => {
  description.token.value = convertTypographyValues(description.token.value);

  return description;
};
