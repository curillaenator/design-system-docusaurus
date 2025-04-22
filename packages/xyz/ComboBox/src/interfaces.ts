import type { BaseComboBoxProps, ComboBoxOption as BaseComboBoxOption } from '@kit-base/combobox';
import type { IconComponent } from '@kit-xyz/icon';

type IconNodes = 'iconLeft' | 'iconClear' | 'iconRight' | 'iconChecked' | 'iconRemove';

type BaseComboBoxPropsWithoutIconNodes = Omit<BaseComboBoxProps, IconNodes>;

export interface ComboboxProps extends BaseComboBoxPropsWithoutIconNodes {
  colorMode?: 'light' | 'dark' | 'color';
  size?: 's';
  state?: 'success' | 'error';
  appearance?: 'solid';
  shape?: 'square' | 'rounded' | 'circular';
  IconSearch?: IconComponent;
  IconCarret?: IconComponent;
  IconChecked?: IconComponent;
  IconChipRemove?: IconComponent;
  IconClear?: IconComponent;
  appendToId?: string;
}

export type ComboBoxOption = BaseComboBoxOption<IconComponent>;
