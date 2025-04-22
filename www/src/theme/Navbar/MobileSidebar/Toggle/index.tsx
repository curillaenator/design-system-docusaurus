import React from 'react';
import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';
import { useColorMode } from '@docusaurus/theme-common';
import { translate } from '@docusaurus/Translate';
import { Button } from '@kit-xyz/button';
import MenuIcon from '@kit-xyz/icon/src/assets/solid/MenuIcon';

import styles from './styles.module.scss';

export default function MobileSidebarToggle(): JSX.Element {
  const { toggle, shown } = useNavbarMobileSidebar();
  const { colorMode } = useColorMode();

  return (
    <Button
      size='xs'
      appearance='primary-transparent'
      colorMode={colorMode}
      onClick={toggle}
      aria-label={translate({
        id: 'theme.docs.sidebar.toggleSidebarButtonAriaLabel',
        message: 'Toggle navigation bar',
        description: 'The ARIA label for hamburger menu button of mobile navigation',
      })}
      aria-expanded={shown}
      // className='navbar__toggle clean-btn'
      className={styles.mobileSidebarToggle}
      type='button'
      IconRight={MenuIcon}
    >
      Меню
    </Button>
  );
}
