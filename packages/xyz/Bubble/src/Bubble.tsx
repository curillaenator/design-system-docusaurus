import React, { FC } from 'react';
import { BaseBubble, BaseBubbleProps } from '@kit-base/bubble';

import { useBubble } from './hooks/useBubble';

export const Bubble: FC<BaseBubbleProps> = (props) => {
  const resultProps = useBubble(props);

  return <BaseBubble {...resultProps} />;
};
