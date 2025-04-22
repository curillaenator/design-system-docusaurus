import type { ButtonHTMLAttributes } from 'react';
import type { IconComponent, IconSize } from '@kit-xyz/icon';

import type { InputState } from '../interfaces';

export interface ActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  dataTestId: string;
  size: IconSize;
  Icon: IconComponent;
  colorMode?: 'light' | 'dark' | 'color';
}

export interface MetaProps {
  dataTestId?: string;
  startMetaText?: string;
  endMetaText?: string;
  position?: 'top' | 'bottom';
  disabled?: boolean;
  state?: InputState;
}
