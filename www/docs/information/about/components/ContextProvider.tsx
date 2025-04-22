import React, { FC, useState, useMemo, useCallback } from 'react';
import type { PaperProps } from '@kit-xyz/paper';

import { InfoPageContext } from '../context';
import type { Breakpoints } from '../interfaces';

export interface ResizerObserversType {
  ref: HTMLElement;
  observer: ResizeObserver;
}

export interface StoreType {
  breakpoint: Breakpoints;
  width: number;
  resizeInProcess?: boolean;
  instantWidth?: number;
  watchResizeRefs?: HTMLElement[];
  resizerObservers?: Record<string, ResizerObserversType>;
  sectionsWidths?: Record<string, number>;
  smoothed?: boolean;
  cardsBorderRadius?: PaperProps['borderRadius'];
}

export const ContextProvider: FC = ({ children }) => {
  const [store, setStore] = useState<StoreType>({
    breakpoint: 'desktop',
    width: 1920,
    watchResizeRefs: [],
    resizerObservers: {},
    sectionsWidths: {},
    resizeInProcess: false,
    smoothed: false,
    cardsBorderRadius: 'l',
  });

  const setResizeInProcess = useCallback((resizeInProcess: boolean) => {
    setStore((prev) => ({ ...prev, resizeInProcess }));
  }, []);

  const setSectionsWidths = useCallback((id: string, sectionWidth: number) => {
    setStore((prev) => ({
      ...prev,
      sectionsWidths: {
        ...prev.sectionsWidths,
        [id]: sectionWidth,
      },
    }));
  }, []);

  const setResizerObservers = useCallback(
    (inst: HTMLElement, resiseObserver: ResizeObserver) =>
      setStore((prev) => ({
        ...prev,
        resizerObservers: {
          ...prev.resizerObservers,
          [inst.id]: {
            ref: inst,
            observer: resiseObserver,
          },
        },
      })),
    [],
  );

  const setBreakpoint = useCallback(
    (newStore: StoreType) =>
      setStore((prev) => ({
        ...prev,
        breakpoint: newStore.breakpoint,
        width: newStore.width,
      })),
    [],
  );

  const setWatchResizeRefs = useCallback((inst: HTMLElement) => {
    setStore((prev) => ({
      ...prev,
      watchResizeRefs: [...prev.watchResizeRefs, inst],
    }));
  }, []);

  const infoPageContextValue = useMemo(
    () => ({
      ...store,
      setBreakpoint,
      setResizerObservers,
      setWatchResizeRefs,
      setSectionsWidths,
      setResizeInProcess,
    }),
    [store, setBreakpoint, setResizerObservers, setWatchResizeRefs, setSectionsWidths, setResizeInProcess],
  );

  return <InfoPageContext.Provider value={infoPageContextValue}>{children}</InfoPageContext.Provider>;
};
