import { DropableProps } from '@kit-base/dropable';
import { ButtonProps } from '@kit-xyz/button';
import { IconComponent } from '@kit-xyz/icon';
import { ItemProps, SelectIdProp } from '../../components/item/interfaces';

export type OmitedBaseDropableProps = Omit<
  DropableProps,
  'openNode' | 'openNodeClassName' | 'visible' | 'trigger' | 'placement' | 'scrollClassName' | 'children'
>;

type Placements = Extract<DropableProps['placement'], 'bottom-start' | 'bottom-end'>;

type OpenNodeProps = {
  badgeClassName: string;
} & Omit<
  ButtonProps,
  | 'id'
  | 'ref'
  | 'active'
  | 'tabIndex'
  | 'type'
  | 'data-testid'
  | 'disabled'
  | 'colorMode'
  | 'IconLeft'
  | 'IconRight'
  | 'labelsFullwidth'
  | 'labelsReversed'
  | 'labelsJustify'
  | 'size'
>;

export interface SelectBaseProps<
  TValue extends SelectIdProp = SelectIdProp,
  TItem extends ItemProps<TValue> = ItemProps<TValue>,
> {
  id?: string;
  value: TValue | null;
  onChange: (itemId: TValue) => void;
  placement?: Placements;
  items?: TItem[];
  icon?: IconComponent;
  placeholder?: string;
  fullWidth?: boolean;
  openNodeProps?: OpenNodeProps;
  minified?: boolean;
  colorMode?: 'light' | 'dark' | 'color';
  size?: 's';
}

export interface SelectProps<T extends SelectIdProp>
  extends SelectBaseProps<T, ItemProps<T>>,
    OmitedBaseDropableProps {}
