import React, { FC } from 'react';
import cn from 'classnames';
import { Paper } from '@kit-xyz/paper';
import { useViewportContext } from '@site/src/components/DocViewport';

import styles from './colormatrix.module.scss';
import { ColorMatrixProps } from './interfaces';

export const ColorMatrix: FC<ColorMatrixProps> = (props) => {
  const { colorMatrix, dotsPositions, type = 'row' } = props;
  const { colorMode: viewportColorMode } = useViewportContext();

  return (
    <div className={cn(styles.container, styles[viewportColorMode], styles[`container_${type}`])}>
      {colorMatrix.map((color) => {
        const { x, y } = color.position;

        return (
          <Paper
            key={`${color.value}-${x}-${y}`}
            padding='none'
            borderRadius='s'
            fullwidth
            // smoothedCorners
            className={cn(styles.tile, styles[`tile_${type}`])}
            style={{ backgroundColor: color.value }}
          >
            <div
              className={cn(styles.dot, styles[`dot_${type}`], {
                [styles.dot_visible]: dotsPositions.includes(`${x}_${y}`),
              })}
            />
          </Paper>
        );
      })}
    </div>
  );
};
