import React from 'react';
import { components } from 'react-select';
import cn from 'classnames';

import type { ComboBoxComponents } from '../interfaces';

import styles from './selectcontainer.module.scss';

export const SelectContainer: ComboBoxComponents['SelectContainer'] = (props) => {
  const { selectProps, innerProps } = props;

  return (
    <components.SelectContainer
      {...props}
      innerProps={{
        ...innerProps,
        // @ts-ignore
        'data-testid': selectProps.dataTestId,
        // @ts-ignore
        'data-version': selectProps.version,
      }}
      className={cn(props.className, styles.container, {
        [styles.container_chin]: selectProps.menuIsOpen,
      })}
    />
  );
};
