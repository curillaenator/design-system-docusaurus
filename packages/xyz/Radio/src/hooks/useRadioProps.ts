import cn from 'classnames';

import styles from '../radio.module.scss';
import { RadioProps } from '../interfaces';

const resolveColorSchema = (props: RadioProps) => {
  const { appearance = 'solid', disabled, state } = props;

  if (!disabled && !!state) {
    return `state-${state}`;
  }
  return `color-${appearance}`;
};

export const useRadioProps = (props: RadioProps) => {
  const { size = 'xs', className, colorMode = 'light', ...rest } = props;

  const colorSchema = resolveColorSchema(props);

  return {
    ...rest,
    size,
    colorMode,
    className: cn(styles.radioVariables, styles[`_size_${size}`], styles[`_${colorSchema}_${colorMode}`], className),
  };
};
