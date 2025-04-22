import { KeyboardEvent, useRef, useEffect, useCallback } from 'react';

import Cursor, { Cursorable } from './Cursor';

type Options = {
  scrollable?: boolean;
};

const KEY_CODES = ['ArrowRight', 'ArrowDown', 'ArrowLeft', 'ArrowUp', 'End', 'Home'];
const KEY_METHOD_ASSOC: Record<string, 'next' | 'prev' | 'first' | 'last'> = {
  ArrowRight: 'next',
  ArrowDown: 'next',
  ArrowLeft: 'prev',
  ArrowUp: 'prev',
  Home: 'first',
  End: 'last',
};

export const useKeyboardNavigation = (length: number, activeIndex: number, opts?: Options) => {
  const { scrollable } = opts || { scrollable: false };

  const navContainerRef = useRef<HTMLElement>(null);

  const { current: runner } = useRef<Cursorable>(
    new Cursor({
      start: 0,
      current: activeIndex,
      end: length - 1,
    }),
  );

  useEffect(() => {
    if (runner.end !== length - 1) {
      runner.end = length - 1;
    }
  }, [length, runner]);

  useEffect(() => {
    runner.go(activeIndex);

    if (scrollable) {
      (navContainerRef.current?.childNodes.item(activeIndex) as HTMLElement)?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activeIndex, scrollable, runner]);

  const onContainerKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!KEY_CODES.includes(e.key) || !navContainerRef.current) {
        return;
      }

      e.preventDefault();

      runner[KEY_METHOD_ASSOC[e.key]]();

      const item = navContainerRef.current.childNodes.item(runner.current) as HTMLElement;

      item.focus();

      if (scrollable) item.scrollIntoView({ behavior: 'smooth' });
    },
    [runner, scrollable],
  );

  return {
    navContainerRef,
    onContainerKeyDown,
  };
};
