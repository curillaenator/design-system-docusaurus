import { FC, HTMLAttributes } from 'react';
import { PolymorphicComponentWithRef } from '@kit-base/common-types';

export type DividerOrientation = 'vertical' | 'horizontal';

export interface LineProps extends Pick<HTMLAttributes<unknown>, 'role'> {
  /** является ли линия вертикальной, по умолчанию horizontal */
  orientation?: DividerOrientation;
}

export interface DividerProps extends LineProps {
  /** тест id */
  dataTestId?: string;
  /** текст посередине линии */
  text?: string;
  /** второй текст посередине линии */
  textSecondary?: string;
  /** стили для компонента */
  className?: string;
  /** левая иконка */
  iconLeft?: ReturnType<FC>;
  /** правая иконка */
  iconRight?: ReturnType<FC>;
  /** disabled */
  disabled?: boolean;
}

export type DividerComponent = PolymorphicComponentWithRef<DividerProps, 'component', 'div'>;
