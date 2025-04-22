import React, { FC } from 'react';
import cn from 'classnames';

import type { MetaProps } from './interfaces';
import styles from './meta.module.scss';

export const Meta: FC<MetaProps> = (props) => {
  const { dataTestId, startMetaText, endMetaText, position = 'top', disabled, state } = props;

  return (
    <div
      data-testid={dataTestId}
      className={cn(styles.meta, {
        [styles.meta_disabled]: disabled,
        [styles[`meta_${state}`]]: !disabled && !!state,
      })}
    >
      <span
        className={cn(styles.text, {
          [styles.text_label]: position === 'top',
          [styles.text_left]: position === 'bottom',
        })}
      >
        {startMetaText}
      </span>

      <span
        className={cn(styles.text, {
          [styles.text_label]: position === 'top',
          [styles.text_right]: position === 'bottom',
        })}
      >
        {endMetaText}
      </span>
    </div>
  );
};
