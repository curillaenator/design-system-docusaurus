import React from 'react';
import { components } from 'react-select';

import type { ComboBoxComponents } from '../interfaces';

import styles from './control.module.scss';

export const MultiValueRemove: ComboBoxComponents['MultiValueRemove'] = (props) => {
  const { selectProps, innerProps } = props;

  return (
    <components.MultiValueRemove
      {...props}
      innerProps={{
        ...innerProps,
        // @ts-ignore
        'data-testid': `${selectProps.dataTestId}.Control.MultiValue.Remove`,
      }}
    >
      <span className={styles.removeMultiValue}>{selectProps.iconRemove}</span>
    </components.MultiValueRemove>
  );
};
