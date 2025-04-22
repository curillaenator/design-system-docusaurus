import cn from 'classnames';

import { DividerProps } from '../interfaces';
import styles from '../styles/divider.module.scss';

const colorResolver = (props: DividerProps) => {
  const { appearance = 'dark', disabled } = props;

  if (disabled) {
    return 'state-disabled';
  }

  return `color-${appearance}`;
};

export const useDividerClassName = (props: DividerProps) => {
  const { size = '2xl', className, shape = 'rounded' } = props;

  const colorSchema = colorResolver(props);

  return cn(
    styles.dividerVariables,
    styles[`_${shape}`],
    styles[`_size_${size}`],
    styles[`_${colorSchema}`],
    className,
  );
};
