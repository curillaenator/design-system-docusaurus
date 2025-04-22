import type { HTMLAttributes } from 'react';
import type { ButtonProps } from '@kit-xyz/button';
import type { SelectProps } from '@kit-xyz/select';

export type GroupItem = SelectProps | ButtonProps;

export interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
  id: string;
  group: GroupItem[];
  size?: 'xs' | 's';
  appearance?: ButtonProps['appearance'];
  withBorder?: ButtonProps['withBorder'];
  colorMode?: 'light' | 'dark' | 'color';
  shape?: ButtonProps['shape'];
}
