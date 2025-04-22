import type { DropableProps } from '@kit-base/dropable';
import type { IconComponent } from '@kit-xyz/icon';

export type DropdownIdProp = string | number;

interface BaseItemProps<T extends DropdownIdProp> {
  id: T;
  caption: string;
  Icon?: IconComponent;
  active?: boolean;
  closeOnClick?: boolean;
  disabled?: boolean;
}

export interface ItemProps<T extends DropdownIdProp> extends BaseItemProps<T> {
  onClick?: (item: BaseItemProps<T>) => void;
}

export type OmitedBaseDropableProps = Omit<
  DropableProps,
  'openNode' | 'openNodeClassName' | 'visible' | 'trigger' | 'placement' | 'scrollClassName' | 'children'
>;

type Placements = Extract<DropableProps['placement'], 'bottom-start' | 'bottom-end'>;

export interface DropdownBaseProps<
  TValue extends DropdownIdProp = DropdownIdProp,
  TItem extends ItemProps<TValue> = ItemProps<TValue>,
> {
  id?: string;
  value: TValue | null;
  onChange: (itemId: TValue) => void;
  placement?: Placements;
  items?: TItem[][];
  icon?: IconComponent;
  placeholder?: string;
  isOpenNodeCaption?: boolean;
}

export interface DropdownProps<T extends DropdownIdProp>
  extends DropdownBaseProps<T, ItemProps<T>>,
    OmitedBaseDropableProps {}
