import mapValues from 'lodash/mapValues';

import { extendObject } from './extendObject';
import { LoggerOptions } from './interfaces';

type SchemeType = 'color' | 'meta' | 'other' | 'color';

type Scheme = {
  value: string;
  type: SchemeType;
};

type ObjectWithScheme = object & {
  scheme?: Scheme;
};

export const extendTokenValues = (store: object, obj: object, options?: LoggerOptions) => {
  const rec = (current: ObjectWithScheme): object => {
    if (typeof current !== 'object') {
      return current;
    }

    if ('scheme' in current && current.scheme?.value) {
      const { scheme, ...target } = current;

      const extended = extendObject(scheme.value, target, store, options);

      return rec(extended);
    }

    return mapValues(current, rec);
  };

  return rec(obj);
};
