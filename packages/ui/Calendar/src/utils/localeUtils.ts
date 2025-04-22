import type { LocaleUtils } from 'react-day-picker';
import { LOCALES } from '@kit-base/uikit-utils';

import fns from '../date-fns';

import { locales } from './locales';
import { formatDate } from './dateHelpers';

/** форматирование полной даты */
function formatDay(d: Date, locale = LOCALES.RU): string {
  return `${locales[locale].WEEKDAYS_LONG[d.getDay()]}, ${d.getDate()} ${
    locales[locale].MONTHS_FULL_GENITIVE[d.getMonth()]
  } ${d.getFullYear()}`;
}

/** возвращает название месяца */
function formatMonthTitle(d: Date, locale = LOCALES.RU): string {
  return `${locales[locale].MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}

/** возвращает короткое название месяца */
function formatWeekdayShort(i: number, locale = LOCALES.RU): string {
  return locales[locale].WEEKDAYS_SHORT[i];
}

/** возвращает название дня недели */
function formatWeekdayLong(i: number, locale = LOCALES.RU): string {
  return locales[locale].WEEKDAYS_LONG[i];
}

/** с какого дня начинается неделя (0 - вс, 1 - пн, ...) */
function getFirstDayOfWeek(locale = LOCALES.RU): number {
  return locales[locale].FIRST_DAY;
}

export function parseDate(date: string, format = 'L'): Date {
  const d = formatDate(new Date(date), format);
  if (fns.isValid(d)) {
    return fns.toDate(new Date(d));
  }
  return fns.toDate(new Date());
}

/** возвращает список названий месяцев */
function getMonths(
  locale = LOCALES.RU,
): [string, string, string, string, string, string, string, string, string, string, string, string] {
  return locales[locale].MONTHS;
}

export const localeUtils: LocaleUtils = {
  formatDay,
  formatMonthTitle,
  formatWeekdayShort,
  formatWeekdayLong,
  getFirstDayOfWeek,
  getMonths,
  parseDate,
  formatDate,
};
