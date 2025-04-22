import path from 'path';
import fs from 'fs';

import { is } from 'superstruct';
import { format } from 'prettier';
import mapValues from 'lodash/mapValues';
import mapKeys from 'lodash/mapKeys';
import pick from 'lodash/pick';

import { convertPrimitiveValue } from './helpers/convertPrimitiveValue';
import { ShadowValue } from './validators/ShadowValue';

type Props = {
  src: string;
  destination: string;
  keys: Record<string, string[]>;
  theme: string;
};

export const generateTwConfigJSON = (props: Props) => {
  const { src, destination, keys, theme } = props;

  /** получение токенов из денормализованного JSON */
  const tokensJSONStr = fs.readFileSync(src, { encoding: 'utf-8', flag: 'as+' });
  const tokens = tokensJSONStr ? JSON.parse(tokensJSONStr).values : {};

  /** скип генерации, если токены пустые или их нет */
  if (!Object.keys(tokens).length) {
    return;
  }

  /** выборка токенов, из которых нужно создать классы TW */
  const pickedTokens = pick(tokens, Object.keys(keys));

  /** генерация объекта экстенд конфига */
  const mapedTokens = mapValues(pickedTokens, (group, groupKey) => {
    /** чиска группы токенов по заданным ключам */
    const clearedGroup = keys[groupKey].length ? pick(group, keys[groupKey]) : group;

    return mapValues(clearedGroup, (property) => {
      /** добавление имени темы и доп префиксов (если нужны) к классам TW */
      const themeNamed = mapKeys(property, (propertyValue, propertyKey) => {
        const { value } = propertyValue;

        const prefix = theme ? `${theme}-` : '';

        if (is(value, ShadowValue)) {
          return `${prefix}${value.type}-${propertyKey}`;
        }

        return `${prefix}${propertyKey}`;
      });

      /** парсинг мапы с уже проименнованными ключами в формат экстенда TW */
      return mapValues(themeNamed, (namedProperty) => {
        const { value, type } = namedProperty;

        return convertPrimitiveValue({ value, type });
      });
    });
  });

  /** проверка/создание директории */
  try {
    fs.accessSync(destination, fs.constants.F_OK);
  } catch (error) {
    fs.mkdirSync(destination, { recursive: true });
  }

  /** запись JSON */
  const stringified = format(JSON.stringify(mapedTokens, null, 2), { parser: 'json', endOfLine: 'crlf' });

  fs.writeFileSync(path.resolve(destination, 'extend.json'), stringified);
};
