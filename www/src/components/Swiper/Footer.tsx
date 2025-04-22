import React, { FC, ReactNode } from 'react';
import { useSwiper } from 'swiper/react';
import { Button } from '@kit-xyz/button';
import { useViewportContext } from '@site/src/components/DocViewport';
import ArrowLeftIcon from '@kit-xyz/icon/src/assets/solid/ArrowLeftIcon';
import ArrowRightIcon from '@kit-xyz/icon/src/assets/solid/ArrowRightIcon';

import styles from './swiper.module.scss';

interface FooterProps {
  current?: number;
  slides?: ReactNode[];
}

export const Footer: FC<FooterProps> = (props) => {
  const { current = 1, slides = [] } = props;

  const { colorMode } = useViewportContext();
  const swiper = useSwiper();

  return (
    <div className={styles.footer}>
      <div className={styles.navigation}>
        <Button
          size='xs'
          appearance='primary-transparent'
          colorMode={colorMode}
          onClick={() => swiper.slidePrev()}
          disabled={current < 2}
          IconLeft={ArrowLeftIcon}
        />
        <Button
          size='xs'
          appearance='primary-transparent'
          colorMode={colorMode}
          onClick={() => swiper.slideNext()}
          disabled={current >= slides.length}
          IconRight={ArrowRightIcon}
        />
      </div>

      <span className={styles.counter}>
        <span className={styles.current}>{current}</span> / {slides.length}
      </span>
    </div>
  );
};
