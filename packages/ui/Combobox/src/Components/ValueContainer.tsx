import React from 'react';
import cn from 'classnames';
import { components } from 'react-select';

import type { ComboBoxComponents } from '../interfaces';

import styles from './valuecontainer.module.scss';

export const ValueContainer: ComboBoxComponents['ValueContainer'] = (props) => {
  const { innerProps, selectProps } = props;

  return (
    <components.ValueContainer
      {...props}
      innerProps={{
        ...innerProps,
        // @ts-ignore
        'data-testid': `${selectProps.dataTestId}.Control.ValueContainer`,
      }}
      className={cn(props.className, styles.valuecontainer, {
        [styles.valuecontainer_noIcon]: !selectProps.iconLeft && selectProps.isMulti,
      })}
    />
  );
};
