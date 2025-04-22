// заменить компонент на китовый
import React, { FC } from 'react';
import cn from 'classnames';

import styles from './action.module.scss';
import { ActionProps } from './interfaces';

export const ActionButton: FC<ActionProps> = (props) => {
  const { dataTestId, size, Icon, colorMode = 'light', ...rest } = props;

  return (
    <button
      {...rest}
      data-testid={dataTestId}
      className={cn(styles.actionButton, styles[colorMode])}
      tabIndex={0}
      type='button'
    >
      <Icon size={size} />
    </button>
  );
};
