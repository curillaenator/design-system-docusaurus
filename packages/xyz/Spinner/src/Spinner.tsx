import React, { FC } from 'react';

import { useSpinnerClassName } from './hooks/useSpinnerClassName';
import { VERSION } from './version';
import { DEFAULT_TEST_ID } from './constants';
import { SpinnerProps } from './interfaces';
import styles from './spinner.module.scss';

export const Spinner: FC<SpinnerProps> = (props) => {
  const { dataTestId = DEFAULT_TEST_ID } = props;
  return (
    <svg
      className={useSpinnerClassName(props)}
      data-testid={dataTestId}
      data-analytics={DEFAULT_TEST_ID}
      data-version={VERSION}
      fill='none'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle className={styles.animateSpinnerRotate} cx='12' cy='12' r='8' />
    </svg>
  );
};
