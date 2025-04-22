import { useState, useEffect, useMemo } from 'react';

export type BreakpointName = 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl';
export type Breakpoints = Partial<Record<BreakpointName, number>>;

type BreakpointsArrayEntry = [BreakpointName, number];

const screens: BreakpointName[] = ['xs', 's', 'm', 'l', 'xl', '2xl', '3xl'];

export const DEFAULT_BREAKPOINTS: Breakpoints = {
  xs: 0,
  s: 512,
  m: 768,
  l: 1024,
  xl: 1280,
  '2xl': 1536,
  '3xl': 1792,
};

const compareBreakpoints = (prev: BreakpointsArrayEntry, next: BreakpointsArrayEntry): number => {
  const prevIndex = screens.findIndex((screen) => prev[0] === screen);
  const nextIndex = screens.findIndex((screen) => next[0] === screen);

  if (prevIndex < nextIndex) {
    return -1;
  }

  if (prevIndex > nextIndex) {
    return 1;
  }

  throw new Error('Breakpoints не могут дублироваться');
};

const checkFirst = (breakpointsArray: BreakpointsArrayEntry[]) => {
  if (breakpointsArray[0][1] !== 0) {
    throw new Error('Перечисление breakpoints должно начинаться с 0');
  }
};

const validateBreakpoints = (bArray: Array<BreakpointsArrayEntry>) => {
  if (bArray.length > 1) {
    const sortedBreakpointsArray = bArray.sort(compareBreakpoints);

    let lastMaxValue = 0;

    sortedBreakpointsArray.forEach((entry) => {
      if (entry[1] < lastMaxValue) {
        throw new Error(`Неверно указаны значения брейкпоинтов в порядке mobile-first`);
      }

      const [, value] = entry;
      lastMaxValue = value;
    });

    checkFirst(sortedBreakpointsArray);

    return sortedBreakpointsArray;
  }

  checkFirst(bArray);

  return bArray;
};

const createQueryStrings = (breakpoints: Breakpoints): [BreakpointName, string][] => {
  const queryStringsArr: [BreakpointName, string][] = [];
  const breakpointsArr = Object.entries(breakpoints) as BreakpointsArrayEntry[];

  if (breakpointsArr.length === 0) {
    throw new Error('Передан пустой массив breakpoints');
  }

  const validBreakpoints = validateBreakpoints(breakpointsArr);

  validBreakpoints.forEach((entry) => {
    queryStringsArr.push([entry[0], `(min-width: ${entry[1]}px)`]);
  });

  return queryStringsArr;
};

const getValue = (mediaQueryLists: [BreakpointName, MediaQueryList][]): BreakpointName => {
  const matchedQueries = mediaQueryLists.filter((item) => item[1].matches);

  return matchedQueries[matchedQueries.length - 1][0];
};

export const useBreakpoint = (breakpoints?: Breakpoints): BreakpointName => {
  const mediaQueryLists = useMemo(
    () =>
      createQueryStrings(breakpoints || DEFAULT_BREAKPOINTS).map<[BreakpointName, MediaQueryList]>((q) => [
        q[0],
        window.matchMedia(q[1]),
      ]),
    [breakpoints],
  );

  const [value, setValue] = useState<BreakpointName>(getValue(mediaQueryLists));

  useEffect(() => {
    const handler = () => setValue(getValue(mediaQueryLists));

    mediaQueryLists.forEach(([, item]) => item.addEventListener('change', handler));

    return () => {
      mediaQueryLists.forEach(([, item]) => item.removeEventListener('change', handler));
    };
  }, [mediaQueryLists]);

  return value;
};
