import type { AriaAttributes } from 'react';

export interface BaseModalProps extends AriaAttributes {
  /** тест id */
  dataTestId?: string;
  /** id div'a, в который будет порталиться модалка */
  portalId: string;
  /** состояние открытия/закрытия */
  open: boolean;
  /** обработчик для открытия/закрытия шторки */
  onClose: () => void;
  /** отключить закрытие модалки по клику на оверлей. По умолчанию - false */
  disableBackgroundClick?: boolean;
  /** включить скролл для контейнера, по умолчанию - false */
  scrollBody?: boolean;
  /** класснейм для оверлея */
  overlayClassName?: string;
  /** класснейм темного скролла */
  scrollClassName?: string;
  /** класснейм для передачи переменных настройки анимации */
  transitionClassName?: string;
  /** венрсия темпного компонента */
  version?: string;
  /** обработчик для старта/завершения анимации */
  onAnimationProgress?: (inProgress: boolean) => void;
}

export type OmitedBaseModalProps = Omit<
  BaseModalProps,
  'overlayClassName' | 'scrollClassName' | 'transitionClassName' | 'version'
>;
