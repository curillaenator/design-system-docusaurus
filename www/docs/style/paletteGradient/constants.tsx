import React from 'react';
import json from '@kit-xyz/theme/src/dist/XYZ.json';
import { rgbaToHex, rgbShort } from '@site/shared/docsUtils';

import { GradientValue } from './components/GradientValue';

const TOKENS = json.values.style['palette-gradient'] as Record<string, { value: string; type: string }>;

const getSubtitles = (value: string) => {
  const colors = value.match(/rgb\(\d*,\s\d*,\s\d*\)/g);
  const rgbs = colors.map((color) => rgbShort(color));
  const hexs = colors.map((color) => rgbaToHex(color).toUpperCase());
  return [`HEX: ${hexs.join(' - ')}`, `RGB: ${rgbs.join(' - ')}`];
};

export const GRADIENTS = Object.entries(TOKENS).map(([tokenName, token]) => ({
  id: token.value,
  title: tokenName.slice(0, 1).toUpperCase() + tokenName.slice(1),
  subtitles: getSubtitles(token.value),
  children: <GradientValue style={{ backgroundImage: token.value }} />,
}));
