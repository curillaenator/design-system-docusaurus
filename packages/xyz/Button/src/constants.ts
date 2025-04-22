import type { IconSize } from '@kit-xyz/icon';

import { ButtonShape, ButtonSize } from './components/Button/interfaces';

export const DEFAULT_BUTTON_TEST_ID = 'XYZ.Button';
export const DEFAULT_LINK_BUTTON_TEST_ID = 'XYZ.LinkButton';

export const SKELETON_SHAPE_ASSOC: Record<ButtonSize, Record<ButtonShape, string>> = {
  s: {
    square: '0px',
    rounded: '16px',
    circular: '32px',
  },
  xs: {
    square: '0px',
    rounded: '8px',
    circular: '24px',
  },
};

export const SKELETON_SIZE_ASSOC: Record<ButtonSize, string> = {
  s: '64px',
  xs: '48px',
};

export const ICONS_SIZE_ASSOC: Record<ButtonSize, IconSize> = {
  s: 'xl',
  xs: 'xl',
};

export const ICONS_SIZE_ASSOC_UPDATED: Record<ButtonSize, IconSize> = {
  s: 'l',
  xs: 'm',
};
