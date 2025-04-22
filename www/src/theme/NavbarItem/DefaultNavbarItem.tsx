/* eslint-disable @typescript-eslint/ban-ts-comment, @typescript-eslint/no-unused-vars, no-unused-vars */

import React from 'react';
import cn from 'classnames';
import clsx from 'clsx';
import NavbarNavLink from '@theme/NavbarItem/NavbarNavLink';
import type { DesktopOrMobileNavBarItemProps, Props } from '@theme/NavbarItem/DefaultNavbarItem';

import styles from './styles/navbarItem.module.scss';

function DefaultNavbarItemDesktop(props: DesktopOrMobileNavBarItemProps) {
  const { className, isDropdownItem = false, ...rest } = props;

  const dropdownClassName = cn('dropdown__link', styles.noShrink);
  const defaultClassName = cn('navbar__item navbar__link', styles.navbarItem, styles.noShrink);

  const element = (
    <NavbarNavLink
      className={cn(className, {
        [dropdownClassName]: isDropdownItem,
        [defaultClassName]: !isDropdownItem,
      })}
      isDropdownLink={isDropdownItem}
      {...rest}
    />
  );

  if (isDropdownItem) {
    return <li>{element}</li>;
  }

  return element;
}

function DefaultNavbarItemMobile({ className, isDropdownItem, ...props }: DesktopOrMobileNavBarItemProps) {
  return (
    <li className='menu__list-item'>
      <NavbarNavLink className={clsx('menu__link', className)} {...props} />
    </li>
  );
}

export default function DefaultNavbarItem(props: Props): JSX.Element {
  const {
    mobile = false,
    position, // Need to destructure position from props so that it doesn't get passed on.
    ...rest
  } = props;

  const Comp = mobile ? DefaultNavbarItemMobile : DefaultNavbarItemDesktop;
  return (
    <Comp
      {...rest}
      activeClassName={props.activeClassName ?? (mobile ? 'menu__link--active' : 'navbar__link--active')}
    />
  );
}
