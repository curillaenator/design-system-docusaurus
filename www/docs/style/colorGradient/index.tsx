import React from 'react';
import TOKENS_SOURCE from '@kit-xyz/theme/src/dist/XYZ.json';
import { rgbaToHex, rgbShort } from '@site/shared/docsUtils';

import { Gradient } from './components/Gradient';

const TOKENS = TOKENS_SOURCE.values.style['color-gradient'] as Record<string, { value: string; type: string }>;

const colorNames = ['neutral', 'accent-1', 'accent-2', 'informative', 'positive', 'attention', 'negative'];

const directions: Record<string, string> = {
  top: '↓',
  left: '→',
  bottom: '↑',
  right: '←',
};

const getSubtitles = (value: string) => {
  const colors = value.match(/rgb\(\d*,\s\d*,\s\d*\)/g);
  const rgbs = colors.map((color) => rgbShort(color));
  const hexs = colors.map((color) => rgbaToHex(color).toUpperCase());
  return [`HEX: ${hexs.join(' - ')}`, `RGB: ${rgbs.join(' - ')}`];
};

const makeCombinations = () => {
  const groups = {};

  Object.entries(TOKENS).forEach(([key, token]) => {
    const { value } = token;
    const k = key.split('-');
    // @ts-expect-error clear
    const title = [...new Set(k.slice(0, k.length - 1))].join('-');
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

export const GROUPS = makeCombinations();

export const CODEBLOCKS = Object.fromEntries(
  colorNames.map((color) => [color, require(`!!raw-loader!./examples/${color}.txt`).default]), // eslint-disable-line global-require, import/no-dynamic-require
);
