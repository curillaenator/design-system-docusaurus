import type { HTMLAttributes } from 'react';

export interface ShapeProps extends HTMLAttributes<HTMLDivElement> {
  dataTestId?: string;
  borderRadius?: number;
  fixedHeight?: number;
  className?: string;
  isGradient?: boolean;
  gradientDirection?: 'right' | 'left' | 'bottom' | 'top';
  stroke?: number;
  defferedRender?: boolean;

  // tlcr = top left corner radius и тд.
  // tlcr?: number;
  // trcr?: number;
  // brcr?: number;
  // blcr?: number;
}

export type CornerProps = ShapeProps;
