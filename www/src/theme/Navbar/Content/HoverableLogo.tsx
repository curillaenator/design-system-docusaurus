import React, { FC } from 'react';
import NavbarLogo from '@theme/Navbar/Logo';
import { useColorMode } from '@docusaurus/theme-common';
import { Button } from '@kit-xyz/button';
import MenuIcon from '@kit-xyz/icon/src/assets/solid/MenuIcon';

import styles from './hoverablelogo.module.scss';

interface HoverableLogoProps {
  isRootPage?: boolean;
}

export const HoverableLogo: FC<HoverableLogoProps> = ({ isRootPage }) => {
  const { colorMode } = useColorMode();

  if (isRootPage) return <NavbarLogo />;

  return (
    <div className={styles.hoverableLogo}>
      <NavbarLogo />

      <Button
        size='xs'
        // appearance='tertiary-solid'
        appearance='primary-transparent'
        IconLeft={MenuIcon}
        colorMode={colorMode}
        // @ts-ignore
        onClick={() => document.querySelector('#sidebar-expand-button').click()}
        className={styles.hidableButton}
      />
    </div>
  );
};
