import React from 'react';
import type { ComboboxProps } from '@kit-xyz/combobox';
import JSON from '@kit-xyz/theme/src/dist/XYZ.json';
import { makeColorValues } from '@site/shared/docsUtils';
import { CardColorValue } from '@site/src/components/ExamplesGrid';
import CheckIcon from '@kit-xyz/icon/src/assets/solid/CheckIcon';
import UsersIcon from '@kit-xyz/icon/src/assets/duotone/UsersIcon';
// import MagnifyingGlassIcon from '@kit-xyz/icon/src/assets/solid/MagnifyingGlassThinIcon';
import SelectThin from '@kit-xyz/icon/src/assets/solid/SelectThin';
// import UserIcon2 from '@kit-xyz/icon/src/assets/duotone/UserIcon2';
import BinIcon2 from '@kit-xyz/icon/src/assets/solid/BinIcon2';

import { OPTIONS, OPTION_GROUPS } from './constants';

// eslint-disable-next-line
import comboboxWrappedCode from '!!raw-loader!./components/ComboBoxWrapped.tsx';

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

const COMMON_OPTS: ComboboxProps = {
  options: OPTIONS,
  // defaultValue: DEFAULT_OPTIONS,
  hideSelectedOptions: false,
  isSearchable: true,
  closeMenuOnSelect: false,
  isClearable: true,
};

export const FORMS: (ComboboxProps & { code?: string; title?: string })[] = [
  {
    ...COMMON_OPTS,
    isMulti: true,
    bordered: true,
    shape: 'rounded',
    placeholder: 'Выбрать...',
    appearance: 'solid',
    IconSearch: UsersIcon,
    IconCarret: SelectThin,
    IconChecked: CheckIcon,
    // IconChipRemove: BinIcon2,
    title: 'Rounded combobox',
    code: comboboxWrappedCode,
  },
  {
    ...COMMON_OPTS,
    isMulti: true,
    options: OPTION_GROUPS,
    bordered: true,
    isClearable: false,
    isSearchable: false,
    shape: 'circular',
    placeholder: 'Выбрать...',
    appearance: 'solid',
    // IconSearch: MagnifyingGlassIcon,
    IconCarret: SelectThin,
    IconChecked: CheckIcon,
    IconChipRemove: BinIcon2,
    title: 'Circular combobox',
    maxMenuHeight: 512,
    code: comboboxWrappedCode,
  },
  {
    ...COMMON_OPTS,
    bordered: true,
    isClearable: false,
    isSearchable: false,
    closeMenuOnSelect: true,
    shape: 'square',
    placeholder: 'Выбрать...',
    appearance: 'solid',
    // IconSearch: UserIcon2,
    IconCarret: SelectThin,
    IconChecked: CheckIcon,
    IconChipRemove: BinIcon2,
    title: 'Square combobox',
    code: comboboxWrappedCode,
  },
];
