import React, { FC } from 'react';
import cn from 'classnames';

import { LayoutHeaderProps } from './interfaces';
import styles from './header.module.scss';

export const LayoutHeader: FC<LayoutHeaderProps> = (props) => {
  const { className, left, right, middle } = props;

  return (
    <header className={cn(styles.header, className)}>
      {left && <div className={cn(styles.elements, styles.left)}>{left.elements}</div>}

      {middle && <div className={cn(styles.elements, styles.middle)}>{middle.elements}</div>}

      {right && <div className={cn(styles.elements, styles.right)}>{right.elements}</div>}
    </header>
  );
};
