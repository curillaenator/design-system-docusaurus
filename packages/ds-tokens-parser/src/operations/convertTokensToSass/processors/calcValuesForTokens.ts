import { convertCalcedValues } from '../helpers/convertCalcedValues';
import { TokenDescriptionParsedToken } from '../interfaces';

/**
 * Выполняем вычисление некоторых значений темы заданных в виде математической операции (64 / 4 = 16)
 */
export const calcValuesForTokens = (description: TokenDescriptionParsedToken): TokenDescriptionParsedToken => {
  if (typeof description.token.value === 'string') {
    description.token.value = convertCalcedValues(description.token.value);
  }

  return description;
};
