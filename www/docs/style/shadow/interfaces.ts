import { CSSProperties } from 'react';

export interface ShadowToken {
  color: string;
  x: string;
  y: string;
  blur: string;
  spread: string;
}

export interface ShadowValueProps {
  shadowName?: string;
  color?: string;
  size?: string;
  style?: CSSProperties;
}
