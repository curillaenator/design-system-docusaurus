import React from 'react';
import cn from 'classnames';
import { translate } from '@docusaurus/Translate';
import { ThemeClassNames, useColorMode } from '@docusaurus/theme-common';
import { useBackToTopButton } from '@docusaurus/theme-common/internal';
import { Button } from '@kit-xyz/button';
import {} from '@kit-xyz/icon/src/assets/solid/CaretUpThinIcon';

import styles from './styles.module.scss';

export default function BackToTopButton(): JSX.Element {
  const { shown, scrollToTop } = useBackToTopButton({ threshold: 500 });
  const { colorMode } = useColorMode();

  return (
    <Button
      appearance='primary-transparent'
      colorMode={colorMode}
      onClick={scrollToTop}
      aria-label={translate({
        id: 'theme.BackToTopButton.buttonAriaLabel',
        message: 'Scroll back to top',
        description: 'The ARIA label for the back to top button',
      })}
      className={cn(
        'clean-btn',
        ThemeClassNames.common.backToTopButton,
        styles.backToTopButton,
        shown && styles.backToTopButtonShow,
      )}
      IconRight={() => (
        <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M15.998 6L15.998 26' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
          <path
            d='M23.998 14L15.998 6L7.99805 14'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      )}
    >
      Наверх
    </Button>
  );
}
