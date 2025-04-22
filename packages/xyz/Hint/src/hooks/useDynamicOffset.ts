import { useRef, useState, useCallback, useEffect } from 'react';

import { OFFSET_X, OFFSET_Y, OFFSET_Y_WITH_ARROW } from '../constants';
import { HintProps } from '../interfaces';

export const useDynamicOffset = (placement: NonNullable<HintProps['placement']>) => {
  const middle = useRef<number>(0);
  const [offset, setOffset] = useState<[number, number]>([OFFSET_X, OFFSET_Y_WITH_ARROW]);

  const getOpenNodeMiddle = useCallback((width: number) => {
    middle.current = width / 2;
  }, []);

  useEffect(() => {
    if (['top-center', 'bottom-center'].some((key) => placement === key)) setOffset([OFFSET_X, OFFSET_Y_WITH_ARROW]);

    if (placement.includes('-right')) setOffset([middle.current, OFFSET_Y]);

    if (placement.includes('-left')) setOffset([middle.current * -1, OFFSET_Y]);
  }, [placement]);

  return {
    offset,
    getOpenNodeMiddle,
  };
};
