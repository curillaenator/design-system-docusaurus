import React from 'react';
import TOKENS_SOURCE from '@kit-xyz/theme/src/dist/XYZ.json';
import { rgbaToHex, rgbShort } from '@site/shared/docsUtils';

import { Gradient } from './components/Gradient';

const colorNames = ['neutral', 'accent-1', 'accent-2', 'informative', 'positive', 'attention', 'negative'];

const TOKENS = TOKENS_SOURCE.values.style['color-gradient-transparent'] as Record<
  string,
  { value: string; type: string }
>;

const directions: Record<string, string> = {
  top: '↓',
  left: '→',
  bottom: '↑',
  right: '←',
};

const getSubtitles = (value: string) => {
  const color = value.match(/rgba?\(\d*,\s\d*,\s\d*(,\s\d*)?\)/);
  const rgb = color[0];
  return [`HEX: ${rgbaToHex(rgb).toUpperCase()} (100% - 0%)`, `RGB: ${rgbShort(rgb)} 1 - ${rgbShort(rgb)} 0`];
};

const makeCombinations = () => {
  const groups = {};

  Object.entries(TOKENS).forEach(([key, token]) => {
    const { value } = token;
    const k = key.split('-');
    const title = k.slice(0, k.length - 1).join('-');
    const directon = directions[k[k.length - 1]];

    if (!groups[title]) {
      groups[title] = [];
    }

    groups[title].push({
      id: key,
      title: `${title} ${directon}`,
      subtitles: getSubtitles(value),
      children: <Gradient style={{ backgroundImage: value }} />,
    });
  });

  return groups;
};

export const GRADIENTS = makeCombinations();

export const CODEBLOCKS = Object.fromEntries(
  colorNames.map((color) => [color, require(`!!raw-loader!./examples/${color}.txt`).default]), // eslint-disable-line global-require, import/no-dynamic-require
);
