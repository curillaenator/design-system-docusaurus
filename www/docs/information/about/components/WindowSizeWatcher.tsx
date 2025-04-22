import React, { useRef, useEffect, useContext, useCallback } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { useWindowSize, debounced } from '@kit-base/uikit-utils';

import { InfoPageContext } from '../context';
import type { Breakpoints } from '../interfaces';

import type { ResizerObserversType } from './ContextProvider';

const DEFAULT_DELAY = 150;

const calcBreakpoint = (w: number): Breakpoints => {
  if (w >= 2560) return 'desktop2K';
  if (w >= 2160) return 'desktopL';
  if (w >= 1920) return 'desktop';
  if (w >= 1440) return 'laptop';
  if (w >= 1280) return 'tablet';
  if (w >= 997) return 'tabletS';
  return 'mobile';
};

const WindowSizeWatcherComponent = () => {
  const { width } = useWindowSize();

  const {
    setBreakpoint,
    resizerObservers,
    setResizerObservers,
    watchResizeRefs,
    setSectionsWidths,
    setResizeInProcess,
  } = useContext(InfoPageContext);

  // 1. собирает обсерверы на полученные рефы 1 раз, после того как последний реф был добавлен
  const sectionsWidthTimers = useRef<Record<string, ReturnType<typeof setTimeout>>>({});
  const setAllResizeObservers = useCallback(
    (watchedResizeRefs: HTMLElement[]) => {
      watchedResizeRefs.forEach((ref) => {
        const observer = new ResizeObserver(() => {
          const { current: timers } = sectionsWidthTimers;

          if (timers[ref.id]) clearTimeout(timers[ref.id]);

          sectionsWidthTimers.current[ref.id] = setTimeout(() => {
            setSectionsWidths(ref.id, ref.clientWidth);
            setResizeInProcess(false);
          }, DEFAULT_DELAY);
        });

        setResizerObservers(ref, observer);
      });
    },
    [setSectionsWidths, setResizerObservers, setResizeInProcess],
  );

  const debouncedSetAllResizeObservers = useCallback(debounced(setAllResizeObservers), [setAllResizeObservers]); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => debouncedSetAllResizeObservers(watchResizeRefs), [watchResizeRefs, debouncedSetAllResizeObservers]);
  // 1. end

  // 2. Заупускаются все собраные resizerObservers, 1 раз  после того,
  // как последний элемент для ресайз-обозрения был добавлен. при анмаунте отключает все обсерверы.
  const runAllResizeObservers = useCallback((resizeObservers: Record<string, ResizerObserversType>) => {
    const observers = Object.values(resizeObservers);

    if (observers.length) {
      observers.forEach(({ ref, observer }) => {
        observer.observe(ref);
      });
    }
  }, []);

  const debouncedRunAllResizeObservers = useCallback(debounced(runAllResizeObservers), [runAllResizeObservers]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    debouncedRunAllResizeObservers(resizerObservers);
    return () => Object.values(resizerObservers).forEach(({ observer }) => observer.disconnect());
  }, [resizerObservers, debouncedRunAllResizeObservers]);
  // 2. end

  // 3. обновляет breakpoint и width в контексте инфо-страницы
  const updateWidthBreakpoint = useCallback(
    (newWidth: number) => {
      setBreakpoint({ breakpoint: calcBreakpoint(newWidth), width: newWidth });
      setResizeInProcess(false);
    },

    [setBreakpoint, setResizeInProcess],
  );

  const debouncedUpdateWidthBreakpoint = useCallback(debounced(updateWidthBreakpoint), [updateWidthBreakpoint]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    debouncedUpdateWidthBreakpoint(width);
  }, [width, debouncedUpdateWidthBreakpoint]);
  // 3. end

  return null;
};

// так как на странице используется апи браузера (useWindowSize), без обертки серверное приложение не собереться
// компонент дебаунсом по изменению размеров окна браузера наполняет контекст страницы
export const WindowSizeWatcher = () => <BrowserOnly>{() => <WindowSizeWatcherComponent />}</BrowserOnly>;
