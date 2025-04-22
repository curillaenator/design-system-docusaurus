import type { ReactNode } from 'react';
import type { OmitedBaseModalProps } from '@kit-base/modal';

import type { GeneratedModalProps } from './tokenInterfaces';

export interface ModalProps extends GeneratedModalProps, OmitedBaseModalProps {
  /** скрыть кнопку закрытия у модального окна. По умолчанию - false */
  hasCloseButton?: boolean;
  /** скрыть/показать фейд градиенты сверху и снизу модального окна */
  hasFades?: boolean;
  /** children */
  children: ReactNode;
  /** режим отображения */
  colorMode?: 'light' | 'dark' | 'color';
  /** скрыть/показать фейд градиенты сверху и снизу модального окна */
  hasOverlay?: boolean;
}
