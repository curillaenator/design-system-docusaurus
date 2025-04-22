import fs from 'fs';

import { generateTwConfigObject } from './helpers/generateTwConfigObject';

type Options = {
  themeAssoc?: Record<string, string[]>;
  extendAssoc?: Record<string, string[]>;
};

export const getTwConfig = (src: string, opts: Options): object => {
  const tokensJSONStr = fs.readFileSync(src, { encoding: 'utf-8', flag: 'as+' });
  const loadedTokens = tokensJSONStr ? JSON.parse(tokensJSONStr) : {};

  const { themeAssoc = {}, extendAssoc = {} } = opts;

  // для генерации конфига TW из токенов верхние уровни токенов (style, typography и тп) не требуются,
  // поэтому ниже объект с токенами уплощается

  const flattenedTokens = {};
  const groupList = Object.keys(loadedTokens);

  if (groupList.length) {
    groupList.forEach((group) => {
      Object.assign(flattenedTokens, loadedTokens[group]);
    });
  }

  // при генерации исползуется 2 объекта ассоциации для пойска и наполнения конфига, вид
  // 'ключ конфига TW': массив искомых свойств из токенов, расширящих данный ключ конфига TW

  // если в токенах не будет найдено ни одно из искомых свойств по ключу, то сам ключ конфига TW
  // в переопределение/расширение добавлен не будет.

  return {
    theme: {
      ...generateTwConfigObject(themeAssoc, flattenedTokens),
      extend: generateTwConfigObject(extendAssoc, flattenedTokens),
    },
  };
};
