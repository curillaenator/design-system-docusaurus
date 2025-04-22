import type { CSSProperties } from 'react';
import type { InputProps as InputComponentProps } from '@kit-base/input';
import { IconComponent } from '@kit-xyz/icon';

import { GeneratedInputProps } from '../../tokenInterfaces';

import { MetaProps } from './components/interfaces';
export { type BaseInputProps } from '@kit-base/input';

export type InputSize = NonNullable<GeneratedInputProps['size']>;
export type InputState = NonNullable<GeneratedInputProps['state']>;
export type InputShape = NonNullable<GeneratedInputProps['shape']>;

type OmitedBaseInputProps = Omit<
  InputComponentProps,
  | 'status'
  | 'upperNode'
  | 'lowerNode'
  | 'nodeRight'
  | 'nodeLeft'
  | 'actionRight'
  | 'actionLeft'
  | 'PlaceholderComponent'
>;

export interface InputProps extends GeneratedInputProps, OmitedBaseInputProps {
  label?: string;
  IconLeft?: IconComponent;
  IconRight?: IconComponent;
  startMetaText?: MetaProps['startMetaText'];
  endMetaText?: MetaProps['endMetaText'];
  clearable?: boolean;
  onClearInput?: () => void;
  colorMode?: 'light' | 'dark' | 'color';
  skeleton?: CSSProperties['width'];
}


