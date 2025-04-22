import type { CSSProperties } from 'react';
import type { BaseButtonProps } from '@kit-base/button';
import type { IconComponent } from '@kit-xyz/icon';

import { GeneratedButtonProps } from '../../tokenInterfaces';

export type ButtonAppearance = NonNullable<GeneratedButtonProps['appearance']>;
export type ButtonSize = NonNullable<GeneratedButtonProps['size']>;
export type ButtonShape = NonNullable<GeneratedButtonProps['shape']>;
export type ButtonState = NonNullable<GeneratedButtonProps['state']>;

type OmittedBaseButtonProps = Omit<BaseButtonProps, 'iconRight' | 'iconLeft' | 'elementRight'>;

export interface ButtonProps extends OmittedBaseButtonProps, GeneratedButtonProps {
  secondaryText?: string;
  colorMode?: 'light' | 'dark' | 'color';
  labelsFullwidth?: boolean;
  labelsReversed?: boolean;
  labelsJustify?: BaseButtonProps['justify'];
  skeleton?: CSSProperties['width'];
  withBorder?: boolean;
  withShadow?: boolean;
  notion?: boolean;
  IconLeft?: IconComponent;
  IconRight?: IconComponent;
  asReactRouter?: 'Link' | 'NavLink';
}
