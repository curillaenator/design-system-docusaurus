import React, { FC } from 'react';

import styles from './block.module.scss';

export const Block: FC<{ title: string }> = (props) => {
  const { title, children } = props;

  return (
    <div className={styles.block}>
      <div className={styles.left}>{title}</div>

      <div className={styles.right}>{children}</div>
    </div>
  );
};
