import React from 'react';
import { components } from 'react-select';
import cn from 'classnames';

import type { ComboBoxComponents } from '../interfaces';

import styles from './dropdownindicator.module.scss';

export const DropdownIndicator: ComboBoxComponents['DropdownIndicator'] = (props) => {
  const { selectProps, innerProps } = props;

  return (
    <components.DropdownIndicator
      {...props}
      innerProps={{
        ...innerProps,
        // @ts-ignore
        'data-testid': `${selectProps.dataTestId}.Control.Carret`,
      }}
      className={cn(styles.indicator, props.className, {
        [styles.indicator_active]: selectProps.menuIsOpen,
      })}
    >
      {selectProps.iconRight}
    </components.DropdownIndicator>
  );
};
