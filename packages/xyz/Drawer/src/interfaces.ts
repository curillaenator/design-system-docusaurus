import { AriaAttributes, ReactNode } from 'react';
import { OmitedBaseDrawerProps } from '@kit-base/drawer';

export type DrawerClosedWidthType = '128' | '96' | '80' | '64' | '48' | '32' | '0';

export interface DrawerProps extends OmitedBaseDrawerProps, AriaAttributes {
  /** children */
  children: ReactNode;
  /** доп класснейм для контента */
  contentClassName?: string;
  /** режим отображения */
  colorMode?: 'light' | 'dark' | 'color';
  /** размеры */
  size?: '2xl' | 'xl' | 'l' | 'm' | 's' | 'xs';

  appearance?: 'default' | 'tracker-default';
}
