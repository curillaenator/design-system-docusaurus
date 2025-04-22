import React, { useState, useCallback, useRef, useEffect, useContext, Dispatch, SetStateAction } from 'react';
import type { Swiper as SwiperType } from 'swiper';

import { MainPageContext } from '../context';
import { useIntersection } from '../hooks/useIntersection';
import { Carousel, Controls } from '../components/Carousel';

import { CLIENTS_SCHEMA } from './clients.schema';
import styles from './clients.module.scss';

const calcSlidesPerView = (w: number, spv: number, dispatch: Dispatch<SetStateAction<number>>) => {
  if (w >= 1440 && spv !== 3) return dispatch(3);
  if (w >= 997 && w < 1440 && spv !== 2) return dispatch(2);
  if (w < 997 && spv !== 1) return dispatch(1);
};

export const Clients = () => {
  const { ref } = useIntersection();
  const { width } = useContext(MainPageContext);

  const swiperRef = useRef<SwiperType>(null);
  const handleSwiper = useCallback((instance: SwiperType) => {
    swiperRef.current = instance;
  }, []);

  const [selected, setSelected] = useState<number>(0);
  const handleCurrent = useCallback((cur: number) => setSelected(cur), []);

  const [slidesPerView, setSlidesPerView] = useState<number>(4);

  useEffect(() => {
    calcSlidesPerView(width, slidesPerView, setSlidesPerView);
  }, [width]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section className={styles.section} id='clients-section' ref={ref}>
      <h2>Клиенты и пользователи</h2>

      <Carousel
        items={CLIENTS_SCHEMA}
        slidesPerView={slidesPerView}
        spaceBetween={64}
        setSwiper={handleSwiper}
        setActive={handleCurrent}
        Slide={(props) => (
          <div className={styles.client}>
            <img src={props.logoSrc} alt={props.title} />
          </div>
        )}
      />

      <Controls
        current={selected}
        slidesPerView={slidesPerView}
        length={CLIENTS_SCHEMA.length}
        slidePrev={() => swiperRef.current.slidePrev()}
        slideNext={() => swiperRef.current.slideNext()}
      />
    </section>
  );
};
