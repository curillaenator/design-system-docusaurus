import React, { ReactNode } from 'react';
import { useControledDropdown, useAnimation, useCombineControledAnimated } from '@kit-base/dropable';
import cn from 'classnames';

import { MAX_OPEN_NODE_SYMBOLS } from './constants';
import type { DropdownProps, ItemProps, DropdownIdProp } from './interfaces';
import styles from './dropdown.module.scss';

const cutter = (string: string, cut: number) => (string.length > cut ? `${string.slice(0, cut)}...` : string);

const resolveOpenNodeLabel = <T extends DropdownIdProp>(
  props: DropdownProps<T>,
  selectedItem: ItemProps<T> | null,
  isOpen: boolean,
): ReactNode => {
  const { value, placeholder, isOpenNodeCaption = true } = props;

  if (isOpenNodeCaption && !!value && selectedItem) return cutter(selectedItem.caption, MAX_OPEN_NODE_SYMBOLS);

  if (isOpenNodeCaption && placeholder) {
    return (
      <span data-element={isOpen ? 'placeholder-active' : 'placeholder'}>
        {cutter(placeholder, MAX_OPEN_NODE_SYMBOLS)}
      </span>
    );
  }

  return null;
};

const resolveOpenNodeIcon = <T extends DropdownIdProp>(props: DropdownProps<T>, selectedItem: ItemProps<T> | null) => {
  const { value: selectedId, icon } = props;
  return !!selectedId ? selectedItem?.Icon : icon;
};

export const useDropdownProps = <T extends DropdownIdProp>(props: DropdownProps<T>) => {
  const {
    className,
    items = [],
    value,
    closeOnItemClick = true,

    // eslint-disable-next-line no-unused-vars
    isOpenNodeCaption,
    // eslint-disable-next-line no-unused-vars
    placeholder,
    // eslint-disable-next-line no-unused-vars
    icon,

    ...rest
  } = props;

  const controled = useControledDropdown();
  const animated = useAnimation();

  const { isOpen, ...combinedControled } = useCombineControledAnimated({ controled, animated, rest });

  const selectedItem = (items.flat().filter((item) => item.id === value)[0] ||
    null) as ItemProps<DropdownIdProp> | null;

  return {
    ...rest,
    ...combinedControled,
    isActive: isOpen as boolean,

    items,
    selectedItem,

    closeOnItemClick,

    className: cn(styles[`_color-default_light`], styles[`_size_s`], className),
    scrollClassName: styles.scroll,

    openNodeIcon: resolveOpenNodeIcon(props, selectedItem),
    openNodeLabel: resolveOpenNodeLabel(props, selectedItem, Boolean(isOpen)),
  };
};
