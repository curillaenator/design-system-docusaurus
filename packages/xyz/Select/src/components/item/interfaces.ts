import type { IconComponent } from '@kit-xyz/icon';
import type { BadgeProps } from '@kit-xyz/badge';
import type { ButtonProps } from '@kit-xyz/button';
import type { AvatarProps } from '@kit-xyz/avatar';

export type SelectIdProp = string | number;
interface BaseItemProps<T extends SelectIdProp> {
  id: T;
  caption: string;
  description?: string;
  to?: string;
  Icon?: IconComponent;
  active?: boolean;
  closeOnClick?: boolean;
  colorMode?: 'light' | 'dark' | 'color';
  isUnselectable?: boolean;
}

type ItemAvatar = Pick<AvatarProps, 'src' | 'svg' | 'alt' | 'initials' | 'appearance'>;
type ItemBadge = Pick<BadgeProps, 'children' | 'IconLeft' | 'appearance' | 'className'>;

export type ItemBadgeAppearance = ItemBadge['appearance'];

interface BaseExtendedItemProps<T extends SelectIdProp = SelectIdProp> extends BaseItemProps<T> {
  avatar?: ItemAvatar;
  badge?: ItemBadge;
}

export interface ItemProps<T extends SelectIdProp> extends BaseItemProps<T>, Omit<ButtonProps, 'onClick' | 'id'> {
  onClick?: (item: BaseItemProps<T>) => void;
}

export interface ExtendedItemProps<T extends SelectIdProp = SelectIdProp>
  extends BaseExtendedItemProps<T>,
    Omit<ButtonProps, 'onClick' | 'id'> {
  onClick?: (item: BaseExtendedItemProps<T>) => void;
}
