import { HTMLAttributes, SyntheticEvent, ElementType } from 'react';
import { PolymorphicComponentWithRef } from '@kit-base/common-types';

type IconState = 'disabled';

interface IconProps extends HTMLAttributes<SVGElement | HTMLImageElement> {
  /** уникальный id элемента */
  id?: string;
  /** уникальный id для тестирования */
  dataTestId?: string;
  /** состояние */
  state?: IconState;
  /** обработчик для иконки */
  onClick?: (e: SyntheticEvent<HTMLImageElement | SVGElement>) => void;
  /** классы для иконки */
  className?: string;
}

export type IconComponent = PolymorphicComponentWithRef<IconProps, 'component', ElementType>;

export { IconState, IconProps };
