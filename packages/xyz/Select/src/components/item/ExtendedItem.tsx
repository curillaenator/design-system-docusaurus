import React from 'react';
import cn from 'classnames';
import { useClickHandler } from '@kit-base/dropable';
import { Button } from '@kit-xyz/button';
import { Badge } from '@kit-xyz/badge';
import { Avatar, AvatarImage } from '@kit-xyz/avatar';

import type { ExtendedItemProps, SelectIdProp } from './interfaces';
import styles from './item.module.scss';

export const ExtendedItem = <T extends SelectIdProp>(props: ExtendedItemProps<T>) => {
  const {
    avatar,
    badge,
    caption,
    description,
    Icon,
    closeOnClick,
    active,
    onClick = () => {},
    colorMode,
    ...rest
  } = props;

  const { src, svg, alt, initials, appearance = 'primary' } = avatar || {};

  const { clickHandler } = useClickHandler(() => onClick(props), closeOnClick);

  return (
    <Button
      {...rest}
      size='xs'
      active={active}
      appearance='primary-transparent'
      fullWidth
      labelsFullwidth
      IconLeft={
        initials
          ? () => (
              <Avatar shape='circular' size='s' appearance={appearance} className={styles.noShrink}>
                <AvatarImage initials={initials} src={src} svg={svg} alt={alt} />
              </Avatar>
            )
          : Icon
      }
      // @ts-expect-error не заявленный интерфейсом функционал
      elementRight={!!description && <span className={styles.rightElement}>{description}</span>}
      onClick={clickHandler}
      colorMode={colorMode}
      className={cn(styles.selectItem, {
        [styles.badgeItem]: !!badge,
        [styles.avatarItem]: !!avatar,
        [styles.menuItem]: !avatar && !badge,
      })}
    >
      {badge ? (
        <Badge {...badge} size='xs' shape='circular' className={cn(styles.captionBadge, badge.className || '')} />
      ) : (
        caption
      )}
    </Button>
  );
};
