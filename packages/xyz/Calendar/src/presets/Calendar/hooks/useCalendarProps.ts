import { useState, useCallback, useEffect } from 'react';
import { fns, DEFAULT_DATES_RANGE, isRange } from '@kit-base/calendar';

import { DEFAULT_TEST_ID } from '../../../constants';
import { CalendarProps, CalendarViewType } from '../interfaces';

import { useNavigation } from './useNavigation';

export const useCalendarProps = (props: CalendarProps) => {
  const {
    dataTestId = DEFAULT_TEST_ID,
    selectType = 'day',
    viewType = 'day',
    className,
    disableTypeSwitch,
    onChange,
    selectedAutoreset = true,
    colorMode = 'light',
    selected,
    ...rest
  } = props;

  const {
    currentNavDate,
    lockNavigation,
    monthViewStartDate,
    yearsViewStartDate,
    handleCurrentNavDate,
    navigationHandlers,
  } = useNavigation(props);

  const [view, setView] = useState<CalendarViewType>(viewType);
  const changeView = useCallback((newView: CalendarViewType) => setView(newView), []);

  const onMonth = useCallback(
    (activeMonth: Date) => {
      if (viewType !== 'day') {
        onChange({ from: activeMonth, to: fns.endOfMonth(activeMonth) });
        return;
      }

      setView('day');
      handleCurrentNavDate(activeMonth);
    },
    [viewType, onChange, handleCurrentNavDate],
  );

  const onYear = useCallback(
    (activeYear: Date) => {
      if (viewType !== 'day') {
        onChange({ from: activeYear, to: fns.endOfYear(activeYear) });
        return;
      }

      setView('month');
      handleCurrentNavDate(activeYear);
    },
    [viewType, onChange, handleCurrentNavDate],
  );

  useEffect(() => setView(viewType), [viewType]);

  useEffect(() => {
    if (!selectedAutoreset) return;

    if (selectType !== 'day') {
      onChange(DEFAULT_DATES_RANGE);
    } else {
      onChange(undefined);
    }
  }, [selectType, selectedAutoreset, onChange]);

  useEffect(() => {
    if (selected) {
      if (isRange(selected)) {
        if (selected?.from) {
          handleCurrentNavDate(selected?.from);
        }
      } else {
        handleCurrentNavDate(selected);
      }
    }
  }, [handleCurrentNavDate, selected, selectType]);

  return {
    ...rest,
    colorMode,
    dataTestId,
    selectType: selectType || 'day',
    onChange,
    selected,
    view,
    changeView,

    disableTypeSwitch: viewType !== 'day' || disableTypeSwitch,
    lockNavigation,
    currentNavDate,
    navigationHandlers,
    handleCurrentNavDate,

    monthViewStartDate,
    yearsViewStartDate,
    onMonth,
    onYear,
  };
};
