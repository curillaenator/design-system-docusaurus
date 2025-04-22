import { useCallback, useState } from 'react';
import { fns } from '@kit-base/calendar';

import { CalendarProps } from '../interfaces';
import { MIN_YEAR, MAX_YEAR } from '../../../constants';

export const useNavigation = (props: CalendarProps) => {
  const { initialCurrentMonth = new Date(), startMonth = 0, minYear = MIN_YEAR, maxYear = MAX_YEAR } = props;

  const [navDate, setNavDate] = useState(fns.startOfMonth(initialCurrentMonth));

  const monthViewStartDate =
    startMonth > 0 && startMonth <= 12
      ? fns.addMonths(fns.startOfYear(navDate), startMonth - 1)
      : fns.startOfYear(navDate);

  const yearsDiff = fns.getYear(navDate) % 12;
  const firstYearOfDecade = fns.startOfYear(fns.subYears(navDate, yearsDiff));
  const lastYearOfDecade = fns.startOfMonth(fns.endOfYear(fns.addYears(navDate, 12 - yearsDiff - 1)));

  const lock = {
    prevM: fns.isBefore(fns.subMonths(navDate, 1), minYear),
    nextM: fns.isAfter(fns.addMonths(navDate, 1), maxYear),
    prevY: fns.isBefore(fns.subYears(navDate, 1), minYear),
    nextY: fns.isAfter(fns.addYears(navDate, 1), maxYear),
    prevDec: fns.isBefore(fns.subYears(firstYearOfDecade, 1), minYear),
    nextDec: fns.isAfter(fns.addYears(lastYearOfDecade, 1), maxYear),
  };

  const handleCurrentNavDate = useCallback((date: Date) => setNavDate(date), [setNavDate]);

  const handlePrevMonth = useCallback(() => setNavDate((prevDate) => fns.subMonths(prevDate, 1)), []);
  const handleNextMonth = useCallback(() => setNavDate((prevDate) => fns.addMonths(prevDate, 1)), []);
  const handlePrevYear = useCallback((decr: number) => setNavDate((prevDate) => fns.subYears(prevDate, decr)), []);
  const handleNextYear = useCallback((incr: number) => setNavDate((prevDate) => fns.addYears(prevDate, incr)), []);

  return {
    lockNavigation: lock,
    currentNavDate: navDate,
    monthViewStartDate,
    yearsViewStartDate: firstYearOfDecade,
    handleCurrentNavDate,
    navigationHandlers: {
      handlePrevMonth,
      handleNextMonth,
      handlePrevYear,
      handleNextYear,
    },
  };
};
