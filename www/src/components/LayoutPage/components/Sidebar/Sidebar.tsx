import React, { FC, useContext } from 'react';
import cn from 'classnames';

import { LayoutContext } from '../../context';

import styles from './sidebar.module.scss';

interface SidebarProps {
  side?: 'left' | 'right';
}

export const Sidebar: FC<SidebarProps> = ({ children, side = 'left' }) => {
  const { state } = useContext(LayoutContext);
  const { isSidebarLeftOpen, isSidebarRightOpen, isSidebarRightFullOpen } = state;

  if (side === 'right') {
    return (
      <aside
        className={cn(styles.sidebar, styles[`sidebar_right`], {
          [styles.sidebar_enlarged]: isSidebarRightFullOpen,
          [styles.sidebar_right_opened]: isSidebarRightOpen,
          [styles.sidebar_right_closed]: !isSidebarRightOpen,
        })}
      >
        <div
          className={cn(styles.enlargable, {
            [styles.enlargable_opened]: isSidebarRightOpen,
            [styles.enlargable_enlarged_lsb_opened]: isSidebarLeftOpen && isSidebarRightFullOpen,
            [styles.enlargable_enlarged_lsb_closed]: !isSidebarLeftOpen && isSidebarRightFullOpen,
          })}
        >
          {children}
        </div>
      </aside>
    );
  }

  return (
    <aside
      className={cn(styles.sidebar, styles[`sidebar_left`], {
        [styles[`sidebar_left_closed`]]: !isSidebarLeftOpen,
      })}
    >
      {children}
    </aside>
  );
};
