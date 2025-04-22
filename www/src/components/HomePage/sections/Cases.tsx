/* eslint-disable react/no-array-index-key */
import React, { useState, useCallback, useRef, useEffect, useContext, Dispatch, SetStateAction } from 'react';
import cn from 'classnames';
import Link from '@docusaurus/Link';
import { Badge } from '@kit-xyz/badge';
import { Paper } from '@kit-xyz/paper';
import { useColorMode } from '@docusaurus/theme-common';
import type { Swiper as SwiperType } from 'swiper';

import { MainPageContext } from '../context';
import { useIntersection } from '../hooks/useIntersection';
import { Carousel, Controls } from '../components';

import { CASES_SCHEMA, type CaseProps } from './cases.schema';
import styles from './cases.module.scss';

const calcSlidesPerView = (w: number, spv: number, dispatch: Dispatch<SetStateAction<number>>) => {
  if (w >= 997 && spv !== 2) return dispatch(2);
  if (w < 997 && spv !== 1) return dispatch(1);
};

const Slide = (props: CaseProps) => {
  const { to, img, title, description, badges } = props;
  const { smoothed, cardsBorderRadius } = useContext(MainPageContext);
  const { colorMode } = useColorMode();

  return (
    <Paper
      to={to}
      // @ts-expect-error docu Link types differs from react-router-dom, but works
      component={Link}
      borderRadius={cardsBorderRadius}
      borderWidth='m'
      padding='xl'
      withBorder
      smoothedCorners={smoothed}
      className={cn(styles.slide, {
        [styles.slide_interactive]: !!to,
      })}
    >
      <img src={img} alt={title} className={styles.slideCover} />

      {!!badges?.length && (
        <div className={styles.slideBadges}>
          {badges.map((badge, index) => (
            <Badge key={`${badge.children}-${index}`} {...badge} colorMode={colorMode} />
          ))}
        </div>
      )}

      <h3>{title}</h3>

      <p>{description}</p>
    </Paper>
  );
};

export const Cases = () => {
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
    <section className={styles.section} id='cases-section' ref={ref}>
      <h2>Кейсы</h2>

      <Carousel
        items={CASES_SCHEMA}
        slidesPerView={slidesPerView}
        Slide={Slide}
        setSwiper={handleSwiper}
        setActive={handleCurrent}
      />

      <Controls
        current={selected}
        slidesPerView={slidesPerView}
        length={CASES_SCHEMA.length}
        slidePrev={() => swiperRef.current.slidePrev()}
        slideNext={() => swiperRef.current.slideNext()}
      />
    </section>
  );
};
