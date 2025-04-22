import { formatDate, addDate } from '@kit-base/calendar';

import { NavigationProps } from '../interfaces';

const formatYearsPeriod = (yearDate: Date, increment: number) =>
  `${formatDate(yearDate, 'yyyy')}-${formatDate(addDate(yearDate, 'year', increment), 'yyyy')}`;

export const useNavigationProps = (props: NavigationProps) => {
  const {
    calendarViewType,
    currentNavDate,
    startMonth,
    monthViewStartDate,
    yearsViewStartDate,
    disableTypeSwitch,
    ...rest
  } = props;

  const year =
    calendarViewType === 'month' && startMonth > 1 && startMonth <= 12
      ? formatYearsPeriod(currentNavDate, 1)
      : formatDate(currentNavDate, 'yyyy');

  return {
    ...rest,
    calendarViewType,
    currentNavDate,

    month: formatDate(currentNavDate, 'LLLL'),
    year,
    yearsPeriod: formatYearsPeriod(yearsViewStartDate, 12),

    showMonths: calendarViewType === 'day',
    showYears: calendarViewType === 'day' || calendarViewType === 'month',
    showPeriod: calendarViewType === 'year',

    titleNotClickable: disableTypeSwitch || calendarViewType === 'year',
  };
};
