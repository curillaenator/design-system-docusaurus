import { FC } from 'react';
import type { PlatformNotificationProps as BasePlatformNotificationProps } from '@kit-base/platformNotification';
import { ButtonProps } from '@kit-xyz/button';

import type { GeneratedNotificationProps } from './tokenInterfaces';
import { NotificationIcon } from './NotificationIcon/NotificationIcon';

export type NotificationButtonProps = {
  appearance: 'primary' | 'secondary';
  context?: NotificationProps;
} & Omit<ButtonProps, 'size' | 'appearance' | 'variant'>;

export type NotificationAppearance = NonNullable<GeneratedNotificationProps['appearance']>;
export type NotificationSize = NonNullable<GeneratedNotificationProps['size']>;

type OmittedBaseProps = Omit<
  BasePlatformNotificationProps<FC<NotificationButtonProps>, typeof NotificationIcon>,
  'context' | 'components'
>;

export interface NotificationProps extends GeneratedNotificationProps, OmittedBaseProps {}
