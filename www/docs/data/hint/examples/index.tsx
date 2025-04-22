import React from 'react';
import { Badge } from '@kit-xyz/badge';
import type { HintProps } from '@kit-xyz/hint';
import JSON from '@kit-xyz/theme/src/dist/XYZ.json';
import { makeColorValues } from '@site/shared/docsUtils';
import { CardColorValue } from '@site/src/components/ExamplesGrid';

const LOREM = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, inventore?';

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

interface DocsPaperProps {
  code?: string;
  title?: string;
}

const COMMON: Partial<HintProps> = {
  dropShadow: true,
  smoothedCorners: true,
};

export const SIZES: (HintProps & DocsPaperProps)[] = [
  {
    ...COMMON,
    id: 'none',
    title: 'None',
    maxWidth: '384px',
    borderRadius: 'xl',
    padding: 'l',
    children: <Badge shape='rounded'>Наведи на меня</Badge>,
    content: <span>{LOREM}</span>,
  },
];

export const PLACEMENTS: (HintProps & DocsPaperProps)[] = [
  {
    ...COMMON,
    id: 'top-left',
    title: 'None',
    maxWidth: '384px',
    placement: 'top-left',
    borderRadius: 'l',
    padding: 'm',
    children: <Badge shape='rounded'>Наведи на меня</Badge>,
    content: <span>{LOREM}</span>,
  },
  {
    ...COMMON,
    id: 'top-center',
    title: 'Top-center',
    maxWidth: '384px',
    placement: 'top-center',
    borderRadius: 'l',
    color: 'accent-2-100',
    padding: 'm',
    children: <Badge shape='rounded'>Наведи на меня</Badge>,
    content: <span>{LOREM}</span>,
  },
  {
    ...COMMON,
    id: 'top-right',
    title: 'Top-right',
    maxWidth: '384px',
    placement: 'top-right',
    borderRadius: 'l',
    color: 'positive-200',
    padding: 'm',
    children: <Badge shape='rounded'>Наведи на меня</Badge>,
    content: <span>{LOREM}</span>,
  },
  {
    ...COMMON,
    id: 'right-top',
    title: 'Right-top',
    maxWidth: '384px',
    placement: 'right-top',
    borderRadius: 'm',
    padding: 's',
    children: <Badge shape='rounded'>Наведи на меня</Badge>,
    content: <span>{LOREM}</span>,
  },
  {
    ...COMMON,
    id: 'right-center',
    title: 'Right-center',
    maxWidth: '384px',
    placement: 'right-center',
    borderRadius: 'm',
    padding: 's',
    children: <Badge shape='rounded'>Наведи на меня</Badge>,
    content: <span>{LOREM}</span>,
  },
  {
    ...COMMON,
    id: 'right-bottom',
    title: 'Right-bottom',
    maxWidth: '384px',
    placement: 'right-bottom',
    borderRadius: 'm',
    padding: 's',
    color: 'accent-1-700',
    children: <Badge shape='rounded'>Наведи на меня</Badge>,
    content: <span>{LOREM}</span>,
  },
];
