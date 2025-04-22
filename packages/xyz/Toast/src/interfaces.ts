// import type { CSSProperties } from 'react';
import { ToastProps as BaseToastProps } from '@kit-base/toast';
import type { IconComponent } from '@kit-xyz/icon';

import { GeneratedToastProps } from './tokenInterfaces';

export type ToastId = number | string;

export interface ToastContentProps extends GeneratedToastProps {
  /** тест id */
  dataTestId?: string;
  /** Основной текст тоста */
  message: string;
  /** иконка тоста */
  Icon?: IconComponent;
  /** режим отображения */
  colorMode?: 'light' | 'light' | 'color';
  /** className */
  className?: BaseToastProps['className'];
  /** обработчик кнопки закрытия */
  onCloseButton?: (e?: React.SyntheticEvent<SVGElement | HTMLImageElement, Event>) => void;
}

export interface ToastProps extends ToastContentProps, BaseToastProps {
  /** тест id */
  dataTestId?: string;
  /** стили для контейнера тостов (Если недостаточно дефолтных позиций для рендера тостов) */
  // containerStyle?: CSSProperties;
}
