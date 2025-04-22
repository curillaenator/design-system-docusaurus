import cns from 'classnames';

import styles from '../styles/bubble.module.scss';

import { UseBubbleClassnamesHookProps } from './interfaces';

export const useBubbleClassnames = (props: UseBubbleClassnamesHookProps) => {
  const { variant = 'solid', appearance = 'dark', size = 'xl' } = props;
  const currentColorSchema = `_color-${appearance}-${variant}`;
  const currentSize = `_${size}`;

  return cns(styles.bubbleVariables, styles[currentColorSchema], styles[currentSize]);
};
