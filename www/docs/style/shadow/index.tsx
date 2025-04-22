import React from 'react';
import TOKENS_SOURCE from '@kit-xyz/theme/src/dist/XYZ.json';

import type { CardProps } from '../interfaces';

import { Shadow } from './components/Shadow';
import type { ShadowToken } from './interfaces';

const TOKENS = TOKENS_SOURCE.values.style['shadow'] as Record<string, { value: ShadowToken; type: string }>;

const makeSubtitles = (shadowToken: ShadowToken) => {
  const { x, y, blur, spread } = shadowToken;
  return [`x: ${x}`, `y: ${y}`, `Blur: ${blur}`, `Spread: ${spread}`];
};

const modesAssoc: Record<string, string> = {
  light: 'dark',
  dark: 'light',
  color: 'light',
};

export const SIZES: CardProps[] = ['neutral-dark-l', 'neutral-dark-m', 'neutral-dark-s'].map((shadowName) => {
  const size = shadowName.replace('neutral-dark-', '');

  return {
    id: shadowName,
    title: size.toUpperCase(),
    subtitles: makeSubtitles(TOKENS[shadowName].value),
    children: <Shadow color='neutral' size={size} />,
    code: (colorMode: 'light' | 'dark' | 'color') =>
      JSON.stringify(TOKENS[`neutral-${modesAssoc[colorMode]}-${size}`], null, 1),
  };
});

const groupShadows = () => {
  const grouped = {};

  Object.entries(TOKENS).forEach(([shadowName, token]) => {
    if (/-l$/.test(shadowName) !== true) return; // тест на размер, в группы пушаться только L

    const nameSlicer = shadowName.includes('accent') ? 2 : 1;
    const shadowColorName = shadowName.split('-').slice(0, nameSlicer).join('-');

    if (!grouped[shadowColorName]) {
      grouped[shadowColorName] = [];
    }

    const cardTitle = shadowName.replace(`${shadowColorName}-`, '').replace('-l', '');

    grouped[shadowColorName].push({
      id: shadowName,
      title: cardTitle.slice(0, 1).toUpperCase() + cardTitle.slice(1),
      subtitles: makeSubtitles(token.value),
      children: <Shadow shadowName={shadowName} />,
      code: JSON.stringify(token.value, null, 1),
      colorMode: cardTitle === 'light' ? 'dark' : 'light',
    });
  });

  return grouped;
};

export const SHADOWS = groupShadows();
