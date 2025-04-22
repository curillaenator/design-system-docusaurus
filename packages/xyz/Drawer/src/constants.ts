import type { DrawerClosedWidthType } from './interfaces';

export const DEFAULT_TEST_ID = 'XYZKit.Drawer';

export const SIZE_TO_NAME_ASSOC: Record<DrawerClosedWidthType, string> = {
  '128': '2xl',
  '96': 'xl',
  '80': 'l',
  '64': 'm',
  '48': 's',
  '32': 'xs',
  '0': 'none',
};
