import type { CombinedBaseAvatarProps } from '@kit-base/avatar';

import type { GeneratedAvatarProps } from './tokenInterfaces';

export interface AvatarProps extends GeneratedAvatarProps, CombinedBaseAvatarProps {
  colorMode?: 'light' | 'dark' | 'color';
}
