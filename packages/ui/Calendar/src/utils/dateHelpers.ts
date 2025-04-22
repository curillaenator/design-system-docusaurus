import fns, { localeMap } from '../date-fns';

type UnitType = 'month' | 'week' | 'day' | 'year';

export const addDate = (date: Date, unit: UnitType, amount = 1) => {
  const unitToAdd: Record<UnitType, Date> = {
    day: fns.addDays(date, amount),
    week: fns.addWeeks(date, amount),
    month: fns.addMonths(date, amount),
    year: fns.addYears(date, amount),
  };

  return unitToAdd[unit];
};

export const substractDate = (date: Date, unit: UnitType, amount = 1) => {
  const unitToSub: Record<UnitType, Date> = {
    day: fns.subDays(date, amount),
    week: fns.subWeeks(date, amount),
    month: fns.subMonths(date, amount),
    year: fns.subYears(date, amount),
  };

  return unitToSub[unit];
};

export const formatDate = (date: Date, format: string) => fns.format(date, format, { locale: localeMap.ru });
