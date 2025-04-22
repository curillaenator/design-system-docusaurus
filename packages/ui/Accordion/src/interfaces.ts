import type { ReactNode } from 'react';

export interface BaseAccordionProps {
  /** контент триггера аккордеона */
  openNode: ReactNode;
  /** состояние акккордиона */
  isOpen: boolean;
  /** стили */
  className?: string;
  /** тест id */
  dataTestId?: string;
  /** включить преднастроенные паддинги */
  contentPaddings?: boolean;
  /** класснейм конетента */
  contentClassName?: string;
}
