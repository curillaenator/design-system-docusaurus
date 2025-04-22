import { partition } from 'lodash';

import { TokensConfig } from '../../types/tokens';

import { parseTokensTree } from './helpers/parseTokensTree';
import { normalizePath } from './processors/path/normalizePath';
import { normalizeTypographyPath } from './processors/path/normalizeTypographyPath';
import { normalizeTokenName } from './processors/path/normalizeTokenName';
import { normalizeTypographySectionNames } from './processors/typography/normalizeTypographySectionNames';
import { isProcessedGroup } from './processors/filters/isProcessedGroup';
import { isAllowedSchema } from './processors/filters/isAllowedSchema';
import { isAllowedToken } from './processors/filters/isAllowedToken';
import { encodeTokensTree } from './helpers/encodeTokensTree';
import { typographyFilter } from './processors/typography/typographyFilter';
import { normalizeTypographyValue } from './processors/typography/normalizeTypographyValue';
import { normalizeTokenValue } from './processors/normalizeTokenValue';
import { normalizePrimitiveValue } from './processors/normalizePrimitiveValue';
import { calcValuesForTokens } from './processors/calcValuesForTokens';
import { processedCssv } from './processors/processedCssv';
import { TokenDescriptionOriginal, TokenDescriptionParsedToken, TokenDescriptionParsedTypography } from './interfaces';

export const prepareTokensForConverter = (tokens: TokensConfig) => {
  const allTokensDescription: TokenDescriptionOriginal[] = parseTokensTree(tokens)
    .map(normalizePath)

    .filter(isProcessedGroup)
    .filter(isAllowedSchema)
    .filter(isAllowedToken)

    .map(normalizeTypographyPath)
    .map(normalizeTokenName)
    .map(normalizeTypographySectionNames);

  // @ts-ignore
  let [typographyTokens, commonTokens] = partition(allTokensDescription, typographyFilter) as [
    TokenDescriptionParsedTypography[],
    TokenDescriptionParsedToken[],
  ];

  commonTokens = commonTokens.map(normalizePrimitiveValue).map(calcValuesForTokens).map(processedCssv);
  typographyTokens = typographyTokens.map(normalizeTypographyValue);

  const allPreparedTokens: TokenDescriptionParsedToken[] = [...commonTokens, ...typographyTokens];
  const finished = allPreparedTokens.map(normalizeTokenValue);

  return encodeTokensTree(finished);
};
