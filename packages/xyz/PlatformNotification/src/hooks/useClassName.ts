import cn from 'classnames';

import styles from '../styles/notification.module.scss';
import { NotificationAppearance, NotificationSize } from '../interfaces';

export const useClassName = (appearance: NotificationAppearance, size: NotificationSize): string => {
  const classes = cn(styles.notificationVariables, styles[appearance], styles[size]);

  return classes;
};
