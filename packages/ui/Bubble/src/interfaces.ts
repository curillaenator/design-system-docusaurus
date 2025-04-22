import { ReactNode } from 'react';
import { IconComponent } from '@kit-xyz/icon';

import { GeneratedBubbleProps } from './tokenInterfaces';

export type BubbleSize = GeneratedBubbleProps['size'];
export type BubbleCorner = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
export type BubbleAppearance = GeneratedBubbleProps['appearance'];
export type BubbleShape = GeneratedBubbleProps['shape'];
export type BubbleVariant = GeneratedBubbleProps['variant'];

export interface BaseBubbleProps {
  /** основной текст для bubble */
  title: ReactNode;
  /** тест id */
  dataTestId?: string;
  /** размер bubble, по дефолту 'l' */
  size?: BubbleSize;
  /** позиция уголка у bubble, работает только при type="corner", по дефолту 'bottom-left' */
  corner?: BubbleCorner;
  /** вариация компонента */
  variant?: BubbleVariant;
  /** внешний вид bubble, по умолчанию dark */
  appearance?: BubbleAppearance;
  /** скругление, по умолчанию rounded */
  shape?: BubbleShape;
  /** второстепенный текст для bubble */
  subTitle?: string;
  /** зеркальное отображение текста и второстепенного текста */
  reversedText?: boolean;
  /** иконка в начале bubble */
  IconLeft?: IconComponent;
  /** иконка в конце bubble */
  IconRight?: IconComponent;
  /** стили для bubble */
  className?: string;
  /** стили для иконок */
  iconClassName?: string;
  /** флаг интерактивности. Добавляет состояние ховера */
  interactive?: boolean;
}
