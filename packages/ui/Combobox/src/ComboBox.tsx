import React, { FC } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import cn from 'classnames';

import {
  SelectContainer,
  Control,
  ValueContainer,
  DropdownIndicator,
  ClearIndicator,
  Option,
  MultiValueRemove,
  Menu,
  MenuPortal,
  MenuList,
  GroupHeading,
  NoOptionsMessage,
  SingleValue,
  Placeholder,
} from './Components';
import { getOptionLabel, getOptionValue } from './helpers';
import { VERSION } from './version';
import { DEFAULT_TEST_ID } from './constants';
import type { BaseComboBoxProps } from './interfaces';
import styles from './combobox.module.scss';

const conponent = {
  SelectContainer,
  DropdownIndicator,
  ClearIndicator,
  Control,
  Option,
  MultiValueRemove,
  Menu,
  MenuList,
  MenuPortal,
  GroupHeading,
  ValueContainer,
  NoOptionsMessage,
  SingleValue,
  Placeholder,
};

export const ComboBox: FC<BaseComboBoxProps> = (props) => {
  const {
    dataTestId = DEFAULT_TEST_ID,
    version = VERSION,
    className,
    hideSelectedOptions = false,
    closeMenuOnSelect = false,
    isMulti = false,
    isClearable = false,
    placeholder = 'Поиск',
    noOptionsMessage = () => 'Опции не найдены',
    // isDisabled,
    ...rest
  } = props;

  return (
    // @ts-ignore
    <Select
      {...rest}
      version={version}
      unstyled
      dataTestId={dataTestId}
      placeholder={placeholder}
      closeMenuOnSelect={closeMenuOnSelect}
      noOptionsMessage={noOptionsMessage}
      hideSelectedOptions={hideSelectedOptions}
      classNamePrefix='combobox'
      isMulti={isMulti}
      isClearable={isClearable}
      getOptionLabel={getOptionLabel}
      getOptionValue={getOptionValue}
      className={cn(className, styles.combobox)}
      // @ts-ignore
      components={makeAnimated(conponent)}
    />
  );
};
