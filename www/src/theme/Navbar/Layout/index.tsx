import React, { useState, useEffect, useCallback, type ComponentProps } from 'react';
import clsx from 'clsx';
import { useThemeConfig, useColorMode } from '@docusaurus/theme-common';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useHideableNavbar, useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';
import { translate } from '@docusaurus/Translate';
import NavbarMobileSidebar from '@theme/Navbar/MobileSidebar';
import type { Props } from '@theme/Navbar/Layout';

import styles from './styles.module.scss';

function NavbarBackdrop(props: ComponentProps<'div'>) {
  const { colorMode } = useColorMode();

  return (
    <div
      role='presentation'
      {...props}
      className={clsx('navbar-sidebar__backdrop', styles[`backdrop-${colorMode}`], props.className)}
    />
  );
}

export default function NavbarLayout({ children }: Props): JSX.Element {
  const {
    navbar: { hideOnScroll, style },
  } = useThemeConfig();

  const mobileSidebar = useNavbarMobileSidebar();
  const { navbarRef, isNavbarVisible } = useHideableNavbar(hideOnScroll);

  const { siteConfig } = useDocusaurusContext();
  const { pathname } = useLocation();

  const isRootPage = pathname === siteConfig.baseUrl;

  const docsPageRe = new RegExp(`${siteConfig.baseUrl}docs`);
  const isDocsPage = docsPageRe.test(pathname);

  const [isHeaderFilled, setIsHeaderFilled] = useState<boolean>();

  const scrollWatcher = useCallback(() => {
    if (isHeaderFilled && window.scrollY > 0) return;
    setIsHeaderFilled(window.scrollY > 0);
  }, [isHeaderFilled]);

  useEffect(() => {
    if (!isDocsPage) return;

    window.addEventListener('scroll', scrollWatcher);
    return () => window.removeEventListener('scroll', scrollWatcher);
  }, [isDocsPage, scrollWatcher]);

  return (
    <nav
      ref={navbarRef}
      aria-label={translate({
        id: 'theme.NavBar.navAriaLabel',
        message: 'Main',
        description: 'The ARIA label for the main navigation',
      })}
      className={clsx(
        'navbar',
        'navbar--fixed-top',
        styles.navbar,
        hideOnScroll && [styles.navbarHideable, !isNavbarVisible && styles.navbarHidden],
        {
          'navbar--dark': style === 'dark',
          'navbar--primary': style === 'primary',
          'navbar-sidebar--show': mobileSidebar.shown,
          [styles.navbarRootPage]: isRootPage,
          [styles.navbarDocsPage]: isDocsPage,
          [styles.overlay]: isHeaderFilled,
        },
      )}
    >
      {children}

      <NavbarBackdrop onClick={mobileSidebar.toggle} />
      <NavbarMobileSidebar />
    </nav>
  );
}
