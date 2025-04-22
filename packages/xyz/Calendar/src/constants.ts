import { fns } from '@kit-base/calendar';
import IMask from 'imask';

export const DEFAULT_TEST_ID = 'XYZKit.Calendar';

export const MIN_YEAR = fns.startOfYear(new Date(1900, 0, 1));
export const MAX_YEAR = fns.startOfYear(new Date(2100, 0, 1));
export const DATE_FORMAT = 'ddMMyyyy';
export const MASKED_DATE_FORMAT = 'dd.MM.yyyy';
export const EMPTY_DATE = '..';

export const DATE_MASK = {
  mask: Date,
  pattern: 'd{.}`m{.}Y',
  blocks: {
    d: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 31,
      maxLength: 2,
      placeholderChar: 'д',
    },
    m: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 12,
      maxLength: 2,
      placeholderChar: 'м',
    },
    Y: {
      mask: IMask.MaskedRange,
      from: 1900,
      to: 2100,
      placeholderChar: 'г',
    },
  },

  format(date: Date) {
    let day: number | string = date.getDate();
    let month: number | string = date.getMonth() + 1;
    const year: number | string = date.getFullYear();

    if (day < 10) {
      day = `0${day}`;
    }
    if (month < 10) {
      month = `0${month}`;
    }

    return [day, month, year].join('.');
  },

  parse(str: string) {
    const yearMonthDay = str.split('.');
    return new Date(Number(yearMonthDay[2]), Number(yearMonthDay[1]) - 1, Number(yearMonthDay[0]));
  },

  autofix: true,
  lazy: false,
  overwrite: true,
};
