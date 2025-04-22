import React, { FC } from 'react';
import { BaseTabs } from '@kit-base/tabs';

import { useTabs } from './hooks/useTabs';
import { ItemNode } from './components/ItemNode';
import { DEFAULT_TEST_ID } from './constants';
import type { TabsProps } from './interfaces';
import styles from './tabs.module.scss';

export const Tabs: FC<TabsProps> = (props) => {
  const { size } = props;
  const {
    smoothAnimation,
    togglerW,
    togglerPosX,
    colorMode,
    collectEachTabW,
    className,
    togglerAppearance = 'primary-solid',
    ...tabsProps
  } = useTabs(props);

  return (
    <div className={className}>
      <BaseTabs
        {...tabsProps}
        dataTestId={props.dataTestId || DEFAULT_TEST_ID}
        itemNode={(itemProps) => (
          <ItemNode
            {...itemProps}
            appearance={togglerAppearance}
            colorMode={colorMode}
            collectEachTabW={collectEachTabW}
            smoothAnimation={smoothAnimation}
            size={size}
          />
        )}
      />

      {smoothAnimation && (
        <div
          className={styles.toggler}
          style={{
            width: togglerW,
            transform: `translateX(${togglerPosX}px)`,
          }}
        />
      )}
    </div>
  );
};
