import React from 'react';
import TOKENS_SOURCE from '@kit-xyz/theme/src/dist/XYZ.json';
import { rgbaToHex, rgbShort } from '@site/shared/docsUtils';

import { TransparentValue } from './components/TransparentValue';

const TOKENS = TOKENS_SOURCE.values.style['border-color-transparent'] as Record<
  string,
  { value: string; type: string }
>;

const getSubtitles = (value: string, transparency: string) => {
  const hex = rgbaToHex(value).toUpperCase().slice(0, 7);
  return [`HEX: ${hex} ${transparency}`, `RGB: ${rgbShort(value)}`];
};

const makeCards = () => {
  const groups = {};

  Object.entries(TOKENS).forEach(([key, token]) => {
    const groupKey = key.replace(/-\d*%$/, '');
    const transparency = key.replace(groupKey, '').replace('-', '');

    if (!groups[groupKey]) {
      groups[groupKey] = [];
    }

    groups[groupKey].push({
      id: key,
      title: key.slice(0, 1).toUpperCase() + key.slice(1),
      subtitles: getSubtitles(token.value, transparency),
      children: (
        <TransparentValue
          mode={key.includes('-100-0%') ? 'dark' : undefined}
          bordered={transparency === '0%'}
          style={{ backgroundColor: token.value }}
        />
      ),
    });
  });

  return groups;
};

const makeCodeBlocks = () => {
  const groups = {};

  Object.entries(TOKENS).forEach(([key, token]) => {
    const groupKey = key.replace(/-\d*%$/, '');
    if (!groups[groupKey]) {
      groups[groupKey] = {};
    }
    groups[groupKey][key] = token;
  });

  Object.keys(groups).forEach((groupKey) => {
    groups[groupKey] = JSON.stringify(groups[groupKey], null, 1);
  });

  return groups;
};

export const TRANSPARENCIES = makeCards();
export const CODEBLOCKS = makeCodeBlocks();
