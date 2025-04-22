import React, { FC } from 'react';
import cn from 'classnames';

import styles from './textcolumns.module.scss';

interface TextColsProps {
  cols?: number;
}

export const TextColumns: FC<TextColsProps> = (props) => {
  const { cols = 2, children } = props;

  return <div className={cn(styles.container, styles[`_cols-${cols}`])}>{children}</div>;
};
