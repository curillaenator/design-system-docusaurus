import React, { FC } from 'react';

import { SubTitle } from '../SubTitle';

import styles from './figma-slide.module.scss';

interface FigmaSlideProps {
  title: string;
  src: string;
}

export const FigmaSlide: FC<FigmaSlideProps> = (props) => (
  <div className={styles.slide}>
    <SubTitle className={styles.title}>{props.title}</SubTitle>

    <div className={styles.content}>
      <img src={props.src} alt={props.title} />
    </div>
  </div>
);
