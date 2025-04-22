import React from 'react';
import JSON from '@kit-xyz/theme/src/dist/XYZ.json';
import { makeColorValues } from '@site/shared/docsUtils';
import { CardColorValue } from '@site/src/components/ExamplesGrid';
import type { AvatarProps } from '@kit-xyz/avatar';

import avatar1 from '../assets/avatar1.jpg';

// THEME

const { color } = JSON.values.style;

export const COLORS = Object.entries({
  'Accent-1-700': 'transparent',
  'Neutral-700': 'transparent',
  'Neutral-600': 'var(--color-neutral-500)',
  'Neutral-200': 'var(--color-neutral-300)',
  'Neutral-100': 'transparent',
}).map(([name, border]) => {
  const colorValue = color[name.toLowerCase()] ? color[name.toLowerCase()].value : '#ff0000';

  return {
    title: name,
    subtitles: makeColorValues(colorValue),
    children: <CardColorValue color={colorValue} borderColor={border} />,
  };
});

// FORMS

export const FORMS: (AvatarProps & { code?: string })[] = [
  {
    title: 'square',
    size: 'l',
    shape: 'square',
    username: 'Аватар Аватарович',
    subline: 'Квадратный',
  },
  {
    title: 'rounded',
    size: 'l',
    shape: 'rounded',
    username: 'Аватар Аватарович',
    subline: 'Скругленый',
  },
  {
    title: 'circular',
    size: 'l',
    shape: 'circular',
    username: 'Аватар Аватарович',
    subline: 'Круглый',
  },
];

export const SIZES: (AvatarProps & { code?: string })[] = [
  {
    title: 'XS',
    size: 'xs',
    shape: 'circular',
    src: avatar1,
    username: 'Аватар Аватарович',
    // subline: 'XS',
  },
  {
    title: 'S',
    size: 's',
    shape: 'circular',
    src: avatar1,
    username: 'Аватар Аватарович',
    // subline: 'S',
  },
  {
    title: 'M',
    size: 'm',
    shape: 'circular',
    src: avatar1,
    username: 'Аватар Аватарович',
    // subline: 'M',
  },
  {
    title: 'L',
    size: 'l',
    shape: 'circular',
    src: avatar1,
    username: 'Аватар Аватарович',
    // subline: 'L',
  },
  {
    title: 'XL',
    size: 'xl',
    shape: 'circular',
    src: avatar1,
    username: 'Аватар Аватарович',
    // subline: 'XL',
  },
];
