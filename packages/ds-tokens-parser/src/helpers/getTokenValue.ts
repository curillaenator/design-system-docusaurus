import get from 'lodash/get';

import { mapDropShadow } from '../mappers/mapDropShadow';

import { LoggerOptions } from './interfaces';
import { mapObjectValuesDeep } from './mapObjectValuesDeep';

type BoxShadow = Parameters<typeof mapDropShadow>[0];
type ProcessorsHandler = {
  // eslint-disable-next-line
  default: (value: object | null) => any;
  boxShadow: (value: BoxShadow) => string;
};

const FIND_TOKEN_LINKS_REG_EXP = /({[^}]*})/g;
const EXTRACT_TOKEN_LINK_REG_EXP = /{(?<content>[\s\S]*?)}/;

const PROCESSORS: ProcessorsHandler = {
  default: (value: object | null) => value,
  boxShadow: (value: BoxShadow) => mapDropShadow(value),
};

export const getTokenValue = (src: string, store: object, options?: LoggerOptions) => {
  if (typeof src !== 'string' && typeof src !== 'number') {
    options?.logger.warn(
      `getTokenValue: passed value doesn't satisfy expected type, value: ${src}, type: ${typeof src}`,
    );
  }

  if (!src || !src.toString) {
    options?.logger?.warn('getTokenValue: passed value can\'t be processed, falling back to string "undefined"');
    return 'undefined';
  }

  const links = src.toString().match(FIND_TOKEN_LINKS_REG_EXP);

  if (!links) {
    return src;
  }

  return links.reduce((str, bracketed) => {
    const link = bracketed.match(EXTRACT_TOKEN_LINK_REG_EXP)?.groups?.content ?? '';
    const { value, type } = get(store, link) ?? {};

    if (!value) {
      options?.logger?.warn(`getTokenValue: couldn't find value by link ${link}`);
      return 'undefined';
    }

    const normalized = mapObjectValuesDeep(value, (v: string) => getTokenValue(v, store, options));
    const processed = (PROCESSORS[type as keyof ProcessorsHandler] ?? PROCESSORS.default)(normalized);

    return str.replace(bracketed, processed ?? 'undefined');
  }, src.toString());
};
