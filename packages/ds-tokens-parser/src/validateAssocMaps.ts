/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from 'superstruct';
import toPairs from 'lodash/toPairs';
import values from 'lodash/values';
import keys from 'lodash/keys';
import uniq from 'lodash/uniq';

import { logger } from './initializers/logger';
import { CssvDictAssocStruct, ComponentsAssocStruct } from './validators/NotationsAssocValue';
import { ComponentsAssocType } from './interfaces';
import { CssvDictionaryType } from './operations/convertTokensToSass/interfaces';

type TestType = 'pass' | 'fail';

const DICT_NAMES: (keyof CssvDictionaryType)[] = ['schemaNames', 'tokenNames'];

const warnDuplicates = (obj: object, text: string): TestType => {
  if (values(obj).length !== uniq(values(obj)).length) {
    logger.warn(`В ассоциации нотаций ${text} найдены дубликаты!!!`);

    const dups: Record<string, number> = {};

    toPairs(obj).forEach(([_, v]) => {
      if (!dups[v]) {
        dups[v] = 1;
        return;
      }

      dups[v] += 1;
    });

    toPairs(dups)
      .filter(([_, v]) => v > 1)
      .forEach(([k]) => {
        logger.warn(`нотация ${k} дублируется ヽ(°□° )ノ`);
      });

    return 'fail';
  }

  return 'pass';
};

const warnEmptyAssoc = (obj: object, text: string): TestType => {
  if (keys(obj).length === 0) {
    logger.warn(`Ассоциация ${text} пуста`);
    return 'fail';
  }

  return 'pass';
};

export const validateAssocMaps = (components: ComponentsAssocType, cssvDict: CssvDictionaryType): boolean => {
  const comps = create(components, ComponentsAssocStruct);
  const dicts = create(cssvDict, CssvDictAssocStruct) as CssvDictionaryType;

  const tests: TestType[] = [];

  tests.push(warnEmptyAssoc(comps, 'компонентов'));
  tests.push(warnDuplicates(comps, 'для компонентов'));

  DICT_NAMES.forEach((dictName) => {
    tests.push(warnEmptyAssoc(dicts[dictName], `${dictName.toString()}`));
    tests.push(warnDuplicates(dicts[dictName], `для ${dictName.toString()}`));
  });

  const passed = tests.every((test) => test === 'pass');

  if (!passed) {
    logger.error('(っ◔◡◔)っ Cловарь аннотаций не корректен, парсер остановлен');
  }

  return passed;
};
