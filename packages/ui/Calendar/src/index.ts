import fns, { localeMap } from './date-fns';

export type { Modifier, RangeModifier } from 'react-day-picker';
export {
  DaysLayout,
  type OmitedDaysLayoutProps as DaysLayoutProps,
  DEFAULT_DATES_RANGE,
} from './components/DaysLayout';
export { MonthYearLayout, type MonthYearLayoutProps } from './components/MonthYearLayout';

export { fns, localeMap };
export * from './utils';
