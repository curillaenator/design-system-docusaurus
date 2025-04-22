/* eslint-disable react/no-array-index-key */

import React, { FC } from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { Button } from '@kit-xyz/button';

import styles from './styles.module.scss';
import 'swiper/css';

interface ControlsProps {
  current: number;
  length: number;
  slidesPerView?: number;
  slidePrev: () => void;
  slideNext: () => void;
}

export const Controls: FC<ControlsProps> = (props) => {
  const { current, length, slidePrev, slideNext, slidesPerView = 2 } = props;
  const { colorMode } = useColorMode();

  return (
    <div className={styles.controls}>
      <div className={styles.buttons}>
        <Button
          size='xs'
          appearance='primary-transparent'
          colorMode={colorMode}
          onClick={slidePrev}
          disabled={current < 1}
          IconLeft={() => (
            <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M14 24L6 16L14 8'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path d='M26 16L6 16' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
            </svg>
          )}
        />

        <Button
          size='xs'
          appearance='primary-transparent'
          colorMode={colorMode}
          onClick={slideNext}
          disabled={current === length - slidesPerView}
          IconRight={() => (
            <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M18 24L26 16L18 8'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path d='M26 16L6 16' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
            </svg>
          )}
        />
      </div>

      <div className={styles.progress}>
        <div className={styles.bar} style={{ width: `calc(100% * (${current + slidesPerView} / ${length}))` }} />
      </div>
    </div>
  );
};

type CarouselComponent = <Item extends { title: string }>(props: {
  items: Array<Item>;
  Slide: (props: Item) => JSX.Element;
  setActive: (index: number) => void;
  setSwiper: (instance: SwiperType) => void;
  spaceBetween?: number;
  slidesPerView?: number;
}) => JSX.Element;

export const Carousel: CarouselComponent = (props) => {
  const { items, Slide, setActive, setSwiper, spaceBetween = 32, slidesPerView = 2 } = props;

  return (
    <Swiper
      spaceBetween={spaceBetween}
      speed={200}
      slidesPerView={slidesPerView}
      scrollbar={{ draggable: true }}
      onSlideChange={(swiper) => setActive(swiper.activeIndex)}
      onSwiper={setSwiper}
      className={styles.swiper}
    >
      {items.map((slide, i) => (
        <SwiperSlide key={`cases-slider-${slide.title}-${i}`}>
          <Slide {...slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
