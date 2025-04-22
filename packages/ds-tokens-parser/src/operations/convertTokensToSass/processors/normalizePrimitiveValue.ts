import { create, is } from 'superstruct';

import { PrimitiveValue, PrimitiveValueType } from '../../../validators/PrimitiveValue';
import { TokenDescriptionOriginalToken } from '../interfaces';

/**
 * Приведение денормализованных токенов к нормализованному виду
 */
export const normalizePrimitiveValue = (description: TokenDescriptionOriginalToken): TokenDescriptionOriginalToken => {
  if (is(description.token, PrimitiveValueType)) {
    // @ts-ignore
    description.token = create(description.token, PrimitiveValue);
  }

  return description;
};
