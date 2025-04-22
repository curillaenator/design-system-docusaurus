import React, { FC } from 'react';
import cn from 'classnames';
import { useViewportContext } from '@site/src/components/DocViewport';

import media from '../assets/cardMedia.png';

import styles from './opacity.module.scss';

interface OpactityProps {
  opacity?: string;
}

export const Opacity: FC<OpactityProps> = (props) => {
  const { opacity } = props;
  const { colorMode } = useViewportContext();

  return (
    <div className={cn(styles.opacity, styles[colorMode], { [styles._bordered]: opacity === '0%' })}>
      <img src={media} alt='opacity' style={{ opacity }} />
    </div>
  );
};
