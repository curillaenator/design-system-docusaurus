import React, { forwardRef } from 'react';
import cn from 'classnames';

import styles from './avatar.module.scss';
import { VERSION } from './version';
import { DEFAULT_TEST_ID } from './constants';
import type { BaseAvatarProps } from './interfaces';

export const BaseAvatar = forwardRef<HTMLDivElement, BaseAvatarProps>((props, ref) => {
  const { dataTestId = DEFAULT_TEST_ID, as, fullwidth = false, disabled = false, children, className, ...rest } = props;

  const Component = as ?? ('div' as React.ElementType);

  return (
    // @ts-ignore для феба
    <Component
      {...rest}
      ref={ref}
      data-testid={dataTestId}
      data-analytics={DEFAULT_TEST_ID}
      data-version={VERSION}
      className={cn(styles.avatar, className, {
        [styles.avatar_fullwidth]: fullwidth,
        [styles.avatar_interactive]: as === 'button',
        [styles.avatar_disabled]: disabled,
      })}
    >
      {children}
    </Component>
  );
});
