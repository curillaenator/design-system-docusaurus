import { RefObject, useEffect, useMemo } from 'react';

import { BaseScrollManager } from './ScrollManager';

export const useDisabledScroll = <T extends HTMLElement>(
  document: Document,
  window: Window,
  targets: RefObject<T | null>[] = [],
  manualDisabled?: boolean,
) => {
  const scroll = useMemo(() => new BaseScrollManager(targets, { document, window }), [document, window, targets]);

  useEffect(() => {
    if (manualDisabled === undefined) return;

    if (manualDisabled) {
      scroll.disable();
    } else {
      scroll.enable();
    }

    return () => {
      if (scroll.scrollDisabled) scroll.enable();
    };
  }, [scroll, manualDisabled]);

  useEffect(() => {
    if (manualDisabled !== undefined) return;

    scroll.disable();

    return () => scroll.enable();
  }, [scroll, manualDisabled]);
};
