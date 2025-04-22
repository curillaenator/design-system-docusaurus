import { ReactNode } from 'react';

export interface CardProps {
  id?: string;
  title?: string;
  subtitles?: string[];
  children?: ReactNode;
  colorMode?: 'light' | 'dark' | 'color';
  code?: string | ((colorMode?: 'light' | 'dark' | 'color') => string);
}
