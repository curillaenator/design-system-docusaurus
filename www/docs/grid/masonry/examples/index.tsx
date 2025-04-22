import React, { type HTMLAttributes } from 'react';

import styles from './styles.module.scss';

interface ElementProps extends HTMLAttributes<HTMLDivElement> {
  id: string;
  minHeight?: number;
}

class HeightsController {
  private _minHeights: Record<string, number> = {};

  private _tile: number = 64;

  private _quantificator: number = 8;

  get minHeights() {
    return this._minHeights;
  }

  randomHeight(id: string) {
    if (!this._minHeights[id]) {
      this._minHeights[id] = (2 + Math.round(Math.random() * this._quantificator)) * this._tile;
    }
  }
}

const controller = new HeightsController();

const Element = ({ id, minHeight, ...rest }: ElementProps) => (
  <div {...rest} className={styles.masonryCard} style={{ minHeight }}>
    {id}
  </div>
);

export const ITEMS = [...new Array(16)].map((_, i) => () => {
  const id = `masonry-demo-card-${i}`;

  controller.randomHeight(id);

  return <Element id={id} minHeight={controller.minHeights[id]} />;
});
