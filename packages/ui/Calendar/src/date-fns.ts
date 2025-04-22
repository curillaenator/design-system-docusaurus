/* eslint-disable */
import addDays from 'date-fns/addDays';
import parse from 'date-fns/parse';
import getDaysInMonth from 'date-fns/getDaysInMonth';
import format from 'date-fns/format';
import setMilliseconds from 'date-fns/setMilliseconds';
import setSeconds from 'date-fns/setSeconds';
import setMinutes from 'date-fns/setMinutes';
import setHours from 'date-fns/setHours';
import toDate from 'date-fns/toDate';
import startOfYear from 'date-fns/startOfYear';
import endOfYear from 'date-fns/endOfYear';
import setMonth from 'date-fns/setMonth';
import getMonth from 'date-fns/getMonth';
import isBefore from 'date-fns/isBefore';
import isEqual from 'date-fns/isEqual';
import isAfter from 'date-fns/isAfter';
import startOfWeek from 'date-fns/startOfWeek';
import endOfWeek from 'date-fns/endOfWeek';
import isSameMonth from 'date-fns/isSameMonth';
import startOfMonth from 'date-fns/startOfMonth';
import endOfMonth from 'date-fns/endOfMonth';
import subMonths from 'date-fns/subMonths';
import addMonths from 'date-fns/addMonths';
import isValid from 'date-fns/isValid';
import differenceInMonths from 'date-fns/differenceInMonths';
import getYear from 'date-fns/getYear';
import isSameDay from 'date-fns/isSameDay';
import subYears from 'date-fns/subYears';
import subDays from 'date-fns/subDays';
import addYears from 'date-fns/addYears';
import addWeeks from 'date-fns/addWeeks';
import subWeeks from 'date-fns/subWeeks';

import ruLocale from 'date-fns/locale/ru';
import enLocale from 'date-fns/locale/en-US';

export const localeMap = {
  en: enLocale,
  ru: ruLocale,
};

const fns = {
  addDays,
  parse,
  getDaysInMonth,
  format,
  setMilliseconds,
  setSeconds,
  setMinutes,
  setHours,
  toDate,
  startOfYear,
  endOfYear,
  setMonth,
  getMonth,
  isBefore,
  isEqual,
  isAfter,
  startOfWeek,
  endOfWeek,
  isSameMonth,
  startOfMonth,
  endOfMonth,
  subMonths,
  addMonths,
  isValid,
  differenceInMonths,
  getYear,
  isSameDay,
  subYears,
  subDays,
  addYears,
  addWeeks,
  subWeeks,
};

export default fns;
