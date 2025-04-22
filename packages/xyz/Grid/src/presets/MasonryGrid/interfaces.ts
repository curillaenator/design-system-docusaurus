import { ElementType } from 'react';

export interface MasonryGridProps {
  /** уникальный id компонента */
  id: string;
  /** dataTestId */
  dataTestId?: string;
  /** режим отображения */
  colorMode?: 'light' | 'dark';
  /** набор элементов грида */
  items?: ElementType[];
  /** гап между элементами */
  gap?: number;
  /** милисекунды, скорость срабатывания ререндера (перерасчета лейаута) после ресайза родителя (делей дебаунса) */
  rerenderSpeed?: number;
  /** */
  elementMinWidth?: number;
}
