import React from 'react';
import { IconStore } from '@kit-xyz/icon/src/store/index';

import { useViewportContext } from '../../../../../src/components/DocViewport';
import styles from '../../styles.module.scss';

const icons = Object.keys(IconStore.duotone);

export const DuotoneIcons = () => {
  const { colorMode } = useViewportContext();

  return (
    <div className={styles.iconSets}>
      {icons.map((key) => {
        const Icon = IconStore.duotone[key];
        return <Icon key={key} colorMode={colorMode} color='primary' />;
      })}
    </div>
  );
};
