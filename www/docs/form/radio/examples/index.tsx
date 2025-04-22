/* eslint-disable import/no-webpack-loader-syntax, import/extensions */

import React from 'react';
import { RadioProps } from '@kit-xyz/radio';
import JSON from '@kit-xyz/theme/src/dist/XYZ.json';
import { makeColorValues } from '@site/shared/docsUtils';
import { CardColorValue } from '@site/src/components/ExamplesGrid';

import RADIO_GROUP_CODE from '!!raw-loader!../components/RadioGroup.tsx';

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

export const STATES: (RadioProps & { code: string })[] = [
  {
    id: 'radio-docs-default-cheked',
    title: 'Cheked',
    appearance: 'solid',
    label: 'Radio default',
    checked: true,
    onChange: () => {},
    code: `
    <Radio 
      id='radio-docs-default-cheked'
      name'...' 
      label='Radio default' 
      checked={true} 
      onChange={(e) => {...}} 
    />
    `,
  },
  {
    id: 'radio-docs-default-uncheked',
    title: 'Uncheked',
    appearance: 'solid',
    label: 'Radio default',
    checked: false,
    onChange: () => {},
    code: `
    <Radio 
      id='radio-docs-default-uncheked'
      name'...' 
      label='Radio default' 
      checked={false} 
      onChange={(e) => {...}} 
    />
    `,
  },
  {
    id: 'radio-docs-default-success',
    title: 'Success',
    appearance: 'solid',
    label: 'Radio success',
    checked: true,
    onChange: () => {},
    state: 'success',
    code: `
    <Radio 
      id='radio-docs-default-success'
      name'...'
      state='success' 
      label='Radio default' 
      checked={true} 
      onChange={(e) => {...}} 
    />
    `,
  },
  {
    id: 'radio-docs-default-error',
    title: 'Error',
    appearance: 'solid',
    label: 'Radio error',
    checked: true,
    onChange: () => {},
    state: 'error',
    code: `
    <Radio 
      id='radio-docs-default-error'
      name'...'
      state='error' 
      label='Radio default' 
      checked={true} 
      onChange={(e) => {...}} 
    />
    `,
  },
  {
    id: 'radio-docs-disabled-checked',
    title: 'Disabled checked',
    appearance: 'solid',
    label: 'Radio disabled',
    checked: true,
    onChange: () => {},
    disabled: true,
    code: `
    <Radio 
      id='radio-docs-disabled-checked'
      name'...' 
      label='Radio disabled' 
      checked={true} 
      onChange={(e) => {...}} 
      disabled
    />
    `,
  },
  {
    id: 'radio-docs-disabled-unchecked',
    title: 'Disabled unchecked',
    appearance: 'solid',
    label: 'Radio disabled',
    checked: false,
    onChange: () => {},
    disabled: true,
    code: `
    <Radio 
      id='radio-docs-disabled-unchecked'
      name'...' 
      label='Radio disabled' 
      checked={false} 
      onChange={(e) => {...}} 
      disabled
    />
    `,
  },
  {
    id: 'radio-docs-skeleton',
    title: 'Skeleton',
    skeleton: '170px',
    checked: false,
    onChange: () => {},
    code: `
    <Radio 
      id='radio-docs-skeleton'
      name'...' 
      skeleton='170px'
      label='Radio skeleton' 
      checked={false} 
      onChange={(e) => {...}} 
    />
    `,
  },
];

export { RADIO_GROUP_CODE };
