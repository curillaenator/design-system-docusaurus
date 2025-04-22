import { TypographyInternalAppearance, FontWeight, FontFamily, LineHeight, TypographySize } from '../interfaces';

import styles from './typography.module.scss';

export const colorSchemaClassNames: Record<TypographyInternalAppearance, string> = {
  'color-transparent': styles._colorTransparent,
  'color-dark': styles._colorDark,
  'color-light': styles._colorLight,
  'color-neutral': styles._colorNeutral,
  'color-primary': styles._colorPrimary,
  'color-secondary': styles._colorSecondary,
  'color-informative': styles._colorInformative,
  'color-positive': styles._colorPositive,
  'color-attention': styles._colorAttention,
  'color-negative': styles._colorNegative,
  'state-disabled': styles._stateDisabled,
};

export const sizeClassNames: Record<TypographySize, string> = {
  '2xl': styles['_size_2xl'],
  xl: styles['_size_xl'],
  l: styles['_size_l'],
  m: styles['_size_m'],
  s: styles['_size_s'],
  xs: styles['_size_xs'],
};

export const fontWeightClassNames: Record<FontWeight, string> = {
  regular: styles['_fontWeight-regular'],
  semibold: styles['_fontWeight-semibold'],
};

export const fontFamilyClassNames: Record<FontFamily, string> = {
  mono: styles['_fontFamily-mono'],
  sans: styles['_fontFamily-sans'],
};

export const lineHeightClassNames: Record<LineHeight, string> = {
  high: styles['_lineHeight-high'],
  low: styles['_lineHeight-low'],
};
