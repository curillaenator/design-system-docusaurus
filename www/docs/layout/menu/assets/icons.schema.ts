import { IconSize } from '@kit-xyz/icon';

export interface CustomIconProps {
  size?: IconSize;
}

export const SIZES: Record<IconSize, number> = {
  xs: 16,
  s: 20,
  m: 24,
  l: 28,
  xl: 32,
};
