import React, { useContext } from 'react';
import { Paper } from '@kit-xyz/paper';
import { Switch } from '@kit-xyz/switch';
import { Radio } from '@kit-xyz/radio';

import { LayoutContext } from '../../../context';

import { Block } from './Block';
import styles from './headings.module.scss';

export const SceneItem = () => {
  const { state, toggleSmoothCorners } = useContext(LayoutContext);

  const { mode, smoothedCorners } = state;

  return (
    <Paper fullwidth borderRadius='xl' padding='l' colorMode={mode} smoothedCorners={smoothedCorners}>
      <h3 className={styles.title}>Scene</h3>

      <Block title='Corner smoothed (experimental)'>
        <Switch
          appearance='solid-alt'
          colorMode={mode}
          checked={smoothedCorners}
          onChange={() => toggleSmoothCorners()}
        />
      </Block>

      <Block title='Left'>
        <Switch appearance='solid-alt' disabled colorMode={mode} checked={false} onChange={() => {}} />
      </Block>

      <Block title='Left select'>
        <Radio
          disabled
          appearance='solid-alt'
          id='scene-left-slots-none'
          name='scene-left-slots'
          label='none'
          value='none'
          checked
          colorMode={mode}
          onChange={() => {}}
        />
        <Radio
          disabled
          appearance='solid-alt'
          id='scene-left-slots-tab'
          name='scene-left-slots'
          label='tab'
          value='tab'
          checked={false}
          colorMode={mode}
          onChange={() => {}}
        />
        <Radio
          disabled
          appearance='solid-alt'
          id='scene-left-slots-input'
          name='scene-left-slots'
          label='input'
          value='input'
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
          id='scene-right-slots-none'
          name='scene-right-slots'
          label='none'
          value='none'
          checked
          colorMode={mode}
          onChange={() => {}}
        />
        <Radio
          disabled
          appearance='solid-alt'
          id='scene-right-slots-tab'
          name='scene-right-slots'
          label='tab'
          value='tab'
          checked={false}
          colorMode={mode}
          onChange={() => {}}
        />
        <Radio
          disabled
          appearance='solid-alt'
          id='scene-right-slots-input'
          name='scene-right-slots'
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
