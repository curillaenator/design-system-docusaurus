import React, { FC } from 'react';

import media from '../assets/cardMedia.png';

import styles from './blur.module.scss';

interface BlurProps {
  backgroundImage?: string;
  blur?: string;
}

export const Blur: FC<BlurProps> = (props) => {
  const { backgroundImage = media, blur = '0px' } = props;

  return (
    <div className={styles.opacity}>
      <img className={styles.media} src={backgroundImage} alt='blur' />
      <div className={styles.filter} style={{ backdropFilter: `blur(${blur})` }} />
    </div>
  );
};
