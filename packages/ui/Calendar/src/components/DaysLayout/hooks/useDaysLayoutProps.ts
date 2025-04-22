import { useState, useEffect, useCallback } from 'react';
import { RangeModifier, DateUtils } from 'react-day-picker';

import fns from '../../../date-fns';
import { isRange, sameRange } from '../../../utils';
import { DEFAULT_DATES_RANGE } from '../constants';
import { DaysLayoutProps, DaysLayoutTypes } from '../interfaces';

export const useDaysLayoutProps = (props: Omit<DaysLayoutProps, 'numberOfMonths' | 'locale'>) => {
  const { type = 'day', selected, onChange, disabledDays } = props;

  const [hoverRange, setHoverRange] = useState<RangeModifier>(DEFAULT_DATES_RANGE);

  const handleDateClick = useCallback(
    (date: Date) => {
      onChange(date);
    },
    [onChange],
  );

  const handleWeekClick = useCallback(
    (date: Date) => {
      onChange({
        from: fns.startOfWeek(date, { weekStartsOn: 1 }),
        to: fns.endOfWeek(date, { weekStartsOn: 1 }),
      });
    },
    [onChange],
  );

  const handleRangeClick = useCallback(
    (date: Date) => {
      const { from, to } = selected as RangeModifier;

      if ((!from && !to) || (!!from && !!to)) {
        onChange({ from: date, to: null });
        setHoverRange(DEFAULT_DATES_RANGE);
      }

      if (!!from && !to) {
        if (fns.isEqual(date, from)) return;

        const range = DateUtils.addDayToRange(date, selected as RangeModifier);

        onChange(range);
      }
    },
    [selected, onChange],
  );

  const onDayClick = useCallback(
    (date: Date) => {
      if (type === 'day') handleDateClick(date);
      if (type === 'week') handleWeekClick(date);
      if (type === 'range') handleRangeClick(date);
    },
    [type, handleDateClick, handleWeekClick, handleRangeClick],
  );

  const onDayMouseEnter = useCallback(
    (day: Date) => {
      if (!isRange(selected)) return;

      const { from, to } = selected as RangeModifier;

      if (type === 'range' && from && !to) {
        if (fns.isBefore(day, from)) setHoverRange({ from: day, to: from });
        if (fns.isAfter(day, from)) setHoverRange({ from, to: day });
      }

      if (type === 'week') {
        setHoverRange({ from: fns.startOfWeek(day, { weekStartsOn: 1 }), to: fns.endOfWeek(day, { weekStartsOn: 1 }) });
      }
    },
    [type, selected],
  );

  const onDayMouseLeave = useCallback(() => {
    if (type === 'week') {
      setHoverRange(DEFAULT_DATES_RANGE);
    }
  }, [type]);

  const resetRange = useCallback(() => {
    if (!isRange(selected)) return;

    if (type === 'range' && selected.from && !selected.to) {
      setHoverRange(DEFAULT_DATES_RANGE);
      onChange(DEFAULT_DATES_RANGE);
    }
  }, [selected, type, onChange]);

  useEffect(() => setHoverRange(DEFAULT_DATES_RANGE), [type]);

  const dayModifiers = {
    hoverRange,
    beforeDays: isRange(selected) && { before: selected.from },
    hoverRangeStart: hoverRange.from,
    hoverRangeEnd: !sameRange(hoverRange) && hoverRange.to,
    start: isRange(selected) ? fns.toDate(selected.from as Date) : selected,
    end: isRange(selected) && fns.toDate(selected.to as Date),
  };

  const modifiresTable: Record<DaysLayoutTypes, object> = {
    day: dayModifiers,
    range: dayModifiers,
    week: {
      weekHover: hoverRange,
      weekSelected: isRange(selected) && selected,
    },
  };

  const modifiers = {
    disabledDays,
    ...modifiresTable[type],
  };

  return {
    modifiers,
    onDayClick,
    onDayMouseEnter,
    onDayMouseLeave,
    resetRange,
  };
};
