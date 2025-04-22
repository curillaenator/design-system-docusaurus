import { useState, useEffect, useMemo } from 'react';

import { useBreakpoint, BreakpointName } from './useBreakpoint';

export type FullBreakpointsAssoc = Record<BreakpointName, BreakpointName>;
export type BreakpointsAssoc = Partial<Record<BreakpointName, BreakpointName>>;

const screens: BreakpointName[] = ['xs', 's', 'm', 'l', 'xl', '2xl', '3xl'];

export const useScale = (breakpointsAssoc: BreakpointsAssoc) => {
  const breakpoint = useBreakpoint();

  const fullAssoc = useMemo(() => {
    const getPropperty = (prop: BreakpointName) => {
      if (breakpointsAssoc[prop]) {
        return breakpointsAssoc[prop];
      }

      return prop;
    };

    return screens.reduce(
      (prevValue, currValue) => ({
        ...prevValue,
        [currValue]: getPropperty(currValue),
      }),
      {} as FullBreakpointsAssoc,
    );
  }, [breakpointsAssoc]);

  const [value, setValue] = useState<BreakpointName>(fullAssoc[breakpoint]);
  // const value = useBreakpoint();

  useEffect(() => {
    setValue(fullAssoc[breakpoint]);
  }, [breakpoint, fullAssoc]);

  return value;
};
