import React from 'react';
import cn from 'classnames';
import { translate } from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import { Button } from '@kit-xyz/button';
import { useColorMode } from '@docusaurus/theme-common';
import type { Props } from '@theme/DocPaginator';
import ArrowLeftThinIcon from '@kit-xyz/icon/src/assets/solid/ArrowLeftThinIcon';
import ArrowRightThinIcon from '@kit-xyz/icon/src/assets/solid/ArrowRightThinIcon';

import styles from './styles.module.scss';

export default function DocPaginator(props: Props): JSX.Element {
  const { previous, next } = props;

  const { colorMode } = useColorMode();

  return (
    <nav
      className={cn('pagination-nav docusaurus-mt-lg', styles.paginator)}
      aria-label={translate({
        id: 'theme.docs.paginator.navAriaLabel',
        message: 'Docs pages navigation',
        description: 'The ARIA label for the docs pagination',
      })}
    >
      {previous && (
        <Button
          size='xs'
          // @ts-expect-error Link докузавра интрефейсом немного другой чем из react-router-dom.
          component={Link}
          to={previous.permalink}
          appearance='secondary-transparent'
          colorMode={colorMode}
          IconLeft={ArrowLeftThinIcon}
        >
          {previous.title}
        </Button>
      )}

      {next && (
        <Button
          size='xs'
          // @ts-expect-error Link докузавра интрефейсом немного другой чем из react-router-dom.
          component={Link}
          to={next.permalink}
          appearance='secondary-transparent'
          colorMode={colorMode}
          IconRight={ArrowRightThinIcon}
        >
          {next.title}
        </Button>
      )}
    </nav>
  );
}
