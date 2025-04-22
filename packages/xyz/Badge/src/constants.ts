import type { IconSize } from '@kit-xyz/icon';

import type { BadgeShape, BadgeSize } from './interfaces';

export const DEFAULT_TEST_ID = 'XYZKit.Badge';

export const SKELETON_HEIGHT_ASSOC: Record<BadgeSize, string> = {
  s: '32px',
  xs: '24px',
};

export const SKELETON_SHAPE_ASSOC: Record<BadgeSize, Record<BadgeShape, string>> = {
  s: {
    square: '0px',
    rounded: '4px',
    circular: '12px',
  },
  xs: {
    square: '0px',
    rounded: '4px',
    circular: '16px',
  },
};

export const ICONS_SIZE_ASSOC: Record<BadgeSize, IconSize> = {
  s: 'm',
  xs: 'm',
};
