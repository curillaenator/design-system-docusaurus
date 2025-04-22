import React, { useContext } from 'react';
import { Switch } from '@kit-xyz/switch';
import { Radio } from '@kit-xyz/radio';
import { Paper } from '@kit-xyz/paper';

import { LayoutContext } from '../../../context';

import { Block } from './Block';
import styles from './headings.module.scss';

export const HeaderItem = () => {
  const { state } = useContext(LayoutContext);

  const { mode, smoothedCorners } = state;

  return (
    <Paper fullwidth borderRadius='xl' padding='l' colorMode={mode} smoothedCorners={smoothedCorners}>
      <h3 className={styles.title}>Header</h3>

      <Block title='Left select'>
        <Radio
          disabled
          appearance='solid-alt'
          id='header-left-slots-none'
          name='header-left-slots'
          label='none'
          value='none'
          checked
          colorMode={mode}
          onChange={() => {}}
        />
        <Radio
          disabled
          appearance='solid-alt'
          id='header-left-slots-tab'
          name='header-left-slots'
          label='tab'
          value='tab'
          checked={false}
          colorMode={mode}
          onChange={() => {}}
        />
      </Block>

      <Block title='Center'>
        <Switch disabled appearance='solid-alt' colorMode={mode} checked={false} onChange={() => {}} />
      </Block>

      <Block title='Center select'>
        <Radio
          disabled
          appearance='solid-alt'
          id='header-center-slots-none'
          name='header-center-slots'
          label='none'
          value='none'
          checked
          colorMode={mode}
          onChange={() => {}}
        />
        <Radio
          disabled
          appearance='solid-alt'
          id='header-center-slots-title'
          name='header-center-slots'
          label='title'
          value='title'
          checked={false}
          colorMode={mode}
          onChange={() => {}}
        />
        <Radio
          disabled
          appearance='solid-alt'
          id='header-center-slots-search'
          name='header-center-slots'
          label='search'
          value='search'
          checked={false}
          colorMode={mode}
          onChange={() => {}}
        />
      </Block>

      <Block title='Right'>
        <Switch disabled appearance='solid-alt' colorMode={mode} checked={false} onChange={() => {}} />
      </Block>

      <Block title='Right select'>
        <Radio
          disabled
          appearance='solid-alt'
          id='header-right-slots-buttons'
          name='header-right-slots'
          label='buttons'
          value='buttons'
          checked
          colorMode={mode}
          onChange={() => {}}
        />
        <Radio
          disabled
          appearance='solid-alt'
          id='header-right-slots-pagination'
          name='header-right-slots'
          label='pagination'
          value='pagination'
          checked={false}
          colorMode={mode}
          onChange={() => {}}
        />
        <Radio
          disabled
          appearance='solid-alt'
          id='header-right-slots-view'
          name='header-right-slots'
          label='view'
          value='view'
          checked={false}
          colorMode={mode}
          onChange={() => {}}
        />
      </Block>

      <Block title='Background color'>
        <Switch disabled appearance='solid-alt' colorMode={mode} checked={false} onChange={() => {}} />
      </Block>

      <Block title='Background border'>
        <Switch disabled appearance='solid-alt' colorMode={mode} checked={false} onChange={() => {}} />
      </Block>
    </Paper>
  );
};
