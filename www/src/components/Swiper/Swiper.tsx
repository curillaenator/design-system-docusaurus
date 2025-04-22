/* eslint-disable react/no-array-index-key */

import React, { FC, ReactNode, useState } from 'react';
import cn from 'classnames';
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react';

import { Footer } from './Footer';
import styles from './swiper.module.scss';
import 'swiper/css';

interface SwiperComponentProps extends SwiperProps {
  slides?: ReactNode[];
}

const SwiperComponent: FC<SwiperComponentProps> = (props) => {
  const { spaceBetween = 64, slidesPerView = 1, slides = [], className, ...rest } = props;
  const [current, setCurrent] = useState<number>(1);

  return (
    <div className={styles.container}>
      <Swiper
        {...rest}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        scrollbar={{ draggable: true }}
        className={cn(styles.swiper, className)}
        onSlideChange={(swiper) => setCurrent(swiper.activeIndex + 1)}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={`doc-slider-slide-${i}`}>{slide}</SwiperSlide>
        ))}

        <Footer current={current} slides={slides} />
      </Swiper>
    </div>
  );
};

export default React.memo(SwiperComponent);
