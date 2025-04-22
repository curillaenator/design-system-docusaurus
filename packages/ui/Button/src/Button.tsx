/* eslint-disable react/button-has-type, @typescript-eslint/ban-ts-comment, react/prop-types */
import React, { forwardRef } from 'react';
import cn from 'classnames';

import { VERSION } from './version';
import { DEFAULT_BUTTON_TEST_ID } from './constants';
import styles from './button.module.scss';
import type { ButtonComponent } from './interfaces';

// @ts-ignore tracker repo type mismatch
const Button: ButtonComponent = forwardRef((props, ref) => {
  const {
    component: Component = 'button',
    className,
    active,
    dataTestId,
    interactive,
    reversed = false,
    iconLeft,
    iconRight,
    elementRight,
    children,
    fullWidth = false,
    justify = 'between',
    type = 'button',
    target,
    ...rest
  } = props;

  return (
    // @ts-ignore игнор для феба, проблема с несоответсвием типов, разобраться на какой стороне пофиксить
    <Component
      {...rest}
      ref={ref}
      type={type}
      className={cn(styles.button, styles[`button_${justify}`], className, {
        [styles._activated]: active,
        [styles._interactive]: interactive,
        [styles._reversed]: reversed,
        [styles._width_full]: fullWidth,
      })}
      data-version={VERSION}
      data-testid={dataTestId}
      data-analytics={DEFAULT_BUTTON_TEST_ID}
      aria-disabled={!!props.disabled}
      target={Component !== 'button' ? target : undefined}
    >
      {iconLeft}

      {children}

      {elementRight}

      {iconRight}
    </Component>
  );
});

Button.displayName = 'Button';

export { Button };
