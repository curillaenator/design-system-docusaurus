import React, { FC, VFC, useRef, useState, useEffect, useContext } from 'react';
import { Button } from '@kit-xyz/button';
import cn from 'classnames';
import CaretLeftThinIcon from '@kit-xyz/icon/src/assets/solid/CaretLeftThinIcon';
import CaretRightThinIcon from '@kit-xyz/icon/src/assets/solid/CaretRightThinIcon';
import CrossIcon from '@kit-xyz/icon/src/assets/solid/CrossIcon';

import { MenuContext } from '../../context/MenuContext';

import styles from './header.module.scss';
import tracker from '../../trackerTmpStyles/header.module.scss';

export interface MenuHeaderProps {
  logo: { normal: VFC; minified: VFC };
}

const MINIFIED_LOGO_DELEAY = 1000;

export const Header: FC<MenuHeaderProps> = (props) => {
  const { isOpen, screen, colorMode, toggleOpen } = useContext(MenuContext);
  const { logo } = props;
  const { normal: MaxLogo, minified: MinLogo } = logo;

  const [showMenuButton, setShowMenuButton] = useState<boolean>(true);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isMenuDrawer = screen === 'mobile' || screen === 'tablet';

  const isFullwidth = isOpen || isMenuDrawer;

  useEffect(() => {
    if (isMenuDrawer) return;

    if (isOpen === false) {
      if (timer.current) clearTimeout(timer.current);
      setShowMenuButton(true);
      timer.current = setTimeout(() => setShowMenuButton(false), MINIFIED_LOGO_DELEAY);
    }
  }, [isOpen, isMenuDrawer]);

  return (
    <header id='layout-menu-logotype-section' className={styles.container}>
      {isFullwidth ? (
        <>
          <MaxLogo />

          <Button
            size='xs'
            onClick={toggleOpen}
            appearance='tertiary-solid'
            colorMode={colorMode}
            IconLeft={isMenuDrawer ? CrossIcon : CaretLeftThinIcon}
            className={tracker.button}
          />
        </>
      ) : (
        <div
          className={styles.minified}
          onMouseEnter={() => {
            if (isMenuDrawer) return;
            if (timer.current) clearTimeout(timer.current);
            setShowMenuButton(true);
          }}
          onMouseLeave={() => {
            if (isMenuDrawer) return;
            if (timer.current) clearTimeout(timer.current);
            timer.current = setTimeout(() => setShowMenuButton(false), MINIFIED_LOGO_DELEAY);
          }}
        >
          <div
            className={cn(styles.minLogo, {
              [styles.minLogo_visible]: !showMenuButton,
            })}
          >
            {!!MinLogo && <MinLogo />}
          </div>

          <Button
            size='xs'
            onClick={toggleOpen}
            appearance='tertiary-solid'
            colorMode={colorMode}
            IconLeft={isMenuDrawer ? CrossIcon : CaretRightThinIcon}
            className={cn(styles.minButton, tracker.button, {
              [styles.minButton_visible]: showMenuButton,
            })}
          />
        </div>
      )}
    </header>
  );
};
