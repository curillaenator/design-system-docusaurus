import React, { useContext } from 'react';
import { Paper } from '@kit-xyz/paper';
import { Select } from '@kit-xyz/select';
import { Switch } from '@kit-xyz/switch';

import { LayoutContext } from '../../../context';

import { Block } from './Block';
import styles from './headings.module.scss';

export const ModalItem = () => {
  const { state, config, toggleModalOpen, toggleModalScrollbody, toggleModalOverlay, toggleModalCloseButton } =
    useContext(LayoutContext);

  const { modalConfig, isModal } = config;

  const { hasOverlay, scrollBody, hasCloseButton } = modalConfig;
  const { mode, isModalOpen, smoothedCorners } = state;

  return (
    <Paper fullwidth borderRadius='xl' padding='l' colorMode={mode} smoothedCorners={smoothedCorners}>
      <h3 className={styles.title}>Modal</h3>

      <Block title='Open'>
        <Switch
          appearance='solid-alt'
          disabled={!isModal}
          colorMode={mode}
          checked={isModalOpen}
          onChange={() => toggleModalOpen()}
        />
      </Block>

      <Block title='Top'>
        <Switch appearance='solid-alt' disabled colorMode={mode} checked onChange={() => {}} />
      </Block>

      <Block title='Top select'>
        <Select
          disabled
          fullWidth
          colorMode={mode}
          items={[]}
          selected={{ id: 'title-pagination', value: 'title-pagination', caption: 'Title-pagination' }}
          setSelected={() => {}}
          openNodeProps={{
            appearance: 'primary-solid-alt',
          }}
        />
      </Block>

      <Block title='Close button'>
        <Switch
          appearance='solid-alt'
          disabled={!isModal}
          colorMode={mode}
          checked={hasCloseButton}
          onChange={() => toggleModalCloseButton()}
        />
      </Block>

      <Block title='Full scrollbody'>
        <Switch
          appearance='solid-alt'
          disabled={!isModal}
          colorMode={mode}
          checked={scrollBody}
          onChange={() => toggleModalScrollbody()}
        />
      </Block>

      <Block title='Background overlay'>
        <Switch
          appearance='solid-alt'
          disabled={!isModal}
          colorMode={mode}
          checked={hasOverlay}
          onChange={() => toggleModalOverlay()}
        />
      </Block>
    </Paper>
  );
};
