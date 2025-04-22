import React from 'react';
import { components } from 'react-select';
import cn from 'classnames';

import type { ComboBoxComponents } from '../interfaces';

import styles from './menu.module.scss';

export const NoOptionsMessage: ComboBoxComponents['NoOptionsMessage'] = (props) => (
  <components.NoOptionsMessage {...props} className={cn(props.className, styles.noOptionsMessage)} />
);
