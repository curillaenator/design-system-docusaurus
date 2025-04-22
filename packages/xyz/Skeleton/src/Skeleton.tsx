import React, { FC } from 'react';
import cn from 'classnames';

import { VERSION } from './version';
import { DEFAULT_TEST_ID, DEFAULT_STYLE } from './constants';
import { SkeletonProps } from './interfaces';
import styles from './styles/skeleton.module.scss';

/**
 * Skeleton -  {@link https://uikit.pcbltools.ru/edutoria/?path=/docs/| ссылка на документацию.}
 *
 */
export const Skeleton: FC<SkeletonProps> = (props) => {
  const { dataTestId = DEFAULT_TEST_ID, style, colorMode = 'light', className } = props;

  return (
    <div
      data-testid={dataTestId}
      data-version={VERSION}
      data-analytics={DEFAULT_TEST_ID}
      className={cn(styles.skeletonVariables, styles[`_color-default_${colorMode}`], className)}
      style={{ ...DEFAULT_STYLE, ...style }}
    >
      <div data-testid={`${dataTestId}.Slider1`} className={styles.slider1} />
      <div data-testid={`${dataTestId}.Slider2`} className={styles.slider2} />
    </div>
  );
};
