import type { BaseTabsProps, NodeProps } from '@kit-base/tabs';
import { IconComponent } from '@kit-xyz/icon';
import { ButtonProps } from '@kit-xyz/button';

import { GeneratedTabsProps } from './tokenInterfaces';

export type TabsSize = NonNullable<GeneratedTabsProps['size']>;

export interface InternalItemProps extends NodeProps, Omit<GeneratedTabsProps, 'appearance'> {
  Icon?: IconComponent;
  smoothAnimation?: boolean;
  collectEachTabW?: (tabId: string, tabW: number) => void;
  colorMode?: 'light' | 'dark' | 'color';
  appearance?: ButtonProps['appearance'];
}

export type TabsItemProps = Omit<InternalItemProps, 'onClick' | 'active'>;

export interface TabsProps extends Omit<BaseTabsProps, 'itemNode'>, GeneratedTabsProps {
  togglerAppearance?: ButtonProps['appearance'];
  colorMode?: 'light' | 'dark' | 'color';
  smoothAnimation?: boolean;
}
