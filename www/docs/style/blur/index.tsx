import React from 'react';
import JSON_SOURCE from '@kit-xyz/theme/src/dist/XYZ.json';

import { CardProps } from '../interfaces';

import { Blur } from './components/Blur';

const TOKENS = JSON_SOURCE.values.style['blur'] as Record<string, { value: string }>;
const px = (str: string) => (/.*px$/.test(str) ? str : `${str}px`);

export const BLURS: CardProps[] = Object.entries(TOKENS).map(([key, { value }]) => ({
  id: `docusaurus-blur-${key}`,
  title: key === 'none' ? 'None' : key.toUpperCase(),
  subtitles: [`Blur: ${px(value)}`],
  children: <Blur blur={px(value)} />,
}));

export const CODEBLOCK = JSON.stringify(TOKENS, null, 1);
