import mapValues from 'lodash/mapValues';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Callback = (value: any) => any;

export const mapObjectValuesDeep = (value: unknown, fn: Callback): object =>
  typeof value === 'object' ? mapValues(value, (v) => mapObjectValuesDeep(v, fn)) : fn(value);
