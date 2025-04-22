import cn from 'classnames';

import { CalendarProps } from '../interfaces';
import styles from '../calendar.module.scss';

export const useCalendarClassName = ({ className, colorMode = 'light' }: CalendarProps) =>
  cn(styles.calendarVariables, styles['_size_default'], styles[`_color-primary_${colorMode}`], className);
