import React from 'react';
import cn from 'classnames';
import { useColorMode } from '@docusaurus/theme-common';
import { useWindowSize } from '@kit-base/uikit-utils';

import { useDocTOC } from '../hooks/useDocTOC';

import styles from './tocs.module.scss';

// отображение мобильного и десктопного ТОС сделано не через стили, а через отслеживание ширины окна
// для корректной работы ТОК. Нужно обязательно чтобы в DOM был только один список навигации, а @media + display: none
// не решают этот вопрос

export const DesktopToc = () => {
  const { desktop } = useDocTOC();
  const { colorMode } = useColorMode();
  const { width } = useWindowSize();

  if (width < 1920) return null;

  return (
    <div id='docusaurus-customized-toc' className={cn('col', styles.desktopToc, styles[`scrollbar-${colorMode}`])}>
      {desktop}
    </div>
  );
};

export const MobileToc = () => {
  const { desktop } = useDocTOC();
  const { width } = useWindowSize();

  if (width >= 1920) return null;

  return <div className={styles.mobileToc}>{desktop}</div>;
};
