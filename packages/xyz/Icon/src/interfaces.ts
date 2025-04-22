import React, { SyntheticEvent, VFC } from 'react';

import { GeneratedIconProps } from './tokenInterfaces';

export type IconColor = NonNullable<GeneratedIconProps['color']>;
export type IconSize = NonNullable<GeneratedIconProps['size']>;

export type Icon = React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
export type Icons = 'string';

export interface IconProps {
  /** уникальный id элемента */
  id?: string;
  /** уникальный id для тестирования */
  dataTestId?: string;
  /** состояние */
  state?: 'disabled';
  /** обработчик для иконки */
  onClick?: (e: SyntheticEvent<HTMLImageElement | SVGElement>) => void;
  /** цвет иконки, если не передать будет использоваться родительский color */
  color?: IconColor;
  /** размер иконки, по дефолту "m" */
  size?: IconSize;
  /** классы для иконки */
  className?: string;
  /** режим отображения */
  colorMode?: 'light' | 'dark' | 'color';
}

export type IconComponent = VFC<IconProps>;
