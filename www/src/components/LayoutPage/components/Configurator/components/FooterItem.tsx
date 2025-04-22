import React, { useContext } from 'react';
import { Paper } from '@kit-xyz/paper';
import { Switch } from '@kit-xyz/switch';
import { Radio } from '@kit-xyz/radio';

import { LayoutContext } from '../../../context';

import { Block } from './Block';
import styles from './headings.module.scss';

export const FooterItem = () => {
  const { state } = useContext(LayoutContext);

  // const { isHeader } = config;
  const { mode, smoothedCorners } = state;

  return (
    <Paper fullwidth borderRadius='xl' padding='l' colorMode={mode} smoothedCorners={smoothedCorners}>
      <h3 className={styles.title}>Footer</h3>

      <Block title='Left'>
        <Switch appearance='solid-alt' disabled colorMode={mode} checked={false} onChange={() => {}} />
      </Block>

      <Block title='Left select'>
        <Radio
          disabled
          appearance='solid-alt'
          id='footer-left-slots-none'
          name='footer-left-slots'
          label='none'
          value='none'
          checked
          colorMode={mode}
          onChange={() => {}}
        />
        <Radio
          disabled
          appearance='solid-alt'
          id='footer-left-slots-tab'
          name='footer-left-slots'
          label='tab'
          value='tab'
          checked={false}
          colorMode={mode}
          onChange={() => {}}
        />
        <Radio
          disabled
          appearance='solid-alt'
          id='footer-left-slots-input'
          name='footer-left-slots'
          label='input'
          value='input'
          checked={false}
          colorMode={mode}
          onChange={() => {}}
        />
      </Block>

      <Block title='Right'>
        <Switch appearance='solid-alt' disabled colorMode={mode} checked={false} onChange={() => {}} />
      </Block>

      <Block title='Right select'>
        <Radio
          disabled
          appearance='solid-alt'
          id='footer-right-slots-none'
          name='footer-right-slots'
          label='none'
          value='none'
          checked
          colorMode={mode}
          onChange={() => {}}
        />
        <Radio
          disabled
          appearance='solid-alt'
          id='footer-right-slots-tab'
          name='footer-right-slots'
          label='tab'
          value='tab'
          checked={false}
          colorMode={mode}
          onChange={() => {}}
        />
        <Radio
          disabled
          appearance='solid-alt'
          id='footer-right-slots-input'
          name='footer-right-slots'
          label='input'
          value='input'
          checked={false}
          colorMode={mode}
          onChange={() => {}}
        />
      </Block>

      <Block title='Background color'>
        <Switch appearance='solid-alt' disabled colorMode={mode} checked={false} onChange={() => {}} />
      </Block>

      <Block title='Background border'>
        <Switch appearance='solid-alt' disabled colorMode={mode} checked={false} onChange={() => {}} />
      </Block>
    </Paper>
  );
};
