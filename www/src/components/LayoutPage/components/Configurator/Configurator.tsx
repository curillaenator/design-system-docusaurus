import React, { FC } from 'react';
import cn from 'classnames';
import { MasonryGrid } from '@kit-xyz/grid';

import { PageItem } from './components/PageItem';
import { LeftMenuItem } from './components/LeftMenuItem';
import { RightSidebarItem } from './components/RightSidebarItem';
import { ModalItem } from './components/ModalItem';
import { HeaderItem } from './components/HeaderItem';
import { FooterItem } from './components/FooterItem';
import { SceneItem } from './components/SceneItem';
import styles from './configurator.module.scss';

const GAPS: Record<ConfiguratorProps['contentPaddings'], number> = {
  large: 64,
  medium: 32,
  small: 16,
};

interface ConfiguratorProps {
  contentPaddings?: 'large' | 'medium' | 'small';
}

export const Configurator: FC<ConfiguratorProps> = (props) => {
  const { contentPaddings } = props;

  return (
    <div className={cn(styles.configurator, styles[`configurator_${contentPaddings}`])}>
      <MasonryGrid
        id='configurator'
        gap={GAPS[contentPaddings]}
        items={[PageItem, LeftMenuItem, HeaderItem, RightSidebarItem, ModalItem, FooterItem, SceneItem]}
      />
    </div>
  );
};
