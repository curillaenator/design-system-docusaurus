import cn from 'classnames';

import { BadgeProps } from '../interfaces';
import styles from '../styles/badge.module.scss';

const resolveColorSchema = (props: BadgeProps) => {
  const { appearance = 'primary-solid', colorMode = 'light' } = props;
  return `color-${appearance}_${colorMode}` as const;
};

export const useBadgeProps = (props: BadgeProps) => {
  const {
    size = 's',
    shape = 'rounded',
    colorMode = 'light',
    withBorder = false,
    withShadow = false,
    state = 'default',
    className,
    ...rest
  } = props;

  const colorSchema = resolveColorSchema(props);

  return {
    colorMode,
    size,
    shape,
    className: cn(
      styles.badgeXYZ,
      styles[`_size_${size}`],
      styles[`_shape_${shape}`],
      styles[`_state_${state}`],
      styles[`_${colorSchema}`],
      className,
      {
        [styles._withBorder]: withBorder,
        [styles._withShadow]: withShadow,
      },
    ),
    ...rest,
  };
};
