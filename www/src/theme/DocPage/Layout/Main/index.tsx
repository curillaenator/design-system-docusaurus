import React from 'react';
import clsx from 'clsx';
import { useDocsSidebar } from '@docusaurus/theme-common/internal';
import type { Props } from '@theme/DocPage/Layout/Main';

import styles from './styles.module.scss';

export default function DocPageLayoutMain({ hiddenSidebarContainer, children }: Props): JSX.Element {
  const sidebar = useDocsSidebar();

  return (
    <main
      className={clsx(styles.docMainContainer, (hiddenSidebarContainer || !sidebar) && styles.docMainContainerEnhanced)}
    >
      <div
        className={clsx(
          // "container padding-top--md padding-bottom--lg",
          styles.docWrapper,
          // styles.docItemWrapper,
          hiddenSidebarContainer && styles.docItemWrapperEnhanced,
        )}
      >
        {children}
      </div>
    </main>
  );
}
