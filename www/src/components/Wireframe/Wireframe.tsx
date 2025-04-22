import React, { FC } from 'react';
import { useViewportContext } from '@site/src/components/DocViewport';

import styles from './wireframe.module.scss';

interface WireframeProps {
  src: {
    light: string;
    dark: string;
    color: string;
  };
}

export const Wireframe: FC<WireframeProps> = (props) => {
  const { colorMode } = useViewportContext();

  return (
    <div className={styles.wireframe}>
      <img src={props.src[colorMode]} alt='Wireframe' />
    </div>
  );
};
