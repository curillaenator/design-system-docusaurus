import React from 'react';
import { BadgeProps } from '@kit-xyz/badge';
import Icon from '@kit-xyz/icon/src/assets/duotone/GraphIcon';
import JSON from '@kit-xyz/theme/src/dist/XYZ.json';
import { makeColorValues } from '@site/shared/docsUtils';
import { FigmaSlide } from '@site/src/components/FigmaSlide/FigmaSlide';
import { CardColorValue } from '@site/src/components/ExamplesGrid';

import colorSchema from '../assets/figma/schema.png';
import state from '../assets/figma/state.png';
import shape from '../assets/figma/base.png';
import textLabelValue from '../assets/figma/text-value.png';
import textLabelPosition from '../assets/figma/text-position.png';
import textAdditional from '../assets/figma/text-additional.png';
import textAdditionalValue from '../assets/figma/text-additional-value.png';
import textAdditionalPosition from '../assets/figma/text-additional-position.png';
import backBorder from '../assets/figma/back-border.png';
import backColor from '../assets/figma/back-color.png';
import backShadow from '../assets/figma/back-shadow.png';
import mediaIcon from '../assets/figma/media-icon.png';

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

// TYPE

export const TYPES: (BadgeProps & { code: string })[] = [
  {
    title: 'Solid',
    size: 'xs',
    appearance: 'primary-solid',
    children: 'Badge',
    IconRight: Icon,
    code: '<Badge appearance="primary-solid" IconRight={Icon}>Badge</Badge>',
  },
  {
    title: 'Border',
    size: 'xs',
    appearance: 'primary-transparent',
    children: 'Badge',
    withBorder: true,
    IconRight: Icon,
    code: '<Badge appearance="primary-transparent" withBorder IconRight={Icon}>Badge</Badge>',
  },
  {
    title: 'Transparent',
    size: 'xs',
    appearance: 'primary-transparent',
    children: 'Badge',
    IconRight: Icon,
    code: '<Badge appearance="primary-transparent" IconRight={Icon}>Badge</Badge>',
  },
];

// STATE

export const STATES: (BadgeProps & { code: string })[] = [
  {
    title: 'Default',
    appearance: 'primary-solid',
    children: 'Badge',
    IconRight: Icon,
    code: '<Badge IconRight={Icon}>Badge</Badge>',
  },
  {
    title: 'Disabled',
    appearance: 'primary-solid',
    children: 'Badge',
    IconRight: Icon,
    state: 'disabled',
    code: '<Badge state="disabled" IconRight={Icon}>Badge</Badge>',
  },
  {
    title: 'Skeleton',
    appearance: 'primary-solid',
    children: 'Badge',
    IconRight: Icon,
    skeleton: '104px',
    code: '<Badge skeleton="104px" IconRight={Icon}>Badge</Badge>',
  },
];

// STATE

export const FORMS: (BadgeProps & { code: string })[] = [
  {
    title: 'Square',
    appearance: 'primary-transparent',
    shape: 'square',
    children: 'Badge',
    IconRight: Icon,
    withBorder: true,
    code: '<Badge shape="square" appearance="primary-transparent" withBorder IconRight={Icon}>Badge</Badge>',
  },
  {
    title: 'Rounded',
    appearance: 'primary-transparent',
    shape: 'rounded',
    children: 'Badge',
    IconRight: Icon,
    withBorder: true,
    code: '<Badge shape="rounded" appearance="primary-transparent" withBorder IconRight={Icon}>Badge</Badge>',
  },
  {
    title: 'Circular',
    appearance: 'primary-transparent',
    shape: 'circular',
    children: 'Badge',
    IconRight: Icon,
    withBorder: true,
    code: '<Badge shape="circular" appearance="primary-transparent" withBorder IconRight={Icon}>Badge</Badge>',
  },
];

export const VARIANTS: (BadgeProps & { code: string })[] = [
  {
    title: 'Text',
    appearance: 'primary-solid',
    children: 'Badge',
    code: '<Badge>Badge</Badge>',
  },
  {
    title: 'Icon + text',
    appearance: 'primary-solid',
    children: 'Badge',
    IconLeft: Icon,
    code: '<Badge IconLeft={Icon}>Badge</Badge>',
  },
  {
    title: 'Text + icon',
    appearance: 'primary-solid',
    children: 'Badge',
    IconRight: Icon,
    code: '<Badge IconRight={Icon}>Badge</Badge>',
  },
  {
    title: 'Text + text',
    appearance: 'primary-solid',
    children: 'Badge',
    additionalLabel: '24',
    labelsReversed: true,
    code: '<Badge additionalLabel="24" labelsReversed >Badge</Badge>',
  },
  {
    title: 'Icon + text + text',
    appearance: 'primary-solid',
    children: 'Badge',
    additionalLabel: '24',
    labelsReversed: true,
    IconLeft: Icon,
    code: '<Badge additionalLabel="24" labelsReversed IconLeft={Icon}>Badge</Badge>',
  },
  {
    title: 'Text + text + icon',
    appearance: 'primary-solid',
    children: 'Badge',
    additionalLabel: '24',
    labelsReversed: true,
    IconRight: Icon,
    code: '<Badge additionalLabel="24" labelsReversed IconRight={Icon}>Badge</Badge>',
  },
  {
    title: 'Text + text',
    appearance: 'primary-solid',
    children: 'Badge',
    additionalLabel: '24',
    code: '<Badge additionalLabel="24">Badge</Badge>',
  },
  {
    title: 'Icon + text + text',
    appearance: 'primary-solid',
    children: 'Badge',
    additionalLabel: '24',
    IconLeft: Icon,
    code: '<Badge additionalLabel="24" IconLeft={Icon}>Badge</Badge>',
  },
  {
    title: 'Text + text + icon',
    appearance: 'primary-solid',
    children: 'Badge',
    additionalLabel: '24',
    IconRight: Icon,
    code: '<Badge additionalLabel="24" IconRight={Icon}>Badge</Badge>',
  },
];

export const APPEARANCES: (BadgeProps & { code?: string })[] = [
  {
    title: 'Primary-solid',
    appearance: 'primary-solid',
    children: 'Badge',
    IconRight: Icon,
    code: '<Badge appearance="primary-solid" IconRight={Icon}>Badge</Badge>',
  },
  {
    title: 'Primary-solid-alt',
    appearance: 'primary-solid-alt',
    children: 'Badge',
    IconRight: Icon,
    code: '<Badge appearance="primary-solid-alt" IconRight={Icon}>Badge</Badge>',
  },
  {
    title: 'Primary-transparent-withBorder',
    appearance: 'primary-transparent',
    withBorder: true,
    children: 'Badge',
    IconRight: Icon,
    code: '<Badge appearance="primary-transparent" withBorder IconRight={Icon}>Badge</Badge>',
  },
  {
    title: 'Primary-transparent',
    appearance: 'primary-transparent',
    children: 'Badge',
    IconRight: Icon,
    code: '<Badge appearance="primary-transparent" IconRight={Icon}>Badge</Badge>',
  },
  {
    title: 'Secondary-solid',
    appearance: 'secondary-solid',
    children: 'Badge',
    IconRight: Icon,
    code: '<Badge appearance="secondary-solid" IconRight={Icon}>Badge</Badge>',
  },
  {
    title: 'Secondary-solid-alt',
    appearance: 'secondary-solid-alt',
    children: 'Badge',
    IconRight: Icon,
    code: '<Badge appearance="secondary-solid-alt" IconRight={Icon}>Badge</Badge>',
  },
  {
    title: 'Secondary-transparent-withBorder',
    appearance: 'secondary-transparent',
    children: 'Badge',
    withBorder: true,
    IconRight: Icon,
    code: '<Badge appearance="secondary-transparent" withBorder IconRight={Icon}>Badge</Badge>',
  },
  {
    title: 'Secondary-transparent',
    appearance: 'secondary-transparent',
    children: 'Badge',
    IconRight: Icon,
    code: '<Badge appearance="secondary-transparent" IconRight={Icon}>Badge</Badge>',
  },
  {
    title: 'Tertiary-solid',
    appearance: 'tertiary-solid',
    children: 'Badge',
    IconRight: Icon,
    code: '<Badge appearance="tertiary-solid" IconRight={Icon}>Badge</Badge>',
  },
  {
    title: 'Tertiary-transparent',
    appearance: 'tertiary-transparent',
    children: 'Badge',
    withBorder: true,
    IconRight: Icon,
    code: '<Badge appearance="tertiary-transparent" withBorder IconRight={Icon}>Badge</Badge>',
  },
  {
    title: 'Primary',
    appearance: 'primary',
    children: 'Badge',
    IconRight: Icon,
  },
  {
    title: 'Secondary',
    appearance: 'secondary',
    children: 'Badge',
    IconRight: Icon,
  },
  {
    title: 'Tertiary',
    appearance: 'tertiary',
    children: 'Badge',
    IconRight: Icon,
  },
  {
    title: 'Quaternary',
    appearance: 'quaternary',
    children: 'Badge',
    IconRight: Icon,
  },
  {
    title: 'Informative',
    appearance: 'informative',
    children: 'Badge',
    IconRight: Icon,
  },
  {
    title: 'Attention',
    appearance: 'attention',
    children: 'Badge',
    IconRight: Icon,
  },
  {
    title: 'Positive',
    appearance: 'positive',
    children: 'Badge',
    IconRight: Icon,
  },
  {
    title: 'Negative',
    appearance: 'negative',
    children: 'Badge',
    IconRight: Icon,
  },
];

// TABLE

export const TABLE = [
  ['Size', 'X, px', 'Y, px', 'A, px', 'Z, px', 'B, px', 'C, px', 'Icon size', 'Text size'],
  ['XS', 24, 24, 4, 8, 12, 16, 'm - 24px', 'Font/s-100 - 16/24'],
];

// FIGMA_SETTINGS

export const FIGMA_SETTINGS = [
  <FigmaSlide src={colorSchema} title='Schema' />,
  <FigmaSlide src={state} title='State' />,
  <FigmaSlide src={shape} title='Base' />,
  <FigmaSlide src={textLabelPosition} title='Text-label-position' />,
  <FigmaSlide src={textAdditionalPosition} title='Text-additional-position' />,
  <FigmaSlide src={textAdditional} title='Text-additional' />,
  <FigmaSlide src={backBorder} title='Back-border' />,
  <FigmaSlide src={backColor} title='Back-color' />,
  <FigmaSlide src={backShadow} title='Back-shadow' />,
  <FigmaSlide src={textLabelValue} title='Text-label value' />,
  <FigmaSlide src={textAdditionalValue} title='Text-additional value' />,
  <FigmaSlide src={mediaIcon} title='Media-icon' />,
];
