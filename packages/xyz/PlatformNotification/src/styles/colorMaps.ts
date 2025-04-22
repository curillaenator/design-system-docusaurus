import { ButtonAppearance } from '@kit-xyz/button';

import { NotificationAppearance, NotificationButtonProps } from '../interfaces';

export const closeButtonColorMap: Record<NotificationAppearance, ButtonAppearance> = {
  primary: 'light',
  dark: 'light',
  light: 'dark',
};

export const actionColorMap: Record<
  NotificationButtonProps['appearance'],
  Record<NotificationAppearance, ButtonAppearance>
> = {
  primary: {
    primary: 'dark',
    dark: 'primary',
    light: 'primary',
  },
  secondary: {
    primary: 'light',
    dark: 'light',
    light: 'dark',
  },
};
