import React from 'react';
import { SwitchProps } from '@kit-xyz/switch';
import JSON from '@kit-xyz/theme/src/dist/XYZ.json';
import { makeColorValues } from '@site/shared/docsUtils';
import { CardColorValue } from '@site/src/components/ExamplesGrid';

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

// STATE

export const STATES: (SwitchProps & { code: string })[] = [
  {
    id: 'switch-docs-default-cheked',
    title: 'Cheked',
    appearance: 'solid',
    label: 'Switch on',
    checked: false,
    onChange: () => {},
    code: `
    <Switch 
      id='switch-docs-default-cheked'
      label='Switch on' 
      checked={true} 
      onChange={(e) => {...}} 
    />
    `,
  },
  {
    id: 'switch-docs-default-disabled',
    title: 'Disabled',
    appearance: 'solid',
    label: 'Switch disabled',
    disabled: true,
    checked: false,
    onChange: () => {},
    code: `
    <Switch 
      disabled
      id='switch-docs-default-cheked'
      label='Switch off' 
      checked={false} 
      onChange={(e) => {...}} 
    />
    `,
  },
];
