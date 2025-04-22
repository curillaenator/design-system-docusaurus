import type { CSSProperties } from 'react';
import type { RadioProps as BaseRadioProps } from '@kit-base/radio';

import type { GeneratedRadioProps } from './tokenInterfaces';

export type RadioSize = NonNullable<GeneratedRadioProps['size']>;
export type RadioState = NonNullable<GeneratedRadioProps['state']>;

type OmitedBaseProps = Omit<BaseRadioProps, 'isToggler'>;

export interface RadioProps extends GeneratedRadioProps, OmitedBaseProps {
  colorMode?: 'light' | 'dark' | 'color';
  skeleton?: CSSProperties['width'];
}
