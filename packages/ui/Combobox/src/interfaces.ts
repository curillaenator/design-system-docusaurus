import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { GroupBase, Props } from 'react-select';

export interface ComboBoxOption<IconProps = {}> {
  id: string | number;
  title: string;
  disabled?: boolean;
  icon?: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
}

// export interface MenuListPropsWithExtraParams extends Props<ComboBoxOption, true, GroupBase<ComboBoxOption>> {
//   requireExtraOptions: () => void;
//   triggerThreshold: number;
//   isOptionsLoading: boolean;
// }

type ExcludedProps = 'classNamePrefix' | 'defaultInputValue' | 'styles' | 'theme' | 'getOptionLabel' | 'getOptionValue';

type ComboBoxPropsWithComponents = Omit<Props<ComboBoxOption, true, GroupBase<ComboBoxOption>>, ExcludedProps>;

export type ComboBoxComponents = Required<NonNullable<ComboBoxPropsWithComponents['components']>>;

export interface BaseComboBoxProps extends Omit<ComboBoxPropsWithComponents, 'components'> {
  dataTestId?: string;
  version?: string;
}
