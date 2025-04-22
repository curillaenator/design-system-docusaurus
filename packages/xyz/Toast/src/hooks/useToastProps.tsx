import cn from 'classnames';

import { ToastContentProps } from '../interfaces';
import styles from '../toast.module.scss';

const resolveSchema = (props: ToastContentProps) => {
  const { appearance = 'solid', colorMode = 'light' } = props;

  return `_color-${appearance}-${colorMode}`;
};

export const useToastProps = (props: ToastContentProps) => {
  const { colorMode, className, ...rest } = props;

  const colorSchema = resolveSchema(props);

  return {
    ...rest,
    className: cn(styles.toast, styles[colorSchema], styles._size_xs, className),
  };
};
