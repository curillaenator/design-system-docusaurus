import { useCallback } from 'react';

import fns from '../../../date-fns';
import { addDate, formatDate, isRange } from '../../../utils';
import { MONTH_YEAR_SET, MONTH_ASSOC } from '../constants';
import { MonthYearLayoutProps } from '../interfaces';

export const useMonthYearLayoutProps = (props: MonthYearLayoutProps) => {
  const { yearsView, startDate, selected, ...rest } = props;

  const isSelected = useCallback(
    (cellDate: Date) => {
      if (!selected) return !!selected;

      if (yearsView) {
        return fns.getYear(isRange(selected) ? (selected.from as Date) : selected) === fns.getYear(cellDate);
      }

      return fns.isSameMonth(cellDate, isRange(selected) ? (selected.from as Date) : selected);
    },
    [selected, yearsView],
  );

  const formatLabel = useCallback(
    (cellDate: Date) => {
      if (yearsView) return formatDate(cellDate, 'yyyy');

      const month = formatDate(cellDate, 'MM') as string;

      return MONTH_ASSOC[month];
    },
    [yearsView],
  );

  const datesMap = MONTH_YEAR_SET.map((increment) => {
    if (yearsView) return fns.startOfYear(addDate(startDate, 'year', increment));
    return fns.startOfMonth(addDate(startDate, 'month', increment));
  });

  return {
    ...rest,
    yearsView,
    datesMap,
    isSelected,
    formatLabel,
  };
};
