import React, { forwardRef } from 'react';
import cn from 'classnames';

import { DEFAULT_TEST_ID } from './constants';
import type { BaseAvatarCaptionProps } from './interfaces';
import styles from './caption.module.scss';

export const BaseAvatarCaption = forwardRef<HTMLDivElement, BaseAvatarCaptionProps>((props, ref) => {
  const { dataTestId = DEFAULT_TEST_ID, username, subline } = props;

  return (
    <div className={cn(styles.content)} ref={ref}>
      <span data-testid={`${dataTestId}.Username`} className={styles.username}>
        {username}
      </span>

      {subline && (
        <span data-testid={`${dataTestId}.Subline`} className={styles.subline}>
          {subline}
        </span>
      )}
    </div>
  );
});
