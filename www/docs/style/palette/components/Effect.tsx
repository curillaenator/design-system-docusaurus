import React, { FC } from 'react';
import cn from 'classnames';
import { useViewportContext } from '@site/src/components/DocViewport';

import settingsImg from '../assets/effectSettings.png';

import styles from './effect.module.scss';

const ROWS = [
  { title: 'effect-4', color: 'white-60', zIndex: 40 },
  { title: 'effect-3', color: 'white-80', zIndex: 30 },
  { title: 'effect-2', color: 'black-20', zIndex: 20 },
  { title: 'effect-1', color: 'black-40', zIndex: 10 },
  { title: 'palette/basic', color: 'accent', zIndex: 0 },
];

interface ContentRowProps {
  title: string;
  color: string;
  zIndex: number;
}

const ContentRow: FC<ContentRowProps> = (props) => {
  const { title, color, zIndex } = props;

  return (
    <div className={styles.row} style={{ zIndex }}>
      <div className={styles.tileWrapper}>
        <div className={cn(styles.tile, styles[`tile_${color}`])} />
      </div>

      <span className={styles.title}>{title}</span>
    </div>
  );
};

export const Effect: FC = () => {
  const { colorMode: viewportColorMode } = useViewportContext();

  return (
    <div className={cn(styles.container, styles[viewportColorMode])}>
      <div className={styles.content}>
        {ROWS.map((row) => (
          <ContentRow key={row.title} {...row} />
        ))}
      </div>

      <img src={settingsImg} alt='Пример настроек нескольких слоев эффекстов' />
    </div>
  );
};
