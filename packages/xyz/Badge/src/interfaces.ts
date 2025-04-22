import type { BaseBadgeProps } from '@kit-base/badge';
import type { IconComponent } from '@kit-xyz/icon';

import type { GeneratedBadgeProps } from './tokenInterfaces';

export type BadgeAppearance = NonNullable<GeneratedBadgeProps['appearance']>;
export type BadgeSize = NonNullable<GeneratedBadgeProps['size']>;
export type BadgeShape = NonNullable<GeneratedBadgeProps['shape']>;

export interface BadgeProps extends GeneratedBadgeProps, Omit<BaseBadgeProps, 'iconLeft' | 'iconRight'> {
  additionalLabel?: string;
  skeleton?: string;
  colorMode?: 'light' | 'dark' | 'color';
  withBorder?: boolean;
  withShadow?: boolean;
  labelsReversed?: boolean;
  IconLeft?: IconComponent;
  IconRight?: IconComponent;
}
