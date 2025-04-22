import React, { forwardRef } from 'react';
import cn from 'classnames';

import { VERSION } from './version';
import { DEFAULT_TEST_ID } from './constants';
import { BaseBadgeProps } from './interfaces';
import styles from './styles/badge.module.scss';

const BaseBadge = forwardRef<HTMLDivElement, BaseBadgeProps>((props, ref) => {
  const { dataTestId = DEFAULT_TEST_ID, iconLeft, iconRight, children, id, className = '', ...rest } = props;

  return (
    <span
      ref={ref}
      id={id}
      className={cn(styles.badge, className)}
      data-testid={dataTestId}
      data-analytics={DEFAULT_TEST_ID}
      data-version={VERSION}
      {...rest}
    >
      {iconLeft}

      {children}

      {iconRight}
    </span>
  );
});

BaseBadge.displayName = 'BaseBadge';

export { BaseBadge };
