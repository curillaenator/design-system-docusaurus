import React from 'react';
import { components } from 'react-select';
import cn from 'classnames';

import type { ComboBoxComponents } from '../interfaces';

import styles from './placeholder.module.scss';

export const Placeholder: ComboBoxComponents['Placeholder'] = (props) => {
  const { innerProps, selectProps } = props;

  return (
    <components.Placeholder
      {...props}
      innerProps={{
        ...innerProps,
        // @ts-ignore
        'data-testid': `${selectProps.dataTestId}.Control.Placeholder`,
      }}
      className={cn(props.className, styles.placeholder, {
        [styles.placeholder_shifted]: !selectProps.isMulti,
      })}
    />
  );
};
