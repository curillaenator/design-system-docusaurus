import React from 'react';
import type { ToastProps } from '@kit-xyz/toast';
import JSON from '@kit-xyz/theme/src/dist/XYZ.json';
import { makeColorValues } from '@site/shared/docsUtils';
import GridIcon from '@kit-xyz/icon/src/assets/duotone/GridIcon';

import { CardColorValue } from '../../../../src/components/ExamplesGrid';

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

export const TOASTS: (ToastProps & { title?: string; code?: string })[] = [
  {
    title: 'Top-left',
    message: 'Top-left',
    position: 'top-left',
    Icon: GridIcon,
    autoClose: false,
  },
  {
    title: 'Top-center',
    message: 'Top-center',
    position: 'top-center',
    Icon: GridIcon,
    autoClose: false,
  },
  {
    title: 'Top-right',
    message: 'Top-right',
    position: 'top-right',
    Icon: GridIcon,
    autoClose: false,
  },
  {
    title: 'Bottom-left',
    message: 'Bottom-left',
    position: 'bottom-left',
    Icon: GridIcon,
    autoClose: false,
  },
  {
    title: 'Bottom-center',
    message: 'Bottom-center',
    position: 'bottom-center',
    Icon: GridIcon,
    autoClose: false,
  },
  {
    title: 'Bottom-right',
    message: 'Bottom-right',
    position: 'bottom-right',
    Icon: GridIcon,
    autoClose: false,
  },
];
