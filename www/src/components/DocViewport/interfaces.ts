import { ReactNode } from 'react';
import { Props } from '@theme/CodeBlock';

export type ColorModes = 'light' | 'dark' | 'color';

export interface DocViewportProps {
  id?: string;
  modes?: ColorModes[];
  children: ReactNode;
  codeBlock?: ReactNode;
  language?: Props['language'];
}
