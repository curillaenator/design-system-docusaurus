import React, { FC } from 'react';
import cn from 'classnames';
import { Button } from '@kit-xyz/button';

import { DEFAULT_TEST_ID } from '../constants';
import { InternalItemProps } from '../interfaces';
import styles from '../tabs.module.scss';

export const ItemNode: FC<InternalItemProps> = (props) => {
  const {
    dataTestId = DEFAULT_TEST_ID,
    id,
    active,
    size = 'xs',
    appearance = 'primary-solid',
    title,
    Icon,
    ariaControlsId,
    disabled,
    smoothAnimation,
    colorMode,
    onClick = () => {},
    collectEachTabW = () => {},
  } = props;

  return (
    <Button
      ref={(inst) => {
        if (!inst || !smoothAnimation) return;
        collectEachTabW(id, inst.clientWidth);
      }}
      id={id}
      name={id}
      role='tab'
      dataTestId={`${dataTestId}.Tab.${id}`}
      appearance={appearance}
      aria-selected={active}
      aria-controls={ariaControlsId}
      tabIndex={-1}
      active={smoothAnimation ? undefined : active}
      size={size}
      disabled={disabled}
      IconLeft={Icon}
      colorMode={colorMode}
      onClick={(e) => {
        // @ts-expect-error parent el has focus method
        e.target?.parentElement?.focus();
        onClick(id, e);
      }}
      className={cn({
        [styles.button]: smoothAnimation,
        [styles.button_activated]: smoothAnimation && active,
      })}
    >
      {title}
    </Button>
  );
};
