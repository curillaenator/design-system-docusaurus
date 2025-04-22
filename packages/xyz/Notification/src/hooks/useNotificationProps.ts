import cn from 'classnames';

import { NotificationProps } from '../interfaces';
import styles from '../styles.module.scss';

export const useNotificationProps = (props: NotificationProps) => {
  const { className, appearance = 'quaternary', colorMode = 'light', ...rest } = props;

  return {
    ...rest,
    appearance,
    colorMode,
    className: cn(styles.notification, styles[`_color-${appearance}_${colorMode}`], styles['_size_s'], className),
  };
};
