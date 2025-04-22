import React, { forwardRef, ReactNode, useContext } from 'react';
import cn from 'classnames';
import { MenuContext } from '../../context/MenuContext';

import styles from './menu.module.scss';
import tracker from '../../trackerTmpStyles/menuWrapper.module.scss';

export interface MenuWrapperProps {
  menuContainerId?: string;
  className?: string;
  isSubmenuShown: boolean;
  children: ReactNode;
}

const MenuWrapper = forwardRef<HTMLDivElement, MenuWrapperProps>((props, ref) => {
  const { colorMode, screen } = useContext(MenuContext);

  const { menuContainerId = 'default-layout-menu-container', isSubmenuShown, className = '', children } = props;

  return (
    <div
      ref={ref}
      id={menuContainerId}
      className={cn(
        styles.menu,
        styles.menuVariables,
        styles[`_size_xs`],
        styles[`_color-solid_${colorMode}`],
        tracker.container,
        className,
        {
          [styles.menu_mobile]: screen === 'mobile',
          [styles.menu_submenuShown]: isSubmenuShown,
        },
      )}
    >
      {children}
    </div>
  );
});

MenuWrapper.displayName = 'MenuWrapper';

export { MenuWrapper };
