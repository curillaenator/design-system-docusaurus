import React, { useState, useCallback, useRef, useEffect, useContext, Dispatch, SetStateAction } from 'react';
import Link from '@docusaurus/Link';
import { useColorMode } from '@docusaurus/theme-common';
import cn from 'classnames';
import { Button } from '@kit-xyz/button';
import { Paper } from '@kit-xyz/paper';
import type { Swiper as SwiperType } from 'swiper';

import { Carousel, Controls } from '../components';
import { useIntersection } from '../hooks/useIntersection';
import { MainPageContext } from '../context';

import { PRODUCTS_SCHEMA, IMAGES, type ProductProps } from './products.schema';
import styles from './products.module.scss';

const calcSlidesPerView = (w: number, spv: number, dispatch: Dispatch<SetStateAction<number>>) => {
  if (w >= 1920 && spv !== 4) return dispatch(4);
  if (w >= 1440 && w < 1920 && spv !== 3) return dispatch(3);
  if (w >= 768 && w < 1440 && spv !== 2) return dispatch(2);
  if (w < 767 && spv !== 1) return dispatch(1);
};

const Product = (props: ProductProps) => {
  const { to, id, title, description, buttons, appearance = 'primary' } = props;
  const { smoothed, cardsBorderRadius } = useContext(MainPageContext);
  const { colorMode } = useColorMode();

  return (
    <Paper
      // @ts-expect-error docu Link types differs from react-router-dom, but works
      component={Link}
      borderRadius={cardsBorderRadius}
      borderWidth='m'
      withBorder
      fullwidth
      padding='xl'
      to={to}
      smoothedCorners={smoothed}
      colorMode={colorMode}
      className={cn(styles.product, styles[appearance], {
        [styles.product_interactive]: !!to,
      })}
    >
      {IMAGES[id]}

      <h3>{title}</h3>

      <p>{description}</p>

      {!!buttons?.length && (
        <div className={styles.buttons}>
          {buttons.map((button, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Button key={`${button.children}-${index}`} {...button} size='xs' />
          ))}
        </div>
      )}
    </Paper>
  );
};

export const Products = () => {
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
    <section className={styles.section} id='products-tech-section' ref={ref}>
      <h2>Технологические продукты</h2>

      <Carousel
        items={PRODUCTS_SCHEMA}
        slidesPerView={slidesPerView}
        Slide={Product}
        setSwiper={handleSwiper}
        setActive={handleCurrent}
      />

      <Controls
        current={selected}
        slidesPerView={slidesPerView}
        length={PRODUCTS_SCHEMA.length}
        slidePrev={() => swiperRef.current.slidePrev()}
        slideNext={() => swiperRef.current.slideNext()}
      />
    </section>
  );
};
