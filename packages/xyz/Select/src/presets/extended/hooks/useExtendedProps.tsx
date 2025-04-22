import React, { useRef, type ReactNode } from 'react';
import cn from 'classnames';
import { useControledDropdown, useAnimation, useCombineControledAnimated } from '@kit-base/dropable';
import { Avatar, AvatarImage } from '@kit-xyz/avatar';
import { Badge } from '@kit-xyz/badge';

import { MAX_OPEN_NODE_SYMBOLS, DEFAULT_OPEN_NODE_PROPS } from '../../../constants';
import type { SelectExtendedProps } from '../interfaces';
import type { ExtendedItemProps } from '../../../components/item/interfaces';
import { SelectIdProp } from '../../../components/item/interfaces';
import styles from '../extended.module.scss';

const cutter = (string: string, cut: number) => (string.length > cut ? `${string.slice(0, cut)}...` : string);

const resolveOpenNodeLabel = <T extends SelectIdProp>(
  selectedItem: ExtendedItemProps<T> | undefined,
  isOpen: boolean,
  props: SelectExtendedProps<T>,
): ReactNode => {
  const { placeholder, colorMode = 'light' } = props;

  if (selectedItem?.badge) {
    return (
      <Badge
        {...selectedItem.badge}
        size='xs'
        shape='circular'
        className={cn(styles.captionBadge, props.openNodeProps?.badgeClassName || '')}
        colorMode={isOpen ? 'light' : colorMode}
      />
    );
  }

  if (selectedItem?.caption) return cutter(selectedItem.caption, MAX_OPEN_NODE_SYMBOLS);

  if (placeholder)
    return (
      <span data-element={isOpen ? 'placeholder-active' : 'placeholder'}>
        {cutter(placeholder, MAX_OPEN_NODE_SYMBOLS)}
      </span>
    );

  return null;
};

const resolveOpenNodeIcon = <T extends SelectIdProp>(
  selectedItem: ExtendedItemProps<T> | undefined,
  isOpen: boolean,
) => {
  if (selectedItem) {
    const { avatar, Icon } = selectedItem;
    const { src, svg, alt, initials, appearance = 'primary' } = avatar || {};

    if (initials) {
      // eslint-disable-next-line react/display-name
      return () => (
        <Avatar shape='circular' size='s' appearance={isOpen ? 'secondary' : appearance} className={styles.noShrink}>
          <AvatarImage initials={initials} src={src} svg={svg} alt={alt} />
        </Avatar>
      );
    }

    return Icon;
  }

  return undefined;
};

export const useExtendedSelectProps = <T extends SelectIdProp>(props: SelectExtendedProps<T>) => {
  const {
    className,
    value,
    closeOnItemClick = true,
    size = 's',
    icon,
    openNodeProps,
    items = [],
    hideSelected = true,
    minified,
    placeholder,
    ...rest
  } = props;

  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const controled = useControledDropdown();
  const animated = useAnimation();

  const { isOpen, ...combinedControled } = useCombineControledAnimated({ controled, animated, rest });

  const selectedItem = items.find((item) => item.id === value);

  return {
    ...rest,
    ...combinedControled,

    items: hideSelected ? items.filter((item) => item.id !== value) : items,

    triggerRef,
    isOpen,
    closeOnItemClick,

    className: cn(styles.contentNodeClassname, styles[`_color-default_light`], styles[`_size_${size}`], className, {
      [styles.contentNodeClassname_expanded]: !minified && isOpen,
    }),

    scrollClassName: cn(styles.scroll, styles[`scroll_light`]),

    openNodeIcon: value ? resolveOpenNodeIcon(selectedItem, Boolean(isOpen)) : icon,

    openNodeLabel: resolveOpenNodeLabel(selectedItem, Boolean(isOpen), { ...props, placeholder }),

    openNodeClassName: cn(styles[`_color-default_light`], styles.openNodeClassname, {
      [styles.openNodeClassname_open_minified]: isOpen,
      [styles.openNodeClassname_open]: !minified && isOpen,
    }),

    openNodeProps: { ...DEFAULT_OPEN_NODE_PROPS, ...openNodeProps },

    minified,
  };
};
