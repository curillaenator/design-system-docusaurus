import React from 'react';
import cn from 'classnames';
import { translate } from '@docusaurus/Translate';
import { useThemeConfig } from '@docusaurus/theme-common';
import Link from '@docusaurus/Link';
import type { Props } from '@theme/Heading';

import styles from './styles.module.scss';

export default function Heading({ as: As, id, ...props }: Props): JSX.Element {
  const {
    navbar: { hideOnScroll },
  } = useThemeConfig();
  // H1 headings do not need an id because they don't appear in the TOC.
  if (As === 'h1' || !id) {
    return <As {...props} id={undefined} className={styles.invisible} />;
  }

  const anchorTitle = translate(
    {
      id: 'theme.common.headingLinkTitle',
      message: 'Direct link to {heading}',
      description: 'Title for link to heading',
    },
    {
      heading: typeof props.children === 'string' ? props.children : id,
    },
  );

  return (
    <As
      {...props}
      className={cn(
        'anchor',
        styles[As],
        props.className,
        hideOnScroll ? styles.anchorWithHideOnScrollNavbar : styles.anchorWithStickyNavbar,
      )}
      id={id}
    >
      {props.children}

      <Link className='hash-link' to={`#${id}`} aria-label={anchorTitle} title={anchorTitle}>
        &#8203;
      </Link>
    </As>
  );
}
