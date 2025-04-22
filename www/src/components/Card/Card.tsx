import React, { FC } from 'react';
import cn from 'classnames';
import { useViewportContext } from '@site/src/components/DocViewport';

import { CardProps } from './interfaces';
import styles from './card.module.scss';

export const Card: FC<CardProps> = (props) => {
  const { title, subtitleGenerator, colorMode: extarnalColorMode, children } = props;

  const { colorMode: viewportColorMode } = useViewportContext();
  const colorMode = extarnalColorMode || viewportColorMode;
  const subtitles = subtitleGenerator ? subtitleGenerator({ colorMode }) : props.subtitles || [];

  return (
    <div className={cn(styles.card, styles[colorMode])}>
      {children}

      {!!title && (
        <span
          className={cn(styles.title, {
            [styles.title_mb]: !!subtitles.length,
          })}
        >
          {title}
        </span>
      )}

      {!!subtitles.length && (
        <div className={styles.values}>
          {subtitles.map((subtitle) => (
            <span key={subtitle}>{subtitle}</span>
          ))}
        </div>
      )}
    </div>
  );
};
