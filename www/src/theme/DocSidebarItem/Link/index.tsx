import React from 'react';
import cn from 'classnames';
import { ThemeClassNames } from '@docusaurus/theme-common';
import { isActiveSidebarItem } from '@docusaurus/theme-common/internal';
import Link from '@docusaurus/Link';
import isInternalUrl from '@docusaurus/isInternalUrl';
import IconExternalLink from '@theme/Icon/ExternalLink';
import type { Props } from '@theme/DocSidebarItem/Link';

import styles from './styles.module.scss';

export default function DocSidebarItemLink(props: Props): JSX.Element {
  const {
    item,
    onItemClick,
    activePath,
    level,
    // index,
    ...rest
  } = props;

  const { href, label, className, autoAddBaseUrl } = item;
  const isActive = isActiveSidebarItem(item, activePath);
  const isInternalLink = isInternalUrl(href);

  return (
    <li
      className={cn(
        ThemeClassNames.docs.docSidebarItemLink,
        ThemeClassNames.docs.docSidebarItemLinkLevel(level),
        className,
        {
          [styles.menu_listItem]: level === 1,
          'menu__list-item': level === 2,
        },
      )}
      key={label}
    >
      <Link
        {...rest}
        className={cn(
          'menu__link',

          !isInternalLink && styles.menuExternalLink,
          {
            [styles.menu_linkLv1]: level === 1,
            [styles.menu_linkLv1_active]: isActive && level === 1,

            [styles.menu_linkLv2]: level === 2,
            [styles.menu_linkLv2_active]: isActive && level === 2,
            // "menu__link--active": isActive,
          },
        )}
        autoAddBaseUrl={autoAddBaseUrl}
        aria-current={isActive ? 'page' : undefined}
        to={href}
        {...(isInternalLink && {
          // @ts-expect-error types mismatch
          onClick: onItemClick ? () => onItemClick(item, level) : undefined,
        })}
      >
        <span className={cn(styles.label, styles.fontControl)}>{label}</span>

        {!isInternalLink && <IconExternalLink />}
      </Link>
    </li>
  );
}
