import React, { FC } from 'react';
import cn from 'classnames';

import { DEFAULT_TEST_ID } from './constants';
import { VERSION } from './version';
import type { ListProps } from './interfaces';
import styles from './list.module.scss';

export const List: FC<ListProps> = (props) => {
  const { dataTestId = DEFAULT_TEST_ID, colorMode = 'light', className, children } = props;

  return (
    <div
      data-testid={dataTestId}
      data-analytics={DEFAULT_TEST_ID}
      data-version={VERSION}
      className={cn(styles.list, styles[`list_${colorMode}`], className)}
    >
      {children}
    </div>
  );
};
