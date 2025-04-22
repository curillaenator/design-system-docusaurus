import React from 'react';
import JSON_SOURCE from '@kit-xyz/theme/src/dist/XYZ.json';

import { Border } from './components/Border';

const WIDTHS = JSON_SOURCE.values.style['border-width'] as Record<string, { value: string }>;
const RADIUSES = JSON_SOURCE.values.style['border-radius'] as Record<string, { value: string }>;
const STYLES = JSON_SOURCE.values.style['border-style'] as Record<string, { value: string }>;

export const WIDTHS_CODEBLOCK = JSON.stringify(WIDTHS, null, 1);
export const RADIUSES_CODEBLOCK = JSON.stringify(RADIUSES, null, 1);
export const STYLES_CODEBLOCK = JSON.stringify(STYLES, null, 1);

export const BORDER_WIDTHS = Object.entries(WIDTHS).map(([key, { value }]) => ({
  id: `border-width-${value}`,
  title: key === 'none' ? 'None' : key.toUpperCase(),
  subtitles: [`Stroke: ${value}`, 'Type: inside'],
  children: <Border width={value} />,
}));

export const BORDER_RADIUSES = Object.entries(RADIUSES).map(([key, { value }]) => ({
  id: `border-radius-${value}`,
  title: key === 'none' ? 'None' : key.toUpperCase(),
  subtitles: [`Radius: ${value}`, 'Type: inside'],
  children: <Border radius={value} />,
}));

export const BORDER_STYLES = Object.entries(STYLES).map(([key, { value }]) => ({
  id: `border-style-${value}`,
  title: key.slice(0, 1).toUpperCase() + key.slice(1),
  subtitles: [`Stroke: ${value}`, 'Type: inside'],
  children: <Border style={value} />,
}));
