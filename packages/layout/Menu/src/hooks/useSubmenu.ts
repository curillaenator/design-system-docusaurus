import { useState, useCallback, useRef } from 'react';
import cn from 'classnames';

import type { MenuItemProps } from '../components';
import styles from '../components/Content/submenu.module.scss';

export const useSubmenu = (isOpen: boolean) => {
  const [hoveredMenuItem, setHoveredMenuItem] = useState<MenuItemProps | null>(null);

  const handleSubmenuElements = useCallback(
    (hoveredItem: MenuItemProps | null) => {
      if (isOpen) return;
      setHoveredMenuItem(hoveredItem);
    },
    [isOpen],
  );

  const onElementMouseLeaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resetSubmenuElements = useCallback(() => {
    if (onElementMouseLeaveTimer.current) clearTimeout(onElementMouseLeaveTimer.current);
    onElementMouseLeaveTimer.current = setTimeout(() => handleSubmenuElements(null), 500);
  }, [handleSubmenuElements]);

  const resetOnLeaveTimer = useCallback(() => {
    if (onElementMouseLeaveTimer.current) {
      clearTimeout(onElementMouseLeaveTimer.current);
      onElementMouseLeaveTimer.current = null;
    }
  }, []);

  const setSubmenuElements = useCallback(
    (item: MenuItemProps) => {
      if (onElementMouseLeaveTimer.current) clearTimeout(onElementMouseLeaveTimer.current);
      handleSubmenuElements(item);
    },
    [handleSubmenuElements],
  );

  return {
    hoveredMenuItem,
    handleSubmenuElements,
    resetSubmenuElements,
    resetOnLeaveTimer,
    setSubmenuElements,
    className: cn(styles.container, {
      [styles.container_opened]: !!hoveredMenuItem?.elements?.length,
    }),
  };
};
