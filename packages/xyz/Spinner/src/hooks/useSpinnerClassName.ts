import cn from 'classnames';

import { SpinnerProps } from '../interfaces';
import styles from '../spinner.module.scss';

export const useSpinnerClassName = (props: SpinnerProps) => {
  const { size = 'm', appearance = 'primary', colorMode = 'light', className } = props;
  return cn(styles.spinnerVariables, styles[`_size_${size}`], styles[`_color-${appearance}_${colorMode}`], className);
};
