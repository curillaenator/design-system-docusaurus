import React from 'react';
import { makeColorValues } from '@site/shared/docsUtils';
import GearIcon from '@kit-xyz/icon/src/assets/duotone/GearIcon';
import JSON from '@kit-xyz/theme/src/dist/XYZ.json';
import type { CheckboxProps } from '@kit-xyz/checkbox';
import { CardColorValue } from '@site/src/components/ExamplesGrid';

import indeterminate from '!!raw-loader!../components/Indeterminate.tsx'; // eslint-disable-line import/extensions, import/no-webpack-loader-syntax
import collapsible from '!!raw-loader!../components/Collapsible.tsx'; // eslint-disable-line import/extensions, import/no-webpack-loader-syntax
import stated from '!!raw-loader!../components/Stated.tsx'; // eslint-disable-line import/extensions, import/no-webpack-loader-syntax
import todolist from '!!raw-loader!../components/TodoList.tsx'; // eslint-disable-line import/extensions, import/no-webpack-loader-syntax
import todolistStyles from '!!raw-loader!../components/todolist.module.scss'; // eslint-disable-line import/extensions, import/no-webpack-loader-syntax

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

export const STATES: (CheckboxProps & { code?: string; forceChecked?: boolean })[] = [
  {
    id: 'checkbox-docs-state-default',
    title: 'Default',
    appearance: 'solid',
    label: 'Checkbox',
    labelSecondary: '42',
    IconRight: GearIcon,
    checked: false,
    onChange: () => {},
  },
  {
    id: 'checkbox-docs-state-success',
    title: 'Success',
    appearance: 'solid',
    state: 'success',
    label: 'Checkbox',
    labelSecondary: '42',
    IconRight: GearIcon,
    checked: false,
    onChange: () => {},
  },
  {
    id: 'checkbox-docs-state-error',
    title: 'Error',
    appearance: 'solid',
    state: 'error',
    label: 'Checkbox',
    labelSecondary: '42',
    IconRight: GearIcon,
    checked: false,
    onChange: () => {},
  },
  {
    id: 'checkbox-docs-state-disabled',
    title: 'Disabled',
    appearance: 'solid',
    disabled: true,
    label: 'Checkbox',
    labelSecondary: '42',
    IconRight: GearIcon,
    checked: false,
    onChange: () => {},
    forceChecked: true,
  },
  {
    id: 'checkbox-docs-state-disabled-checked',
    title: 'Disabled checked',
    appearance: 'solid',
    disabled: true,
    label: 'Checkbox',
    labelSecondary: '42',
    IconRight: GearIcon,
    checked: true,
    onChange: () => {},
    forceChecked: true,
  },
  {
    id: 'checkbox-docs-skeleton',
    title: 'Skeleton',
    skeleton: '192px',
    checked: true,
    onChange: () => {},
  },
];

export { indeterminate as CODE_INDETERMINATE };
export { collapsible as CODE_COLLAPSIBLE };
export { stated as CODE_STATED };
export { todolist as CODE_TODOLIST };
export { todolistStyles as CODE_TODOLIST_STYLES };
