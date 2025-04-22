/* eslint-disable react/no-array-index-key */

import React, { memo } from 'react';
import { DocSidebarItemsExpandedStateProvider } from '@docusaurus/theme-common/internal';
import DocSidebarItem from '@theme/DocSidebarItem';
import type { Props } from '@theme/DocSidebarItems';

import styles from './styles.module.scss';

// TODO this item should probably not receive the "activePath" props
// TODO this triggers whole sidebar re-renders on navigation
function DocSidebarItems(props: Props): JSX.Element {
  const { items, level, ...rest } = props;

  return (
    <DocSidebarItemsExpandedStateProvider>
      {level > 1 ? (
        <div className={styles.wrapper}>
          {items.map((item, index) => (
            <DocSidebarItem key={index} item={item} index={index} level={level} {...rest} />
          ))}
        </div>
      ) : (
        <>
          {items.map((item, index) => (
            <DocSidebarItem key={index} item={item} index={index} level={level} {...rest} />
          ))}
        </>
      )}

      {/* {items.map((item, index) => (
        <DocSidebarItem key={index} item={item} index={index} level={level} {...rest} />
      ))} */}
    </DocSidebarItemsExpandedStateProvider>
  );
}

// Optimize sidebar at each "level"
export default memo(DocSidebarItems);
