import type { BaseTypographyProps as BaseProps } from '@kit-base/typography';
import { PolymorphicComponentWithRef } from '@kit-base/common-types';

export type TypographyApperance =
  | 'transparent'
  | 'dark'
  | 'neutral'
  | 'primary'
  | 'light'
  | 'secondary'
  | 'attention'
  | 'positive'
  | 'negative'
  | 'informative';

export type FontWeight = 'semibold' | 'regular';
export type FontFamily = 'mono' | 'sans';
export type LineHeight = 'high' | 'low';
export type TypographyInternalState = 'disabled';
export type TypographyInternalAppearance = `color-${TypographyApperance}` | `state-${TypographyInternalState}`;
export type TypographySize = '2xl' | 'xl' | 'l' | 'm' | 's' | 'xs';

export interface BaseTypographyProps extends BaseProps {
  /** значение высоты строки */
  lineHeight?: LineHeight;
  /** толщина шрифта */
  fontWeight?: FontWeight;
  /** семейство шрифтов */
  fontFamily?: FontFamily;
  /** цвет текста */
  appearance?: TypographyApperance;
  /** id для тега */
  id?: string;
  /** размер шрифта */
  size?: TypographySize;
}

export type TypographyComponent = PolymorphicComponentWithRef<BaseTypographyProps, 'as', 'p'>;
