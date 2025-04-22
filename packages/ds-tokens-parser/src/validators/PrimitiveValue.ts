import { object, string, coerce, define, is, unknown, record, optional } from 'superstruct';

import { convertPrimitiveValue } from '../helpers/convertPrimitiveValue';

export const PrimitiveValueType = define('PrimitiveValue', (v) => is(v, object()) && 'type' in v && 'value' in v);

export const StrongPrimitiveValue = object({
  type: string(),
  value: string(),
  varName: optional(string()),
});

export const PrimitiveValue = coerce(
  StrongPrimitiveValue,
  object({
    type: string(),
    value: unknown(),
    varName: optional(string()),
  }),
  ({ type, value, ...prims }) => ({ type, value: convertPrimitiveValue({ type, value }), ...prims }),
);

export const PrimitiveGroup = record(string(), PrimitiveValue);
