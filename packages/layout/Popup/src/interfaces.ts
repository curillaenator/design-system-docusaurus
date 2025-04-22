// import type { FC } from 'react';
import type { ToastProps as BasePopupProps } from '@kit-base/toast';

export type PopupId = number | string;

export interface PopupProps extends BasePopupProps {
  /** Компонент для рендера в попапе */
  Content: () => JSX.Element;
  popupId?: string | number;
}
