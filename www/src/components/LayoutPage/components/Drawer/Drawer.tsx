import React, { FC, useContext } from 'react';
import cn from 'classnames';
import BrowserOnly from '@docusaurus/BrowserOnly';
import type { DrawerProps } from '@kit-xyz/drawer';

import { LayoutContext } from '../../context';
import { DRAWER_PORTAL_ID, DRAWER_RIGHT_PORTAL_ID } from '../../constants';

import styles from './drawer.module.scss';

export const Drawer: FC<Partial<DrawerProps & { fullsize: boolean }>> = (props) => {
  const { children, colorMode, placement, fullsize, ...rest } = props;

  const { state, toggleLeftDrawer, toggleRightDrawer } = useContext(LayoutContext);
  const { isDrawerLeftOpen, isDrawerRightOpen, isSidebarLeftOpen } = state;

  return (
    <BrowserOnly>
      {() => {
        // drawer использует браузерное апи, поэтому завернут в специальную обертку докузавра, чтобы среверное приложение собиралось
        const { Drawer: DrawerThemed } = require('@kit-xyz/drawer'); // eslint-disable-line global-require

        return (
          <>
            <div className={cn(styles.drawerDummy, styles[`drawerDummy_0`])} />

            <DrawerThemed
              {...rest}
              portalId={placement === 'left' ? DRAWER_PORTAL_ID : DRAWER_RIGHT_PORTAL_ID}
              open={placement === 'left' ? isDrawerLeftOpen : isDrawerRightOpen}
              colorMode={colorMode}
              placement={placement}
              contentClassName={cn({
                [styles['_maxed_lsb-closed']]: fullsize && !isSidebarLeftOpen,
                [styles['_maxed_lsb-opened']]: fullsize && isSidebarLeftOpen,
              })}
              onClose={() => {
                if (placement === 'left') {
                  toggleLeftDrawer(false);
                } else {
                  toggleRightDrawer(false);
                }
              }}
            >
              {children}
            </DrawerThemed>
          </>
        );
      }}
    </BrowserOnly>
  );
};
