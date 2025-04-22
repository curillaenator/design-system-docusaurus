import React, { FC } from 'react';
import cn from 'classnames';
import { useViewportContext } from '@site/src/components/DocViewport';

import media from '../assets/media.png';

import styles from './content.module.scss';
import overlayStyles from './overlay.module.scss';

interface OpactityProps {
  vertical?: boolean;
}

export const Content: FC<OpactityProps> = (props) => {
  const { vertical } = props;
  const { colorMode } = useViewportContext();

  return (
    <div className={styles.content}>
      <img className={styles.media} src={media} alt='overlay' />

      <div
        className={cn(overlayStyles.overlay, overlayStyles[colorMode], {
          [overlayStyles._vertical]: vertical,
          [overlayStyles._horizontal]: !vertical,
        })}
      />
    </div>
  );
};
