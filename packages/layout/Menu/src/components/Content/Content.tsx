import React, { FC, useContext } from 'react';
import cn from 'classnames';

import { MenuItem, type MenuItemProps } from './MenuItem';
import styles from './content.module.scss';
import { MenuContext } from '../../context/MenuContext';

export interface ContentProps {
  elements: MenuItemProps[];
  linkedApps?: MenuItemProps[];
  slotedFromHeaderLeft?: MenuItemProps[];
  slotedFromHeaderRight?: MenuItemProps[];

  resetSubmenuElements: () => void;
  setSubmenuElements: (hoveredItem: MenuItemProps) => void;
}

export const Content: FC<ContentProps> = (props) => {
  const { isOpen, screen, colorMode } = useContext(MenuContext);

  const {
    elements,
    linkedApps = [],
    slotedFromHeaderLeft = [],
    slotedFromHeaderRight = [],

    setSubmenuElements,
    resetSubmenuElements,
  } = props;

  const isMenuDrawer = screen === 'mobile' || screen === 'tablet';

  return (
    <div
      className={cn(styles.container, {
        [styles.container_opened]: !isMenuDrawer && isOpen,
      })}
    >
      <div
        className={cn(styles.content, {
          [styles.content_opened]: !isMenuDrawer && isOpen,
        })}
      >
        <div className={styles.elements}>
          {elements.map((item) => (
            <MenuItem
              {...item}
              key={item.id}
              size='xs'
              colorMode={colorMode}
              minified={!isMenuDrawer && !isOpen}
              onMouseEnter={() => setSubmenuElements(item)}
              onMouseLeave={() => resetSubmenuElements()}
            />
          ))}
        </div>

        {!!linkedApps && (
          <div className={styles.linkedApps}>
            {linkedApps.map((item) => (
              <MenuItem
                {...item}
                key={item.id}
                size='xs'
                colorMode={colorMode}
                minified={!isMenuDrawer && !isOpen}
                onMouseEnter={() => setSubmenuElements(item)}
                onMouseLeave={() => resetSubmenuElements()}
              />
            ))}
          </div>
        )}

        {!!slotedFromHeaderLeft.length && (
          <div className={styles.slotedFormHeaderLeft}>
            {slotedFromHeaderLeft.map((item) => (
              <MenuItem {...item} key={item.id} size='xs' colorMode={colorMode} minified={!isMenuDrawer && !isOpen} />
            ))}
          </div>
        )}

        {!!slotedFromHeaderRight.length && (
          <div className={styles.slotedFormHeaderRight}>
            {slotedFromHeaderRight.map((item) => (
              <MenuItem {...item} key={item.id} size='xs' colorMode={colorMode} minified={!isMenuDrawer && !isOpen} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
