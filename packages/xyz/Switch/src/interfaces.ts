import type { BaseSwitchProps } from '@kit-base/switch';

import type { GeneratedSwitchProps } from './tokenInterfaces';

export type SwitchSize = GeneratedSwitchProps['size'];
export type SwitchState = GeneratedSwitchProps['state'];

export interface SwitchProps extends GeneratedSwitchProps, BaseSwitchProps {
  colorMode?: 'light' | 'dark' | 'color';
}
