import React, { useState } from 'react';
import clsx from 'clsx';
import { ThemeClassNames, useColorMode } from '@docusaurus/theme-common';
import { useAnnouncementBar, useScrollPosition } from '@docusaurus/theme-common/internal';
import { translate } from '@docusaurus/Translate';
import DocSidebarItems from '@theme/DocSidebarItems';
import type { Props } from '@theme/DocSidebar/Desktop/Content';

import styles from './styles.module.scss';

function useShowAnnouncementBar() {
  const { isActive } = useAnnouncementBar();
  const [showAnnouncementBar, setShowAnnouncementBar] = useState(isActive);

  useScrollPosition(
    ({ scrollY }) => {
      if (isActive) {
        setShowAnnouncementBar(scrollY === 0);
      }
    },
    [isActive],
  );
  return isActive && showAnnouncementBar;
}

export default function DocSidebarDesktopContent({ path, sidebar, className }: Props): JSX.Element {
  const showAnnouncementBar = useShowAnnouncementBar();
  const { colorMode } = useColorMode();

  return (
    <nav
      aria-label={translate({
        id: 'theme.docs.sidebar.navAriaLabel',
        message: 'Docs sidebar',
        description: 'The ARIA label for the sidebar navigation',
      })}
      className={clsx(
        'menu', // thin-scrollbar
        styles.menu,
        styles[`scrollbar-${colorMode}`],
        showAnnouncementBar && styles.menuWithAnnouncementBar,
        className,
      )}
    >
      <ul className={clsx(ThemeClassNames.docs.docSidebarMenu, 'menu__list')}>
        <DocSidebarItems items={sidebar} activePath={path} level={1} />
      </ul>
    </nav>
  );
}
