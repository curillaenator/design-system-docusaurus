import isNaN from 'lodash/isNaN';

import { mapDropShadow } from '../mappers/mapDropShadow';

import { convertValueToPixels } from './convertValueToPixels';
import { convertValueToFontWeight } from './convertValueToFontWeight';
import { convertValueToFontFamily } from './convertValueToFontFamily';

type PrimitiveValue = {
  value: unknown;
  type: string;
};

export const convertPrimitiveValue = ({ value, type }: PrimitiveValue): string => {
  if (!value) {
    return '';
  }

  if ((type === 'fontWeights' || type === 'fontWeight') && typeof value === 'string') {
    return convertValueToFontWeight(value);
  }

  if ((type === 'fontFamilies' || type === 'fontFamily') && typeof value === 'string') {
    return convertValueToFontFamily(value);
  }

  if (type === 'boxShadow' && typeof value === 'object') {
    return mapDropShadow(value);
  }

  if (typeof value === 'number' || (typeof value === 'string' && !isNaN(+value))) {
    return convertValueToPixels(value);
  }

  return `${value}`;
};
