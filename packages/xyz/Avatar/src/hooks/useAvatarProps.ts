import cn from 'classnames';
import type { BaseAvatarProps } from '@kit-base/avatar';

import type { AvatarProps } from '../interfaces';
import styles from '../avatar.module.scss';

export const useAvatarProps = (props: AvatarProps): BaseAvatarProps => {
  const { size = 'm', shape = 'rounded', appearance = 'primary', colorMode = 'light', className, ...rest } = props;

  return {
    ...rest,
    className: cn(
      styles.avatarVariables,
      styles[`_color-${appearance}_${colorMode}`],
      styles[`_size_${size}`],
      styles[`_shape_${shape}`],
      className,
    ),
  };
};
