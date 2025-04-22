import React, { FC } from 'react';
import cn from 'classnames';

import styles from './placeholder.module.scss';

export interface PlaceholderProps {
  text?: string;
  active?: boolean;
  visible?: boolean;
  className?: string;
}

export const Placeholder: FC<PlaceholderProps> = (props) => {
  const { text, active, className, visible } = props;

  return (
    <div
      className={cn(styles.placeholder, className, {
        [styles.placeholder_active]: active,
        [styles.placeholder_visible]: visible,
      })}
    >
      <span className={styles.placeholder_text}>{text}</span>
    </div>
  );
};

export type PlaceholderComponent = typeof Placeholder;
