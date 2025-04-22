import React, { useContext } from 'react';
import { Paper } from '@kit-xyz/paper';
import { Radio } from '@kit-xyz/radio';
import { Switch } from '@kit-xyz/switch';
// import { Checkbox } from '@kit-xyz/checkbox';

import { LayoutContext } from '../../../context';

import { Block } from './Block';
import styles from './headings.module.scss';

export const LeftMenuItem = () => {
  const {
    state,
    config,
    leftMenu,
    toggleLeftSidebar,
    toggleLeftDrawer,
    toggleLeftMenuSidebarOrDrawer,
    toggleMenuLogo,
    toggleMenuInput,
    toggleMenuUser,
    toggleLeftMenuOnOff,
  } = useContext(LayoutContext);

  const { leftDrawer, leftSidebar } = config;
  const { logo, input, user } = leftMenu;
  const { mode, isSidebarLeftOpen, isDrawerLeftOpen, smoothedCorners } = state;

  const disabled = !leftDrawer && !leftSidebar;

  return (
    <Paper fullwidth borderRadius='xl' padding='l' colorMode={mode} smoothedCorners={smoothedCorners}>
      <h3 className={styles.title}>LeftMenu</h3>

      <Block title='On'>
        <Switch appearance='solid-alt' colorMode={mode} checked={!disabled} onChange={() => toggleLeftMenuOnOff()} />
      </Block>

      <Block title='As'>
        <Radio
          disabled
          id='leftMenu-as-drawer'
          appearance='solid-alt'
          name='left-menu-as-toggler'
          label='Drawer'
          value='drawer'
          checked={!!leftDrawer}
          onChange={() => toggleLeftMenuSidebarOrDrawer('drawer')}
          // disabled={disabled}
          colorMode={mode}
        />
        <Radio
          disabled
          id='leftMenu-as-sidebar'
          appearance='solid-alt'
          name='left-menu-as-toggler'
          label='Sidebar'
          value='sidebar'
          checked={!!leftSidebar}
          onChange={() => toggleLeftMenuSidebarOrDrawer('sidebar')}
          // disabled={disabled}
          colorMode={mode}
        />
      </Block>

      <Block title='As sidebar opened'>
        <Switch
          appearance='solid-alt'
          disabled={disabled}
          colorMode={mode}
          checked={isSidebarLeftOpen}
          onChange={() => toggleLeftSidebar(!isSidebarLeftOpen)}
        />
      </Block>

      <Block title='As drawer opened'>
        <Switch
          appearance='solid-alt'
          colorMode={mode}
          // disabled={disabled}
          disabled
          checked={isDrawerLeftOpen}
          onChange={() => toggleLeftDrawer(!isDrawerLeftOpen)}
        />
      </Block>

      <Block title='Logotype'>
        <Switch
          appearance='solid-alt'
          colorMode={mode}
          disabled={disabled}
          checked={!!logo}
          onChange={() => toggleMenuLogo()}
        />
      </Block>

      <Block title='Input'>
        <Switch
          appearance='solid-alt'
          colorMode={mode}
          disabled={disabled}
          checked={!!input}
          onChange={() => toggleMenuInput()}
        />
      </Block>

      <Block title='Menu'>
        <Switch appearance='solid-alt' colorMode={mode} disabled={disabled} checked={false} onChange={() => {}} />
      </Block>

      <Block title='User'>
        <Switch
          appearance='solid-alt'
          colorMode={mode}
          disabled={disabled}
          checked={!!user}
          onChange={() => toggleMenuUser()}
        />
      </Block>
    </Paper>
  );
};
