/* eslint-disable react/no-array-index-key */
import React, { FC } from 'react';
import cn from 'classnames';

import { VERSION } from '../../version';

import { useMasonrizeItems } from './hooks/useMasonrizeItems';
import { DEFAULT_TEST_ID } from './constants';
import type { MasonryGridProps } from './interfaces';
import styles from './masonry.module.scss';

export const MasonryGrid: FC<MasonryGridProps> = (props) => {
  const { id, dataTestId = DEFAULT_TEST_ID, colorMode = 'light' } = props;

  const { masonryRef, cols, masonryItems } = useMasonrizeItems(props);

  return (
    <div
      data-testid={dataTestId}
      data-analytics={DEFAULT_TEST_ID}
      data-version={VERSION}
      id={`${id}-masonry`}
      ref={masonryRef}
      className={cn(styles.masonryGrid, styles[`masonryGrid_${cols}`], styles[`masonryGrid_${colorMode}`], {
        [styles.masonryGrid_visible]: !!masonryItems.length,
      })}
    >
      {!!masonryItems.length &&
        masonryItems.map(
          (col, colI) =>
            !!col.length && (
              <div key={`${id}-masonry-column-${colI}`} className={styles.flexCol} data-testid={`${dataTestId}.Column`}>
                {col.map((Item, cellI) => (
                  <div key={`${id}-masonry-cell-${cellI}`} className={styles.cell} data-testid={`${dataTestId}.Cell`}>
                    <Item />
                  </div>
                ))}
              </div>
            ),
        )}
    </div>
  );
};
