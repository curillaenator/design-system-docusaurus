import React from 'react';
import type { PaperProps } from '@kit-xyz/paper';
import JSON from '@kit-xyz/theme/src/dist/XYZ.json';
import { makeColorValues } from '@site/shared/docsUtils';
import { CardColorValue } from '@site/src/components/ExamplesGrid';

// THEME

const { color } = JSON.values.style;

export const COLORS = Object.entries({
  'Accent-1-700': 'transparent',
  'Neutral-700': 'transparent',
  'Neutral-600': 'var(--color-neutral-500)',
  'Neutral-200': 'var(--color-neutral-500)',
  'Neutral-100': 'transparent',
}).map(([name, borderColor]) => {
  const colorValue = color[name.toLowerCase()] ? color[name.toLowerCase()].value : '#ff0000';

  return {
    title: name,
    subtitles: makeColorValues(colorValue),
    children: <CardColorValue color={colorValue} borderColor={borderColor} />,
  };
});

interface DocsPaperProps {
  code?: string;
  title?: string;
}

export const SIZES: (PaperProps & DocsPaperProps)[] = [
  {
    id: 'none',
    title: 'None - 0px',
    borderRadius: 'none',
    fullwidth: true,
    padding: 'm',
    children: <div style={{ width: '100%', height: 128 }} />,
  },
  {
    id: 'xs',
    title: 'XS - 4px',
    borderRadius: 'xs',
    fullwidth: true,
    padding: 'm',
    children: <div style={{ width: '100%', height: 128 }} />,
  },
  {
    id: 's',
    title: 'S - 8px',
    borderRadius: 's',
    fullwidth: true,
    padding: 'm',
    children: <div style={{ width: '100%', height: 128 }} />,
  },
  {
    id: 'm',
    title: 'M - 12px',
    borderRadius: 'm',
    fullwidth: true,
    padding: 'm',
    children: <div style={{ width: '100%', height: 128 }} />,
  },
  {
    id: 'l',
    title: 'L - 16px',
    borderRadius: 'l',
    fullwidth: true,
    padding: 'm',
    children: <div style={{ width: '100%', height: 128 }} />,
  },
  {
    id: 'xl',
    title: 'XL - 24px',
    borderRadius: 'xl',
    fullwidth: true,
    padding: 'm',
    children: <div style={{ width: '100%', height: 128 }} />,
  },
  {
    id: '2xl',
    title: '2XL - 32px',
    borderRadius: '2xl',
    fullwidth: true,
    padding: 'l',
    children: <div style={{ width: '100%', height: 128 }} />,
  },
];

export const BORDERS: (PaperProps & DocsPaperProps)[] = [
  {
    id: 'border-1',
    title: 'Radius 16, border 4',
    borderRadius: 'l',
    fullwidth: true,
    withBorder: true,
    borderWidth: 's',
    smoothedCorners: true,
    padding: 'm',
    children: <div style={{ width: '100%', height: 128 }} />,
  },

  {
    id: 'border-2',
    title: 'Radius 8, border 2',
    borderRadius: 's',
    fullwidth: true,
    withBorder: true,
    borderWidth: 'xs',
    smoothedCorners: true,
    padding: 'm',
    children: <div style={{ width: '100%', height: 128 }} />,
  },

  {
    id: 'border-3',
    title: 'Radius 32, border 8',
    borderRadius: '2xl',
    fullwidth: true,
    withBorder: true,
    borderWidth: 'm',
    smoothedCorners: true,
    padding: 'm',
    children: <div style={{ width: '100%', height: 128 }} />,
  },
];
