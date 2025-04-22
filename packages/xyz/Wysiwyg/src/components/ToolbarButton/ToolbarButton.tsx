import React, { FC } from 'react';
import cns from 'classnames';

import type { ToolbarButtonProps } from './interfaces';
import s from './ToolbarButton.module.scss';

export const ToolbarButton: FC<ToolbarButtonProps> = (props) => {
  const { type = 'button', children, className, active = false, ...rest } = props;

  return (
    <button
      {...rest}
      type={type ?? 'button'}
      className={cns(s.button, className, {
        [s.active]: active,
        [s.disabled]: props.disabled,
      })}
    >
      {children}
    </button>
  );
};
