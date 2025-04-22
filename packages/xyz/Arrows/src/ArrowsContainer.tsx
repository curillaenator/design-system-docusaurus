import React, { FC } from 'react';
import { ArcherContainer } from 'react-archer';

import type { ArrowsContainerProps } from './interfaces';
import styles from './styles/container.module.scss';

export const ArrowsContainer: FC<ArrowsContainerProps> = (props) => {
  const { strokeColor = 'neutral', colorMode = 'light', strokeShade = '300', ...rest } = props;

  return (
    <ArcherContainer
      {...rest}
      className={styles[`_${strokeColor}-${strokeShade}_${colorMode}`]}
      strokeColor='var(--arrows-stroke-color)'
      lineStyle='curve'
    />
  );
};
