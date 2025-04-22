import get from 'lodash/get';
import clone from 'lodash/cloneDeep';
import merge from 'lodash/merge';

import { LoggerOptions } from './interfaces';

export const extendObject = (link: string, target: object, store: object, options?: LoggerOptions): object => {
  const src = get(store, link);

  if (!src) {
    options?.logger?.warn(`extendObject: couldn't find linked value by "${link}"`);
    return clone(target);
  }

  return merge({}, src, target);
};
