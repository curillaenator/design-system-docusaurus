import type { ExtendedItemProps } from '@kit-xyz/select';
import { type ButtonProps } from '@kit-xyz/button';

export interface SelectItemProps
  extends Pick<
    ExtendedItemProps,
    'id' | 'caption' | 'to' | 'Icon' | 'active' | 'onClick' | 'closeOnClick' | 'isUnselectable'
  > {}

export interface SelectButtonItemProps
  extends Pick<ExtendedItemProps, 'id' | 'caption' | 'to' | 'Icon' | 'active' | 'onClick' | 'closeOnClick'> {}

export interface MenuItemProps
  extends Pick<
    ButtonProps,
    'secondaryText' | 'IconLeft' | 'IconRight' | 'component' | 'dataTestId' | 'href' | 'to' | 'target'
  > {
  elements?: MenuItemProps[];
  counter?: number;
}
