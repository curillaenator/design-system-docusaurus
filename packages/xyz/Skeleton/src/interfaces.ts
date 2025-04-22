import { CSSProperties } from 'react';

export interface SkeletonProps {
  dataTestId?: string;
  className?: string;
  style?: Partial<Pick<CSSProperties, 'width' | 'height' | 'borderRadius' | 'flexShrink'>>;
  colorMode?: 'light' | 'dark' | 'color';
}
