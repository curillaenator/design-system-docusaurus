import React, { FC } from 'react';
import cn from 'classnames';
import { ArcherElement } from 'react-archer';

import type { ArrowsCardProps } from './interfaces';
import styles from './styles/card.module.scss';

export const ArrowsCard: FC<ArrowsCardProps> = (props) => {
  const { id, children, anchors = [], devMode = false, fullWidth = true, ...rest } = props;

  return (
    <div
      {...rest}
      className={cn(styles.anchorContainer, {
        [styles.anchorContainer_devMode]: devMode,
        [styles.anchorContainer_fullWidth]: fullWidth,
      })}
    >
      {!!anchors?.length &&
        anchors.map(({ position, relations }) => {
          const asLine = !position.includes('edge') && !position.includes('middle');
          // набор абсолютно спозиционированных якорей для возможности соединять их линиями или стрелками
          return (
            <ArcherElement key={`${id}-${position}`} id={`${id}-${position}`} relations={relations}>
              <div
                className={cn(styles.anchor, styles[`anchor-${position}`], {
                  [styles.anchor_asLine]: asLine && !devMode,
                })}
              />
            </ArcherElement>
          );
        })}

      {children}
    </div>
  );
};
