import React, { type ForwardRefExoticComponent, type RefAttributes } from 'react';
import cn from 'classnames';
import { components } from 'react-select';

import { breakWords } from '../helpers';
import type { ComboBoxComponents } from '../interfaces';

import styles from './option.module.scss';

type IconComponent = ForwardRefExoticComponent<RefAttributes<SVGSVGElement> & { className: string }>;

export const Option: ComboBoxComponents['Option'] = (props) => {
  const { isSelected, isFocused, selectProps, data, innerProps } = props;
  const { title, icon, disabled } = data;

  const Icon = (icon as IconComponent) || (() => null);

  return (
    <components.Option
      {...props}
      innerProps={{
        ...innerProps,
        onClick: disabled ? undefined : innerProps.onClick,
      }}
      className={cn(styles.option, {
        [styles.option_disabled]: disabled,
        [styles.option_interactive]: !disabled,
        [styles.option_selected]: !disabled && isSelected,
        [styles.option_focused]: !disabled && isFocused,
      })}
    >
      <Icon className={styles.icon} />

      <span
        className={cn(styles.label, {
          [styles.label_breakwords]: breakWords(title),
        })}
      >
        {title}
      </span>

      {!!isSelected && selectProps.iconChecked}
    </components.Option>
  );
};
