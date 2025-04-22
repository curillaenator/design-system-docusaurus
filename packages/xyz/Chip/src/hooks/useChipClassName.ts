import cn from 'classnames';

import { ChipProps } from '../interfaces';
import styles from '../styles/chip.module.scss';

const resolveSchema = (props: ChipProps) => {
  const { variant = 'solid', appearance = 'primary', disabled = false } = props;

  if (disabled) {
    return `state-disabled-${variant}`;
  }

  return `color-${appearance}-${variant}`;
};

export const useChipClassName = (props: ChipProps) => {
  const { size = '2xl', shape = 'rounded' } = props;

  const colorSchema = resolveSchema(props);

  return cn(
    styles.chipVariables,
    shape === 'circular' && styles._circular,
    styles[`_size_${size}`],
    styles[`_${colorSchema}`],
  );
};
