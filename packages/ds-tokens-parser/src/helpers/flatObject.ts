import reduce from 'lodash/reduce';

import { LoggerOptions } from './interfaces';

export const flatObject = (object: object, { logger }: LoggerOptions): object =>
  reduce(
    object,
    (acc, value, key) => {
      if (logger) {
        // @ts-expect-error
        const duplicates = Object.keys(value).filter((k) => Boolean(acc[k]));
        if (duplicates.length) {
          logger.warn(duplicates, `flatObject: found duplicates in group ${key}`);
        }
      }

      // @ts-expect-error
      return typeof value === 'object' ? { ...acc, ...value } : acc;
    },
    {},
  );
