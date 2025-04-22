import React, { useContext } from 'react';
import { Paper } from '@kit-xyz/paper';
import { Radio } from '@kit-xyz/radio';
import { Select, type ItemProps } from '@kit-xyz/select';
import { Switch } from '@kit-xyz/switch';
import SunIcon from '@kit-xyz/icon/src/assets/duotone/SunIcon';
import MoonIcon from '@kit-xyz/icon/src/assets/duotone/MoonIcon';

import { LayoutContext } from '../../../context';

import { Block } from './Block';
import styles from './headings.module.scss';

const PAGE_THEME_OPTIONS: ItemProps[] = [
  {
    id: 'page-theme-mode-light',
    caption: 'Light',
    value: 'light',
    Icon: SunIcon,
  },
  {
    id: 'page-theme-mode-dark',
    caption: 'Dark',
    value: 'dark',
    Icon: MoonIcon,
  },
];

export const PageItem = () => {
  const { state, config, toggleMode, toggleFooter, toggleHeader, setContentPaddings, toggleModal } =
    useContext(LayoutContext);
  const { mode, smoothedCorners } = state;
  const { isFooter, isModal, isHeader, contentPaddings } = config;

  return (
    <Paper
      id='page-item-shape'
      fullwidth
      borderRadius='xl'
      borderWidth='s'
      padding='l'
      colorMode={mode}
      smoothedCorners={smoothedCorners}
    >
      <h3 className={styles.title}>Page</h3>

      <Block title='Theme'>
        <Select
          fullWidth
          colorMode={mode}
          items={PAGE_THEME_OPTIONS}
          selected={PAGE_THEME_OPTIONS.find((itm) => itm.id === `page-theme-mode-${mode}`)}
          setSelected={(item) => {
            toggleMode(item.value as 'dark' | 'light');
          }}
          openNodeProps={{
            appearance: 'primary-solid-alt',
            labelsFullwidth: true,
          }}
        />
      </Block>

      <Block title='Paddings'>
        <Radio
          id='page-paddings-large'
          appearance='solid-alt'
          name='paddings-switch'
          label='Large'
          value='large'
          checked={contentPaddings === 'large'}
          colorMode={mode}
          onChange={() => setContentPaddings('large')}
        />
        <Radio
          id='page-paddings-medium'
          appearance='solid-alt'
          name='paddings-switch'
          label='Medium'
          value='medium'
          checked={contentPaddings === 'medium'}
          colorMode={mode}
          onChange={() => setContentPaddings('medium')}
        />
        <Radio
          id='page-paddings-small'
          appearance='solid-alt'
          name='paddings-switch'
          label='Small'
          value='small'
          checked={contentPaddings === 'small'}
          colorMode={mode}
          onChange={() => setContentPaddings('small')}
        />
      </Block>

      <Block title='Header'>
        <Switch appearance='solid-alt' colorMode={mode} checked={isHeader} onChange={() => toggleHeader()} />
      </Block>

      <Block title='Footer'>
        <Switch appearance='solid-alt' colorMode={mode} checked={isFooter} onChange={() => toggleFooter()} />
      </Block>

      <Block title='Modal'>
        <Switch appearance='solid-alt' colorMode={mode} checked={isModal} onChange={() => toggleModal()} />
      </Block>

      <Block title='Scene'>
        <Switch disabled appearance='solid-alt' colorMode={mode} checked={false} onChange={() => {}} />
      </Block>
    </Paper>
  );
};
