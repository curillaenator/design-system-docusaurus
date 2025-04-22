import React from 'react';
import TOKENS_SOURCE from '@kit-xyz/theme/src/dist/XYZ.json';
import { rgbaToHex, rgbShort } from '@site/shared/docsUtils';

import { TransparentValue } from './components/TransparentValue';

const { tpValues, groups } = require('./constants');

const TOKENS = TOKENS_SOURCE.values.style['color-transparent'] as Record<string, { value: string; type: string }>;

const getSubtitles = (value: string, tp: string) => {
  const hex = rgbaToHex(value).toUpperCase().slice(0, 7);
  return [`HEX: ${hex} ${tp}`, `RGB: ${rgbShort(value)}`];
};

export const TRANSPARENCIES = Object.fromEntries(
  groups.map((group) => [
    group,
    tpValues.map((tp) => {
      const colorName = `${group}-${tp}`;
      const backgroundColor = TOKENS[colorName].value;

      return {
        id: colorName,
        title: colorName.slice(0, 1).toUpperCase() + colorName.slice(1),
        subtitles: getSubtitles(backgroundColor, tp),
        children: (
          <TransparentValue
            mode={colorName.includes('-100-0%') ? 'dark' : undefined}
            bordered={tp === '0%'}
            style={{ backgroundColor }}
          />
        ),
      };
    }),
  ]),
);

export const CODEBLOCKS = Object.fromEntries(
  groups.map((group) => [group, require(`!!raw-loader!./examples/${group}.txt`).default]), // eslint-disable-line global-require, import/no-dynamic-require
);
