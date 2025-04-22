import React, { FC } from 'react';

import { VERSION } from './version';
import { DEFAULT_TEST_ID } from './constants';
import { COMPONENT_NAMEProps } from './interfaces';
import styles from './styles/styles.module.scss';

/**
 * COMPONENT_NAME -  {@link https://uikit.pcbltools.ru/v4.1/?path=/docs/| ссылка на документацию.}
 *
 */
export const COMPONENT_NAME: FC<COMPONENT_NAMEProps> = (props) => {
  const { children, dataTestId = DEFAULT_TEST_ID } = props;

  return (
    <div data-testid={dataTestId} data-analytics={DEFAULT_TEST_ID} data-version={VERSION} className={styles.container}>
      {children}
    </div>
  );
};
