import React, { useContext } from 'react';
import { Paper } from '@kit-xyz/paper';
// import { Select, type ItemProps } from '@kit-xyz/select';
import { Switch } from '@kit-xyz/switch';
// import ArrowLeftIcon from '@kit-xyz/icon/src/assets/duotone/ArrowLeftIcon';
// import ArrowRightIcon from '@kit-xyz/icon/src/assets/duotone/ArrowRightIcon';

import { LayoutContext } from '../../../context';

import { Block } from './Block';
import styles from './headings.module.scss';

// const RIGHT_DRAWER_MIN_WIDTH_OPTIONS: ItemProps[] = [
//   {
//     id: 'right-sidebar-width-selector-0',
//     caption: 'Hidden',
//     value: 0,
//     Icon: ArrowRightIcon,
//   },
//   {
//     id: 'right-sidebar-width-selector-96',
//     caption: '96px',
//     value: 96,
//     Icon: ArrowLeftIcon,
//   },
// ];

export const RightSidebarItem = () => {
  const {
    state,
    config,
    toggleRightSidebarOnOff,
    toggleRightSidebar,
    toggleRightDrawerOnOff,
    // setRightDrawerClosedWidth,
    toggleRightDrawer,
  } = useContext(LayoutContext);

  const {
    rightSidebar,
    rightDrawer,
    // rightDrawerClosedWidth
  } = config;
  const { isSidebarRightOpen, isDrawerRightOpen, mode, smoothedCorners } = state;

  return (
    <Paper fullwidth borderRadius='xl' padding='l' colorMode={mode} smoothedCorners={smoothedCorners}>
      <h3 className={styles.title}>Right Sidebar & Drawer</h3>

      <Block title='Right sidebar'>
        <Switch
          appearance='solid-alt'
          colorMode={mode}
          checked={rightSidebar}
          onChange={() => toggleRightSidebarOnOff()}
        />
      </Block>

      <Block title='Right sidebar open'>
        <Switch
          appearance='solid-alt'
          colorMode={mode}
          disabled={!rightSidebar}
          checked={isSidebarRightOpen}
          onChange={() => toggleRightSidebar()}
        />
      </Block>

      <Block title='Right drawer'>
        <Switch
          appearance='solid-alt'
          colorMode={mode}
          checked={rightDrawer}
          onChange={() => toggleRightDrawerOnOff()}
        />
      </Block>

      <Block title='Right drawer opened'>
        <Switch
          appearance='solid-alt'
          colorMode={mode}
          disabled={!rightDrawer}
          checked={isDrawerRightOpen}
          onChange={() => toggleRightDrawer()}
        />
      </Block>

      {/* <Block title='Right drawer min w'>
        <Select
          colorMode={mode}
          fullWidth
          items={RIGHT_DRAWER_MIN_WIDTH_OPTIONS}
          selected={RIGHT_DRAWER_MIN_WIDTH_OPTIONS.find(
            (itm) => itm.id === `right-sidebar-width-selector-${rightDrawerClosedWidth}`,
          )}
          setSelected={(item) => {
            setRightDrawerClosedWidth(item.value as '0' | '96');
          }}
          openNodeProps={{
            appearance: 'primary-solid-alt',
          }}
        />
      </Block> */}
    </Paper>
  );
};
