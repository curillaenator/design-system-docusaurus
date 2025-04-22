/* eslint-disable react/no-array-index-key */
import React, { useCallback, useEffect, useState } from 'react';
import cn from 'classnames';
import { useThemeConfig, useColorMode } from '@docusaurus/theme-common';
import { useLocation } from '@docusaurus/router';
// import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
  splitNavbarItems,
  // useNavbarMobileSidebar,
} from '@docusaurus/theme-common/internal';
import NavbarItem, { type Props as NavbarItemConfig } from '@theme/NavbarItem';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import SearchBar from '@theme/SearchBar';
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';
// import NavbarLogo from '@theme/Navbar/Logo';
import NavbarSearch from '@theme/Navbar/Search';
import { Button } from '@kit-xyz/button';
import ListIcon from '@kit-xyz/icon/src/assets/solid/ListIcon';

import { HoverableLogo } from './HoverableLogo';
import styles from './styles.module.scss';

function setRootCssv(prop: string, value: string) {
  document.documentElement.style.setProperty(prop, value);
}

function useNavbarItems() {
  // TODO temporary casting until ThemeConfig type is improved
  return useThemeConfig().navbar.items as NavbarItemConfig[];
}

function NavbarItems({ items }: { items: NavbarItemConfig[] }): JSX.Element {
  return (
    <>
      {items.map((item, i) => (
        <NavbarItem {...item} key={i} />
      ))}
    </>
  );
}

export default function NavbarContent(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const { colorMode } = useColorMode();

  // const mobileSidebar = useNavbarMobileSidebar();
  const { pathname } = useLocation();

  const items = useNavbarItems();
  const [leftItems, rightItems] = splitNavbarItems(items);

  const [isNavbarOpened, setIsNavbarOpened] = useState<boolean>(false);

  const searchBarItem = items.find((item) => item.type === 'search');

  const isRootPage = pathname === siteConfig.baseUrl;
  const isCategoryPage = pathname.includes('docs/category');

  const toogleNavigationBar = () => {
    setIsNavbarOpened((currentOpen) => {
      setRootCssv('--right-sidebar-w', currentOpen ? '0px' : '384px');
      return !currentOpen;
    });
  };

  const addClassesToTocComponent = useCallback((isOpened: boolean) => {
    const tocContainer = document.getElementById('docusaurus-customized-toc');

    if (!tocContainer) return;

    if (isOpened) {
      tocContainer.classList.remove('closed');
      tocContainer.classList.add('opened');
    } else {
      tocContainer.classList.remove('opened');
      tocContainer.classList.add('closed');
    }
  }, []);

  useEffect(() => addClassesToTocComponent(isNavbarOpened));

  useEffect(() => {
    if (isRootPage) {
      setRootCssv('--right-sidebar-w', '0px');
      setIsNavbarOpened(false);
      addClassesToTocComponent(false);
    }
  }, [isRootPage, addClassesToTocComponent]);

  return (
    <div
      className={cn(styles.navBarLayout, {
        [styles.navBarLayout_rootPage]: isRootPage,
      })}
    >
      <div className={cn(styles.navBarleft)}>
        <HoverableLogo isRootPage={isRootPage} />

        <NavbarItems items={leftItems} />
      </div>

      <div className={cn(styles.navBarRight)}>
        {/* {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />} */}

        <NavbarItems items={rightItems} />

        {!searchBarItem && (
          <NavbarSearch>
            <SearchBar />
          </NavbarSearch>
        )}

        <NavbarColorModeToggle className={styles.colorModeToggle} />

        {!isCategoryPage && !isRootPage && (
          <Button
            size='xs'
            appearance='primary-transparent'
            IconLeft={ListIcon}
            colorMode={colorMode}
            active={isNavbarOpened}
            onClick={toogleNavigationBar}
            className={styles.toggleRightButton}
          />
        )}

        <NavbarMobileSidebarToggle />
      </div>
    </div>
  );
}
