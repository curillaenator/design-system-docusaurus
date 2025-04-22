import type { CSSProperties } from 'react';
import type { CheckboxBaseProps } from '@kit-base/checkbox';
import { IconComponent } from '@kit-xyz/icon';

import type { GeneratedCheckboxProps } from './tokenInterfaces';

export type CheckboxSizes = NonNullable<GeneratedCheckboxProps['size']>;
export type CheckboxStates = NonNullable<GeneratedCheckboxProps['state']>;

type OmitedBaseCheckboxProps = Omit<CheckboxBaseProps, 'glyphIcon' | 'iconRight' | 'iconIndeterminate'>;

export interface CheckboxProps extends GeneratedCheckboxProps, OmitedBaseCheckboxProps {
  /** кастомный глиф checkbox, заменяющий собой базовый глиф */
  className?: string;
  colorMode?: 'light' | 'dark' | 'color';
  IconGlyph?: IconComponent;
  IconRight?: IconComponent;
  IconIndeterminate?: IconComponent;
  skeleton?: CSSProperties['width'];
}
