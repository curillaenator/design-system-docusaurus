import { HTMLAttributes } from 'react';

import { GeneratedSpinnerProps } from './tokenInterfaces';

export type SpinnerSizes = NonNullable<GeneratedSpinnerProps['size']>;
export type SpinnerAppearances = NonNullable<GeneratedSpinnerProps['appearance']>;

export interface SpinnerProps extends GeneratedSpinnerProps, HTMLAttributes<HTMLDivElement> {
  dataTestId?: string;
  colorMode?: 'light' | 'dark' | 'color';
}
