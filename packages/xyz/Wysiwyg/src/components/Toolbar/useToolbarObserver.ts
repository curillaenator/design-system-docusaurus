import { useEffect, useState, useRef } from 'react';

import type { ToolbarCompositionTypeName } from './interfaces';
import { TOOLBAR_MIN_FULL_WIDTH, TOOLBAR_MIN_COMPACT_WIDTH } from './constants';

const calcComposition = (width: number): ToolbarCompositionTypeName => {
  if (width > TOOLBAR_MIN_FULL_WIDTH) return 'full';
  if (width > TOOLBAR_MIN_COMPACT_WIDTH) return 'compact';
  return 'minimal';
};

interface TollbarObserverOptions {
  resetLeftDropdown: () => void;
}

export const useToolbarObserver = (onObserveFns: TollbarObserverOptions) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [composition, setComposition] = useState<ToolbarCompositionTypeName>('full');

  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObs = new ResizeObserver(([toolbarEntry]) => {
      const { width } = toolbarEntry?.contentRect || { width: 0 };
      setComposition((prev) => {
        // 32 - padding-x
        const newComp = calcComposition(width + 32);

        if (prev === 'minimal' && newComp === 'compact') onObserveFns.resetLeftDropdown();

        return newComp;
      });
    });

    resizeObs.observe(containerRef.current);

    return () => {
      if (!containerRef.current) return;
      resizeObs.unobserve(containerRef.current);
    };
  }, []);

  return {
    containerRef,
    composition,
  };
};
