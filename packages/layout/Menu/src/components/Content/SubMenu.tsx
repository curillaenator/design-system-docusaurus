import React, { FC, useContext } from 'react';

import { AccordionItem } from './MenuItem';
import type { MenuItemProps } from './MenuItem';
import styles from './submenu.module.scss';
import { MenuContext } from '../../context/MenuContext';

interface SubMenuProps {
  hoveredMenuItem: MenuItemProps | null;
  handleSubmenuElements: (hoveredItem: MenuItemProps | null) => void;
  resetOnLeaveTimer: () => void;
  resetSubmenuElements: () => void;
  className?: string;
}

export const SubMenu: FC<SubMenuProps> = (props) => {
  const { colorMode } = useContext(MenuContext);
  const { handleSubmenuElements, resetOnLeaveTimer, resetSubmenuElements, hoveredMenuItem, className } =
    props;

  return (
    <div
      data-testid=''
      className={className}
      onMouseLeave={() => resetSubmenuElements()}
      onMouseEnter={() => resetOnLeaveTimer()}
    >
      {hoveredMenuItem?.elements?.length && (
        <>
          <div className={styles.header}>
            <h3 className={styles.title}>{hoveredMenuItem.children}</h3>
          </div>

          <div className={styles.submenu}>
            {hoveredMenuItem.elements.map((el) => (
              <AccordionItem
                {...el}
                key={el.id}
                colorMode={colorMode}
                size='xs'
                appearance='secondary-transparent'
                onClick={(e) => {
                  if (el.onClick) el.onClick(e);
                  handleSubmenuElements(null);
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
