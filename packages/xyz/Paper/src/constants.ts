import type { PaperProps } from './interfaces';

export const DEFAULT_TEST_ID = 'XYZKit.Paper';

export const RADIUSES_ASSOC: Record<NonNullable<PaperProps['borderRadius']>, number> = {
  '2xl': 32,
  xl: 24,
  l: 16,
  m: 12,
  s: 8,
  xs: 4,
  none: 0,
};

export const BDWS_ASSOC: Record<NonNullable<PaperProps['borderRadius']>, number> = {
  '2xl': 16,
  xl: 12,
  l: 8,
  m: 4,
  s: 2,
  xs: 1,
  none: 0,
};
