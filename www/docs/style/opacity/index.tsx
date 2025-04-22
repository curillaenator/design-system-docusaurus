import React from 'react';
import JSON_SOURCE from '@kit-xyz/theme/src/dist/XYZ.json';

import { CardProps } from '../interfaces';

import { Opacity } from './components/Opacity';

const TOKENS = JSON_SOURCE.values.style['opacity'] as Record<string, { value: string }>;

export const OPACITIES: CardProps[] = Object.entries(TOKENS).map(([key, token]) => ({
  id: `docusaurus-opacity-${key}`,
  title: key === 'none' ? 'None' : `Opacity-${key}`,
  children: <Opacity opacity={token.value} />,
  code: JSON.stringify(token, null, 1),
}));
