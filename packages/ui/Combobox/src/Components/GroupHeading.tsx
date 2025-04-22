import React from 'react';
import { components } from 'react-select';
import cn from 'classnames';

import type { ComboBoxComponents } from '../interfaces';

import styles from './groupheading.module.scss';

export const GroupHeading: ComboBoxComponents['GroupHeading'] = (props) => (
  <components.GroupHeading {...props} className={cn(props.className, styles.heading)} />
);
