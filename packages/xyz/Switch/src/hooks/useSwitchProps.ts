import cn from 'classnames';

import styles from '../switch.module.scss';
import { SwitchProps } from '../interfaces';

const resolveColorSchema = (props: SwitchProps) => {
  const { state, appearance = 'solid', disabled } = props;

  if (!disabled && !!state) return `state-${state}`;

  return `color-${appearance}`;
};

export const useSwitchProps = (props: SwitchProps) => {
  const { size = 'xs', colorMode = 'light', className, ...rest } = props;
  const colorSchema = resolveColorSchema(props);

  return {
    ...rest,
    className: cn(styles.switchVariables, styles[`_size_${size}`], styles[`_${colorSchema}_${colorMode}`], className),
  };
};
