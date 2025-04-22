import React, { forwardRef } from 'react';
import cn from 'classnames';

import { InputProps } from './interfaces';
import styles from './styles.module.scss';

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { id, focused, leftEl, rightEl, wrapperClassName, inputClassName, disabled, ...rest } = props;

  return (
    <div
      className={cn(styles.inputContainer, wrapperClassName, {
        [styles.inputContainer_focused]: focused,
        [styles.inputContainer_hoverabe]: !disabled,
        // [styles.inputContainer_hasLeftIcon]: !!leftEl,
        // [styles.inputContainer_hasRightIcon]: !!rightEl,
      })}
    >
      <input
        id={id}
        ref={ref}
        {...rest}
        disabled={disabled}
        aria-label='Search'
        className={cn(styles.input, inputClassName)}
      />

      {leftEl && <div className={styles.leftIcon}>{leftEl}</div>}
      {rightEl && <div className={styles.rightIcon}>{rightEl}</div>}
    </div>
  );
});

Input.displayName = 'Input';

export { Input };
