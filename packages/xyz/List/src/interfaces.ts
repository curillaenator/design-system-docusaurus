import type { ButtonProps } from '@kit-xyz/button';

import type { GeneratedListProps } from './tokenInterfaces';

export interface ListProps extends GeneratedListProps {
  dataTestId?: string;
  className?: string;
  colorMode?: ButtonProps['colorMode'];
  subtrahend?: number;
}
