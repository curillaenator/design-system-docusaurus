import React from 'react';
import { components } from 'react-select';
import cn from 'classnames';

import type { ComboBoxComponents } from '../interfaces';

import styles from './singlevalue.module.scss';

export const SingleValue: ComboBoxComponents['SingleValue'] = (props) => {
  const { selectProps, data, innerProps } = props;
  const { title, icon: Icon } = data;

  return (
    <components.SingleValue
      {...props}
      innerProps={{
        ...innerProps,
        // @ts-ignore
        'data-testid': `${selectProps.dataTestId}.Control.SingleValue`,
      }}
      className={cn(props.className, styles.value)}
    >
      {Icon && (
        // @ts-ignore
        <Icon size='xl' />
      )}

      <span
        className={cn(styles.title, {
          [styles.title_noIcon]: !Icon,
        })}
      >
        {title}
      </span>
    </components.SingleValue>
  );
};
