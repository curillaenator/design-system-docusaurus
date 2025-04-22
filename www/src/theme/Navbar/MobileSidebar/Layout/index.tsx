import React, { useCallback } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import cn from 'classnames';
import { useDocsSidebar, useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useLocation } from '@docusaurus/router';
import { ThemeClassNames, useColorMode } from '@docusaurus/theme-common';
import DocSidebarItems from '@theme/DocSidebarItems';
import type { Props } from '@theme/Navbar/MobileSidebar/Layout';

import styles from './styles.module.scss';

export const MobileSidebarMenu = () => {
  const sidebar = useDocsSidebar();
  const { pathname } = useLocation();
  const { toggle } = useNavbarMobileSidebar();

  const onItemClick = useCallback(
    (...args) => {
      const level = args[1] as number;

      if (level > 1) {
        toggle();
      }
    },
    [toggle],
  );

  return (
    <ul className={cn(ThemeClassNames.docs.docSidebarMenu, 'menu__list')}>
      <DocSidebarItems items={sidebar.items} activePath={pathname} level={1} onItemClick={onItemClick} />
    </ul>
  );
};

export default function NavbarMobileSidebarLayout(props: Props): JSX.Element {
  const { header } = props;

  const { siteConfig } = useDocusaurusContext();
  const { colorMode } = useColorMode();
  const { pathname } = useLocation();

  const docsPathRe = new RegExp(`${siteConfig.baseUrl}docs/`);
  const toolsPathRe = new RegExp(`${siteConfig.baseUrl}tools/`);

  const isDocsPage = docsPathRe.test(pathname) && !toolsPathRe.test(pathname);

  return (
    <div className={cn('navbar-sidebar', styles.mobileSidebar)}>
      {header}

      <div
        className={cn('navbar-sidebar__items', {
          'navbar-sidebar__items--show-secondary': false,
        })}
      >
        <div className={cn('navbar-sidebar__item menu', styles.items, styles[`scrollbar-${colorMode}`])}>
          {isDocsPage && <BrowserOnly>{() => <MobileSidebarMenu />}</BrowserOnly>}
        </div>
      </div>
    </div>
  );
}
