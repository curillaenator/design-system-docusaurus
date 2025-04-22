import type { DividerProps as BaseDividerProps } from '@kit-base/divider';
import { Icons, IconSize } from '@kit-xyz/icon';

import { GeneratedDividerProps } from './tokenInterfaces';

export type DividerSize = GeneratedDividerProps['size'];
export type DividerAppearance = GeneratedDividerProps['appearance'];
export type DividerShape = 'rounded' | 'cornered';

type OmitedDividerProps = Omit<BaseDividerProps, 'size' | 'appearance' | 'iconLeft' | 'iconRight'>;

export interface DividerProps extends GeneratedDividerProps, OmitedDividerProps {
  /** вид линии, по умолчанию dark */
  appearance?: DividerAppearance;
  /** форма линии */
  shape?: DividerShape;
  /** размер разделителя */
  size?: DividerSize;
  /** левая иконка */
  iconLeftName?: Icons;
  /** правая иконка */
  iconRightName?: Icons;
  /** размер иконки */
  iconSize?: IconSize;
}

export type UseDividerIconsFn = {
  <P extends DividerProps>(props: P): BaseDividerProps;
};
