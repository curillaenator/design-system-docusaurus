import React from 'react';
import { components } from 'react-select';
import cn from 'classnames';

import type { ComboBoxComponents } from '../interfaces';

import styles from './dropdownindicator.module.scss';

export const ClearIndicator: ComboBoxComponents['ClearIndicator'] = (props) => {
  const { selectProps, innerProps } = props;

  return (
    <components.ClearIndicator
      {...props}
      innerProps={{
        ...innerProps,
        // @ts-ignore
        'data-testid': `${selectProps.dataTestId}.Control.ClearIndicator`,
      }}
      className={cn(styles.indicator, props.className)}
    >
      {selectProps.iconClear}
    </components.ClearIndicator>
  );
};
