import React from 'react';
import cn from 'classnames';
import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';
import { useColorMode } from '@docusaurus/theme-common';
import { translate } from '@docusaurus/Translate';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import NavbarLogo from '@theme/Navbar/Logo';
import { Button } from '@kit-xyz/button';
import CrossIcon from '@kit-xyz/icon/src/assets/solid/CrossIcon';

import styles from './styles.module.scss';

export default function NavbarMobileSidebarHeader(): JSX.Element {
  const { toggle } = useNavbarMobileSidebar();
  const { colorMode } = useColorMode();

  return (
    <div className={cn('navbar-sidebar__brand', styles.mobileSidebarHeader)}>
      <NavbarLogo />

      <NavbarColorModeToggle />

      <Button
        size='xs'
        appearance='primary-transparent'
        colorMode={colorMode}
        type='button'
        aria-label={translate({
          id: 'theme.docs.sidebar.closeSidebarButtonAriaLabel',
          message: 'Close navigation bar',
          description: 'The ARIA label for close button of mobile sidebar',
        })}
        className='clean-btn navbar-sidebar__close'
        onClick={() => toggle()}
        IconRight={CrossIcon}
      />
    </div>
  );
}
