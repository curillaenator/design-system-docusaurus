import { create } from 'superstruct';

import { logger } from './initializers/logger';
import { TokenJSON } from './validators/TokenJSON';
import { mapObjectValuesDeep } from './helpers/mapObjectValuesDeep';
import { flatObject } from './helpers/flatObject';
import { getTokenValue } from './helpers/getTokenValue';
import { flattenRgbaValues } from './helpers/flattenRgbaValues';
import { extendTokenValues } from './helpers/extendTokenValues';

export const parseThemeObject = (obj: Record<string, unknown>): object => {
  /** @description валидация токенов */
  const tokens = create(obj, TokenJSON);

  /**
   * @description создание общего хранилища всех вложенных объектов для быстрого доступа по ключам
   * */
  const tokenValueLinks = flatObject(tokens.values, { logger });

  /**
   * @description создание функции денормализации значений по ключам с замыканием хранилища со ссылками
   * @param {string | number | object} v
   */
  const getThemeValue = (v: string) => getTokenValue(v, tokenValueLinks, { logger });

  /** @description деномрализация значений */
  const denormalized = mapObjectValuesDeep(tokens, getThemeValue);
  /**
   * @description приведение значений с вложенными цветами к плоскому виду
   * @example `rgba(rgb(0, 0, 0), 0.6)` к `rgba(0, 0, 0, 0.6)`
   * */
  const colorsFlatten = mapObjectValuesDeep(denormalized, flattenRgbaValues);

  /**
   * @description создание общего хранилища всех вложенных объектов для быстрого доступа по ключам
   * */
  // @ts-expect-error
  const processedTokenValueLinks = flatObject(colorsFlatten.values, { logger });

  /**
   * @description мердж значений токенов по ссылке на расширяемый объект
   * */
  return extendTokenValues(processedTokenValueLinks, colorsFlatten, { logger });
};
