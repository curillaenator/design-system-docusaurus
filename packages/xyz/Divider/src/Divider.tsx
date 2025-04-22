import React, { forwardRef } from 'react';
import { Divider as BaseDivider } from '@kit-base/divider';

import { useDivider, useDividerIcons } from './hooks';
import { DEFAULT_TEST_ID } from './constants';
import { DividerProps } from './interfaces';

/**
 * Divider -  {@link https://uikit.pcbltools.ru/v4.1/?path=/docs/%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-common-divider--main| ссылка на документацию.}
 *
 */
export const Divider = forwardRef<HTMLDivElement, DividerProps>((props, ref) => {
  const dividerProps = useDivider(props);
  const propsWithIcons = useDividerIcons(dividerProps);

  return <BaseDivider dataTestId={props.dataTestId || DEFAULT_TEST_ID} ref={ref} component='div' {...propsWithIcons} />;
});
