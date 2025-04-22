import React, { FC } from 'react';
import { ComboBox as BaseComboBox } from '@kit-base/combobox';

import { useProps } from './hooks/useProps';
import { VERSION } from './version';
import { DEFAULT_TEST_ID } from './constants';
import type { ComboboxProps } from './interfaces';

export const ComboBox: FC<ComboboxProps> = (props) => {
  const {
    className,
    placeholder = 'Placeholder',
    noOptionsMessage = () => 'Опции не найдены',
    dataTestId = DEFAULT_TEST_ID,
    ...rest
  } = useProps(props);

  return (
    <BaseComboBox
      {...rest}
      className={className}
      noOptionsMessage={noOptionsMessage}
      dataTestId={dataTestId}
      placeholder={placeholder}
      version={VERSION}
      // defaultMenuIsOpen
      // inputValue='sdhjkdshjk'
      // menuPortalTarget={document.body}
      // isClearable
    />
  );
};
