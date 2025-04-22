import React from 'react';
import { components } from 'react-select';
import cn from 'classnames';

import type { ComboBoxComponents } from '../interfaces';

import styles from './control.module.scss';

export const Control: ComboBoxComponents['Control'] = (props) => {
  const { children, isDisabled, isFocused, menuIsOpen, selectProps, innerProps, ...rest } = props;

  return (
    <components.Control
      {...rest}
      innerProps={{
        ...innerProps,
        // @ts-ignore
        'data-testid': `${selectProps.dataTestId}.Control`,
      }}
      isFocused={isFocused}
      menuIsOpen={menuIsOpen}
      selectProps={selectProps}
      isDisabled={isDisabled}
      className={cn(styles.control, {
        [styles.control_focused]: menuIsOpen || isFocused,
        [styles.control_interactive]: !menuIsOpen && !isDisabled,
        [styles.control_disabled]: isDisabled,
        [styles.control_bordered]: selectProps.bordered,
      })}
    >
      {selectProps.iconLeft && (
        <div
          data-testid={`${selectProps.dataTestId}.Control.Search`}
          className={cn(styles.search, {
            [styles.search_active]: menuIsOpen,
          })}
        >
          {selectProps.iconLeft}
        </div>
      )}

      {children}
    </components.Control>
  );
};
