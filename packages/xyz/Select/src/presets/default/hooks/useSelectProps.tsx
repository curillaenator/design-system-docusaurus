import React, { useRef, type ReactNode, useEffect, useState } from 'react';
import cn from 'classnames';
import { useControledDropdown, useAnimation, useCombineControledAnimated } from '@kit-base/dropable';

import { MAX_OPEN_NODE_SYMBOLS, DEFAULT_OPEN_NODE_PROPS } from '../../../constants';
import type { SelectProps } from '../interfaces';
import styles from '../select.module.scss';
import type { ItemProps, SelectIdProp } from '../../../components/item/interfaces';

const cutter = (string: string, cut: number) => (string.length > cut ? `${string.slice(0, cut)}...` : string);

const resolveOpenNodeLabel = <T extends SelectIdProp>(
  props: SelectProps<T>,
  selectedItem: ItemProps<T>,
  isOpen: boolean,
): ReactNode => {
  const { value, placeholder } = props;

  if (!!value && selectedItem) return cutter(selectedItem.caption, MAX_OPEN_NODE_SYMBOLS);

  if (placeholder)
    return (
      <span data-element={isOpen ? 'placeholder-active' : 'placeholder'}>
        {cutter(placeholder, MAX_OPEN_NODE_SYMBOLS)}
      </span>
    );

  return null;
};

const resolveOpenNodeIcon = <T extends SelectIdProp>(
  props: SelectProps<T>,
  selectedItem: ItemProps<T>,
  everyItemHasIcon: boolean,
) => {
  const { value, icon } = props;

  if (value) return everyItemHasIcon ? selectedItem.Icon : undefined;

  return icon;
};

export const useSelectProps = <T extends SelectIdProp>(props: SelectProps<T>) => {
  const {
    className,
    colorMode = 'light',
    items = [],
    value,
    fullWidth,
    closeOnItemClick = true,
    // eslint-disable-next-line no-unused-vars
    placeholder,
    matchWidth,
    size = 's',
    // eslint-disable-next-line no-unused-vars
    icon,
    openNodeProps,
    // @ts-expect-error проп изъят из основного интерфейса, но может понадобиться для внутреннего дева
    scrollClassName,
    ...rest
  } = props;

  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const controled = useControledDropdown();
  const animated = useAnimation();

  const { isOpen, ...combinedControled } = useCombineControledAnimated({ controled, animated, rest });

  const selectedItem = items.filter((item) => item.id === value)[0];

  const everyItemHasIcon = items?.every((item) => !!item.Icon);

  const [isActiveRoute, setIsActiveRoute] = useState<boolean>(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (!triggerRef.current) return;
    setIsActiveRoute(triggerRef.current.classList.contains('active'));
  });

  return {
    ...rest,
    ...combinedControled,
    triggerRef,
    isActive: isActiveRoute || (isOpen as boolean),
    colorMode,
    fullWidth,

    items,
    selectedItem,

    closeOnItemClick,

    className: cn(styles[`_color-default_${colorMode}`], styles[`_size_${size}`], className),
    scrollClassName: cn(scrollClassName, styles.scroll, styles[`scroll_${colorMode}`]),
    everyItemHasIcon,

    openNodeIcon: resolveOpenNodeIcon(props, selectedItem, everyItemHasIcon),
    openNodeLabel: resolveOpenNodeLabel(props, selectedItem, Boolean(isOpen)),
    openNodeClassName: cn({ [styles.openNodeFullwidth]: fullWidth }),

    matchWidth,
    openNodeProps: { ...DEFAULT_OPEN_NODE_PROPS, ...openNodeProps },
  };
};
