import { is, create } from 'superstruct';
import mapValues from 'lodash/mapValues';
import toPairs from 'lodash/toPairs';
import keys from 'lodash/keys';

import { logger } from './initializers/logger';
import { TokenJSON } from './validators/TokenJSON';
import { PrimitiveGroup } from './validators/PrimitiveValue';

type Options = {
  prevKey: string;
  groupName: string;
};

const scaleSizesCheck = (v: object, options: Options) => {
  const { prevKey, groupName } = options;

  if (typeof v !== 'object') {
    return;
  }

  if (prevKey.includes(`${groupName}/scale`)) {
    const reference: string[] = [];

    toPairs(v).forEach(([scaleKey, scaleVal], i) => {
      if (i === 0) {
        keys(scaleVal).forEach((k) => reference.push(k));
      }

      if (i > 0) {
        const keyCheck = reference.every((refKey) => keys(scaleVal).includes(refKey));
        const lenghtCheck = reference.length === keys(scaleVal).length;

        if (!(keyCheck && lenghtCheck)) {
          logger.warn(`${prevKey}-${scaleKey}: варианты размеров не одинаковые`);
        }
      }

      if (!is(scaleVal, PrimitiveGroup)) {
        logger.warn(`${prevKey}-${scaleKey}: некорректная структура`);
      }
    });

    return;
  }

  mapValues(v, (nextV, vKey) => scaleSizesCheck(nextV, { prevKey: `${prevKey}-${vKey}`, groupName }));
};

/**
 * @param {Record<string, unknown>} tokens
 * @param {{groups?: string[]}} [options = {}]
 * @return {object | void}
 */
export const warnInvalidScaleSize = (tokens: Record<string, unknown>, options: { groups?: string[] } = {}) => {
  const { values } = create(tokens, TokenJSON);
  const { groups = keys(values) } = options;

  groups.forEach((groupName) => {
    scaleSizesCheck(values[groupName], { prevKey: groupName, groupName });
  });
};
