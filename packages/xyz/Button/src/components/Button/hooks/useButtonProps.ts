import { Link, NavLink } from 'react-router-dom';
import cn from 'classnames';
import { isRouterLink } from '@kit-base/uikit-utils';

import type { ButtonProps } from '../interfaces';
import styles from '../button.module.scss';

import { useButtonIcons } from './useButtonIcons';

export const resolveColorSchema = (props: ButtonProps) => {
  const { appearance = 'primary-solid', colorMode = 'light' } = props;
  return `color-${appearance}_${colorMode}`;
};

const LINK_ASSOC: Record<string, typeof Link | typeof NavLink> = {
  Link,
  NavLink,
};

const resolveComponent = (props: ButtonProps) => {
  const { to, component, asReactRouter = 'NavLink' } = props;

  if (component === 'button' || !to) return 'button';

  const isRouter = isRouterLink(to);

  if (isRouter) return LINK_ASSOC[asReactRouter];

  return component;
};

export const useButtonProps = (props: ButtonProps) => {
  const {
    colorMode,
    active,
    disabled,
    state = 'default',
    shape = 'rounded',
    size = 'xs',
    withBorder,
    withShadow,
    className,
    component,
    to,
    ...rest
  } = props;

  const icons = useButtonIcons(props);

  const colorSchema = resolveColorSchema(props);

  return {
    ...rest,
    ...icons,
    shape,
    size,
    state,
    colorMode,
    active,
    disabled,
    interactive: state !== 'loading' && !disabled,
    to,
    component: resolveComponent(props),
    className: cn(
      styles.buttonThemed,
      styles[`_${colorSchema}`],
      styles[`_state_${state}`],
      styles[`_size_${size}`],
      styles[`_shape_${shape}`],
      className,
      {
        [styles._withBorder]: withBorder,
        [styles._withShadow]: withShadow && !active && !disabled,
        [styles._loading]: state === 'loading',
      },
    ),
  };
};
