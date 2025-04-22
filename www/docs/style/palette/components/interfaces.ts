import { CSSProperties } from 'react';

export interface MatrixColor {
  value: string;
  position: { x: number; y: number };
}

export interface ColorMatrixProps {
  colorMatrix: MatrixColor[];
  dotsPositions: string[];
  colorMode?: 'light' | 'dark' | 'color';
  tileHeight?: CSSProperties['height'];
  type?: 'matrix' | 'row';
}

export interface OpacitiesProps {
  color: CSSProperties['color'];
  smoothed?: boolean;
  blendMode: CSSProperties['mixBlendMode'];
}
