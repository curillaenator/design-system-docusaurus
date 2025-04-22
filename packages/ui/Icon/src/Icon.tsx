import React, { forwardRef, Suspense } from 'react';
import cn from 'classnames';

import { IconComponent } from './interfaces';
import { DEFAULT_TEST_ID } from './constants';
import styles from './icon.module.scss';

/**
 * Glyph -  {@link https://uikit.pcbltools.ru/v4.1/?path=/docs/%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-common-icons--icons| ссылка на документацию.}
 *
 */
export const Icon: IconComponent = forwardRef((props, ref) => {
  const { component: Component, dataTestId = DEFAULT_TEST_ID, className = '', ...rest } = props;

  return (
    <Suspense
      fallback={<svg className={cn(styles._transparent, styles.icon, className)} data-testid={dataTestId} {...rest} />}
    >
      {Component && <Component data-testid={dataTestId} {...rest} className={cn(styles.icon, className)} ref={ref} />}
    </Suspense>
  );
});
