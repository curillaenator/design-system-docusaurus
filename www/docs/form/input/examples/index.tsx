import React from 'react';
import JSON from '@kit-xyz/theme/src/dist/XYZ.json';
import GridIcon from '@kit-xyz/icon/src/assets/duotone/GridIcon';
import { makeColorValues } from '@site/shared/docsUtils';
import { CardColorValue } from '@site/src/components/ExamplesGrid';
import type { InputProps } from '@kit-xyz/input';

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

export const APPEARANCES: (InputProps & { code?: string })[] = [
  {
    title: 'primary-solid',
    appearance: 'primary-solid',
    IconLeft: GridIcon,
    // disabled: true,
  },
  {
    title: 'primary-transparent',
    appearance: 'primary-transparent',
    IconLeft: GridIcon,
    // disabled: true,
  },
  {
    title: 'secondary-solid',
    appearance: 'secondary-solid',
    IconRight: GridIcon,
    // disabled: true,
  },
  {
    title: 'secondary-transparent',
    appearance: 'secondary-transparent',
    IconRight: GridIcon,
    // disabled: true,
  },
  {
    title: 'tertiary-solid',
    appearance: 'tertiary-solid',
    IconRight: GridIcon,
    // disabled: true,
  },
  {
    title: 'tertiary-transparent',
    appearance: 'tertiary-transparent',
    IconRight: GridIcon,
    // disabled: true,
  },
];

export const STATES: (InputProps & { code?: string })[] = [
  {
    title: 'Normal',
    IconRight: GridIcon,
    IconLeft: GridIcon,
  },
  {
    title: 'Disabled',
    IconRight: GridIcon,
    IconLeft: GridIcon,
    disabled: true,
  },
  {
    title: 'Success',
    IconRight: GridIcon,
    IconLeft: GridIcon,
    state: 'success',
  },
  {
    title: 'Error',
    IconRight: GridIcon,
    IconLeft: GridIcon,
    state: 'error',
  },
  {
    title: 'Skeleton',
    skeleton: '100%',
  },
];

export const SHAPES: (InputProps & { code?: string })[] = [
  {
    title: 'Square',
    shape: 'square',
    IconRight: GridIcon,
    IconLeft: GridIcon,
  },
  {
    title: 'Rounded',
    shape: 'rounded',
    IconRight: GridIcon,
    IconLeft: GridIcon,
  },
  {
    title: 'Circular',
    shape: 'circular',
    IconRight: GridIcon,
    IconLeft: GridIcon,
  },
  {
    title: 'Skeleton-square',
    shape: 'square',
    skeleton: '100%',
  },
  {
    title: 'Skeleton-rounded',
    shape: 'rounded',
    skeleton: '100%',
  },
  {
    title: 'Skeleton-circular',
    shape: 'circular',
    skeleton: '100%',
  },
];
