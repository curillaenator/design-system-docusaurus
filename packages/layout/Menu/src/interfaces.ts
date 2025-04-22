import type { MenuHeaderProps, AvatarProps, MenuInputProps, MenuSelectProps, MenuItemProps } from './components';
import { ButtonWithIconProps } from './types/ButtonWithIconProps';
import { MenuCommonProps } from './context/MenuContext';

export interface BaseMenuProps {
  /** components */
  input?: MenuInputProps;
  select?: MenuSelectProps;
  logo?: MenuHeaderProps['logo'];

  /** menu own props*/
  toggleOpen?: () => void;
  className?: string;
  menuContainerId?: string;

  /** menu element sets */
  elements: MenuItemProps[];
  secondaryElements: MenuItemProps[];

  /** avatar */
  avatar?: AvatarProps;

  /** button set */
  settings?: ButtonWithIconProps;
  notifications?: ButtonWithIconProps;
  messages?: ButtonWithIconProps;
}

export type MenuCombinedProps = BaseMenuProps & MenuCommonProps;

export { MenuItemProps };
