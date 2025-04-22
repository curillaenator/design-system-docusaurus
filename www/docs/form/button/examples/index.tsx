import React from 'react';
import { ButtonProps } from '@kit-xyz/button';
import Icon from '@kit-xyz/icon/src/assets/duotone/GridIcon';
import PlaneIcon from '@kit-xyz/icon/src/assets/duotone/PlaneIcon';
import HomeIcon from '@kit-xyz/icon/src/assets/duotone/HomeIcon';
import { makeColorValues } from '@site/shared/docsUtils';
import JSON from '@kit-xyz/theme/src/dist/XYZ.json';
import { FigmaSlide } from '@site/src/components/FigmaSlide/FigmaSlide';
import { CardColorValue } from '@site/src/components/ExamplesGrid';

import colorSchema from '../assets/figma/schema.png';
import state from '../assets/figma/state.png';
import shape from '../assets/figma/shape.png';
import textLabel from '../assets/figma/text-label.png';
import textLabelValue from '../assets/figma/text-label-value.png';
import textLabelPosition from '../assets/figma/text-label-position.png';
import textAdditional from '../assets/figma/text-additional.png';
import textAdditionalValue from '../assets/figma/text-additional-value.png';
import textAdditionalPosition from '../assets/figma/text-additional-position.png';
import mediaStaus from '../assets/figma/media-status.png';
import backBorder from '../assets/figma/back-border.png';
import backColor from '../assets/figma/back-color.png';
import backShadow from '../assets/figma/back-shadow.png';
import focused from '../assets/figma/focused.png';
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

export const TYPES: (ButtonProps & { code: string })[] = [
  {
    title: 'Shadow',
    appearance: 'primary-solid',
    children: 'Button',
    withShadow: true,
    IconLeft: Icon,
    code: '<Button appearance="primary-solid" withShadow IconRight={Icon}>Button</Button>',
  },
  {
    title: 'Solid',
    appearance: 'primary-solid',
    children: 'Button',
    IconLeft: Icon,
    code: '<Button appearance="primary-solid" IconRight={Icon}>Button</Button>',
  },
  {
    title: 'Border',
    appearance: 'primary-transparent',
    children: 'Button',
    withBorder: true,
    IconLeft: Icon,
    code: '<Button appearance="primary-transparent" withBorder IconRight={Icon}>Button</Button>',
  },
  {
    title: 'Transparent',
    appearance: 'primary-transparent',
    children: 'Button',
    withBorder: false,
    IconLeft: Icon,
    code: '<Button appearance="primary-transparent" IconRight={Icon}>Button</Button>',
  },
];

// STATES

export const STATES_MAP: (ButtonProps & { code: string })[] = [
  {
    title: 'Default',
    children: 'Button',
    IconLeft: Icon,
    code: '<Button IconLeft={Icon}>Button</Button>',
  },
  {
    title: 'Success',
    state: 'success',
    children: 'Button',
    IconLeft: Icon,
    code: '<Button IconLeft={Icon} state="success">Button</Button>',
  },
  {
    title: 'Error',
    state: 'error',
    children: 'Button',
    IconLeft: Icon,
    code: '<Button IconLeft={Icon} state="error">Button</Button>',
  },
  {
    title: 'Loading',
    state: 'loading',
    children: 'Button',
    IconLeft: Icon,
    code: '<Button IconLeft={Icon} state="loading">Button</Button>',
  },
  {
    title: 'Active',
    active: true,
    children: 'Button',
    IconLeft: Icon,
    code: '<Button active IconLeft={Icon}>Button</Button>',
  },
  {
    title: 'Disabled',
    disabled: true,
    children: 'Button',
    IconLeft: Icon,
    code: '<Button disabled IconLeft={Icon}>Button</Button>',
  },
  {
    title: 'Skeleton',
    skeleton: '142px',
    children: 'Button',
    IconLeft: Icon,
    code: '<Button skeleton="142px" IconLeft={Icon}>Button</Button>',
  },
];

export const STATES = STATES_MAP.map((stateCard) => ({
  ...stateCard,
  appearance: 'primary-solid', // primary-solid primary-transparent secondary-solid secondary-transparent tertiary-solid
}));

// SHAPES

export const SHAPES: (ButtonProps & { code: string })[] = [
  {
    title: 'Square',
    shape: 'square',
    children: 'Button',
    IconLeft: Icon,
    code: '<Button shape="square" IconLeft={Icon}>Button</Button>',
  },
  {
    title: 'Rounded',
    shape: 'rounded',
    children: 'Button',
    IconLeft: Icon,
    code: '<Button shape="rounded" IconLeft={Icon}>Button</Button>',
  },
  {
    title: 'Circular',
    shape: 'circular',
    children: 'Button',
    IconLeft: Icon,
    code: '<Button shape="circular" IconLeft={Icon}>Button</Button>',
  },
  {
    title: 'Skeleton-square',
    shape: 'square',
    skeleton: '142px',
    children: 'Button',
    IconLeft: Icon,
    code: '<Button skeleton="142px" shape="square">Button</Button>',
  },
  {
    title: 'Skeleton-rounded',
    shape: 'rounded',
    skeleton: '142px',
    children: 'Button',
    IconLeft: Icon,
    code: '<Button skeleton="142px" shape="rounded">Button</Button>',
  },
  {
    title: 'Skeleton-circular',
    shape: 'circular',
    skeleton: '142px',
    children: 'Button',
    IconLeft: Icon,
    code: '<Button skeleton="142px" shape="circular">Button</Button>',
  },
];

// VARIANTS

export const VARIANTS: (ButtonProps & { code: string })[] = [
  {
    title: 'Icon + text',
    children: 'Button',
    IconLeft: Icon,
    code: '<Button IconLeft={Icon}>Button</Button>',
  },
  {
    title: 'Text + icon',
    children: 'Button',
    IconRight: Icon,
    code: '<Button IconRight={Icon}>Button</Button>',
  },
  {
    title: 'Only text',
    children: 'Button',
    code: '<Button>Button</Button>',
  },
  {
    title: 'Only icon',
    IconRight: Icon,
    code: '<Button IconRight={Icon}>Button</Button>',
  },
  {
    title: 'Text + text',
    secondaryText: '24',
    labelsReversed: true,
    children: 'Button',
    code: '<Button labelsReversed secondaryText="24">Button</Button>',
  },
  {
    title: 'Icon + text + text',
    secondaryText: '24',
    children: 'Button',
    IconLeft: Icon,
    code: '<Button IconLeft={Icon} secondaryText="24">Button</Button>',
  },
  {
    title: 'Icon + text + text',
    secondaryText: '24',
    children: 'Button',
    labelsReversed: true,
    IconLeft: Icon,
    code: '<Button labelsReversed IconLeft={Icon} secondaryText="24">Button</Button>',
  },
  {
    title: 'Text + text + icon',
    secondaryText: '24',
    children: 'Button',
    labelsReversed: true,
    IconRight: Icon,
    code: '<Button labelsReversed IconRight={Icon} secondaryText="24">Button</Button>',
  },
  {
    title: 'Icon status',
    children: 'Button',
    IconLeft: Icon,
    notion: true,
    code: '<Button notion IconLeft={Icon}>Button</Button>',
  },
];

// APPEARANCE

export const APPEARANCES: (ButtonProps & { code: string })[] = [
  {
    title: 'Primary-solid',
    appearance: 'primary-solid',
    children: 'Button',
    IconLeft: Icon,
    code: '<Button appearance="primary-solid" IconLeft={Icon}>Button</Button>',
  },
  {
    title: 'Primary-solid-alt',
    appearance: 'primary-solid-alt',
    children: 'Button',
    IconLeft: Icon,
    code: '<Button appearance="primary-solid-alt" IconLeft={Icon}>Button</Button>',
  },
  {
    title: 'Primary-transparent-withBorder',
    appearance: 'primary-transparent',
    children: 'Button',
    withBorder: true,
    IconLeft: Icon,
    code: '<Button appearance="primary-transparent" withBorder IconLeft={Icon}>Button</Button>',
  },
  {
    title: 'Primary-transparent',
    appearance: 'primary-transparent',
    children: 'Button',
    IconLeft: Icon,
    code: '<Button appearance="primary-transparent" IconLeft={Icon}>Button</Button>',
  },
  {
    title: 'Secondary-solid',
    appearance: 'secondary-solid',
    children: 'Button',
    IconLeft: Icon,
    code: '<Button appearance="secondary-solid" IconLeft={Icon}>Button</Button>',
  },
  {
    title: 'Secondary-solid-alt',
    appearance: 'secondary-solid-alt',
    children: 'Button',
    IconLeft: Icon,
    code: '<Button appearance="secondary-solid-alt" IconLeft={Icon}>Button</Button>',
  },
  {
    title: 'Secondary-transparent-withBorder',
    appearance: 'secondary-transparent',
    children: 'Button',
    withBorder: true,
    IconLeft: Icon,
    code: '<Button appearance="secondary-transparent" withBorder IconLeft={Icon}>Button</Button>',
  },
  {
    title: 'Secondary-transparent',
    appearance: 'secondary-transparent',
    children: 'Button',
    IconLeft: Icon,
    code: '<Button appearance="secondary-transparent" IconLeft={Icon}>Button</Button>',
  },
  {
    title: 'Tertiary-solid',
    appearance: 'tertiary-solid',
    children: 'Button',
    IconLeft: Icon,
    code: '<Button appearance="tertiary-solid" IconLeft={Icon}>Button</Button>',
  },
];

// SIZE

export const SIZES: (ButtonProps & { code: string })[] = [
  {
    title: 'XS',
    size: 'xs',
    children: 'Button',
    IconLeft: Icon,
    code: '<Button size="xs" IconLeft={Icon}>Button</Button>',
  },
  {
    title: 'S',
    size: 's',
    children: 'Button',
    IconLeft: Icon,
    code: '<Button size="s" IconLeft={Icon}>Button</Button>',
  },
];

// AS LINK

export const LINKS: (ButtonProps & { code?: string; to?: string })[] = [
  {
    title: 'External',
    children: 'External',
    IconLeft: PlaneIcon,
    target: '_blank',
    to: 'https://google.com',
  },
  {
    title: 'Internal',
    children: 'Internal',
    IconLeft: HomeIcon,
    to: '/docs/form/button',
  },
];

// TABLE

export const TABLE = [
  ['Size', 'X, px', 'Y, px', 'A, px', 'Z, px', 'B, px', 'C, px', 'Icon size', 'Text size'],
  ['S', 32, 32, 16, 16, 8, 16, 'xl - 32px', 'Font/s-100 - 16/24'],
  ['XS', 32, 32, 8, 8, 8, 16, 'xl - 32px', 'Font/s-100 - 16/24'],
];

// FIGMA_SETTINGS

export const FIGMA_SETTINGS = [
  <FigmaSlide src={colorSchema} title='Schema' />,
  <FigmaSlide src={state} title='State' />,
  <FigmaSlide src={shape} title='Base' />,
  <FigmaSlide src={textLabelPosition} title='Text-label-position' />,
  <FigmaSlide src={textAdditionalPosition} title='Text-additional-position' />,
  <FigmaSlide src={textLabel} title='Text-label' />,
  <FigmaSlide src={textAdditional} title='Text-additional' />,
  <FigmaSlide src={mediaStaus} title='Media-status' />,
  <FigmaSlide src={backBorder} title='Back-border' />,
  <FigmaSlide src={backColor} title='Back-color' />,
  <FigmaSlide src={backShadow} title='Back-shadow' />,
  <FigmaSlide src={focused} title='Focused' />,
  <FigmaSlide src={textLabelValue} title='Text-label value' />,
  <FigmaSlide src={textAdditionalValue} title='Text-additional value' />,
  <FigmaSlide src={mediaIcon} title='Media-icon' />,
];
