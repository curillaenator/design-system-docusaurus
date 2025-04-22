import React, { FC } from 'react';
// import { useColorMode } from '@docusaurus/theme-common';
import NavbarLogo from '@theme/Navbar/Logo';
import { Button } from '@kit-xyz/button';
import CaretLeftThinIcon from '@kit-xyz/icon/src/assets/solid/CaretLeftThinIcon';
// import CaretRightThinIcon from '@kit-xyz/icon/src/assets/solid/CaretRightThinIcon';

import styles from './styles.module.scss';

interface DesktopSidebarHeaderProps {
  onCollapse: () => void;
}

const DesktopSidebarHeader: FC<DesktopSidebarHeaderProps> = (props) => {
  const { onCollapse } = props;
  // const { colorMode } = useColorMode();

  return (
    <div className={styles.header}>
      <NavbarLogo />

      <Button
        size='xs'
        appearance='tertiary-solid'
        colorMode='dark'
        IconLeft={CaretLeftThinIcon}
        onClick={onCollapse}
      />
    </div>
  );
};

export default DesktopSidebarHeader;
