import type { ElementType } from 'react';
import type { ModalProps } from '@kit-xyz/modal';
import type { InputProps } from '@kit-xyz/input';

import type { LayoutConfigTypeWithHandlers } from './hooks/useLayoutConfig';
import type { LayoutStateTypeWithHandlers } from './hooks/useLayoutState';
import type { MenuTypeWithHandlers } from './hooks/useLeftMenu';

export type ColorMode = 'dark' | 'light' | 'color';

export interface LayoutStateType {
  mode?: ColorMode;

  smoothedCorners?: boolean;

  inputValue?: InputProps['value'];

  isConfigurator?: boolean;
  activeMenuItem?: string;

  isSidebarLeftOpen?: boolean;
  isDrawerLeftOpen?: boolean;

  isSidebarRightOpen?: boolean;
  isSidebarRightFullOpen?: boolean;

  isDrawerRightOpen?: boolean;
  isDrawerRightFullOpen?: boolean;

  isModalOpen?: boolean;
}

export interface LayoutConfigProps {
  themeClassName?: string;

  isHeader?: boolean;

  leftSidebar?: boolean;
  leftleftSidebarClosedWidth?: '0' | '96';

  leftDrawer?: boolean;
  leftDrawerClosedWidth?: '0' | '96';

  rightSidebar?: boolean;
  RightSidebarContent?: ElementType;
  rightSidebarClosedWidth?: '0';

  rightDrawer?: boolean;
  RightDrawerContent?: ElementType;
  rightDrawerClosedWidth?: '0' | '96';

  isModal?: boolean;
  modalContent?: ElementType;
  modalConfig?: Pick<ModalProps, 'hasCloseButton' | 'hasFades' | 'scrollBody' | 'size' | 'hasOverlay'>;

  isFooter?: boolean;

  contentPaddings?: 'large' | 'medium' | 'small';
}

export interface LayoutProps {
  config: LayoutConfigProps;
  state: LayoutStateType;
}

export type LayoutPropsWithStateAndConfigHandlers = LayoutConfigTypeWithHandlers &
  LayoutStateTypeWithHandlers &
  MenuTypeWithHandlers;
