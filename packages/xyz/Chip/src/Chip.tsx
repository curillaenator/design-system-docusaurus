import React, { forwardRef } from 'react';
import { Chip as BaseChip } from '@kit-base/chip';

import { DEFAULT_TEST_ID } from './constants';
import { useChipClassName } from './hooks/useChipClassName';
import { useChipIcons } from './hooks/useChipIcons';
import type { ChipProps } from './interfaces';

/**
 * Chip -  {@link https://uikit.pcbltools.ru/v4.1/?path=/docs/%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-data-display-chip--chip-xyz| ссылка на документацию.}
 *
 */
export const Chip = forwardRef<HTMLSpanElement, ChipProps>((props, ref) => {
  const className = useChipClassName(props);
  const propsWithIcons = useChipIcons(props);
  return (
    <BaseChip
      {...propsWithIcons}
      dataTestId={props.dataTestId || DEFAULT_TEST_ID}
      className={className}
      ref={ref}
      component='span'
    />
  );
});
