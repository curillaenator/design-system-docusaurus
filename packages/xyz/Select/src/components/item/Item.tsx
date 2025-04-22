import React from 'react';
import { useClickHandler } from '@kit-base/dropable';
import CircleIcon from '@kit-xyz/icon/src/assets/solid/CircleIcon';
import { Button } from '@kit-xyz/button';

import type { ItemProps } from './interfaces';
import styles from './item.module.scss';
import { SelectIdProp } from './interfaces';

export const Item = <T extends SelectIdProp>(props: ItemProps<T>) => {
  const {
    // eslint-disable-next-line no-unused-vars
    id,
    caption,
    Icon,
    closeOnClick,
    active,
    onClick = () => {},
    colorMode,
    appearance = 'primary-transparent',
    ...rest
  } = props;
  const { clickHandler } = useClickHandler(() => onClick(props), closeOnClick);

  return (
    <Button
      {...rest}
      size='xs'
      active={active}
      appearance={appearance}
      fullWidth
      labelsFullwidth
      IconLeft={Icon}
      IconRight={active ? CircleIcon : undefined}
      onClick={clickHandler}
      colorMode={colorMode}
      className={styles.selectItem}
    >
      {caption}
    </Button>
  );
};
