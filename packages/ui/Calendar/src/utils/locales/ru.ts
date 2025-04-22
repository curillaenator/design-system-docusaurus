import { Locale } from './interfaces';
import { MONTHS_FULL_GENITIVE } from './constants';

export const ru: Locale = {
  WEEKDAYS_LONG: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
  WEEKDAYS_SHORT: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  MONTHS: [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ],
  FIRST_DAY: 1, // Пн
  MONTHS_FULL_GENITIVE,
  PLACEHOLDER: 'ДД.ММ.ГГГГ',
};
