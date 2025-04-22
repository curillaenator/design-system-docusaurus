import { DaysLayoutProps } from '@kit-base/calendar';

export type CalendarViewType = 'day' | 'year' | 'month';
export type DaysLayoutType = Exclude<DaysLayoutProps['type'], 'week'>;

export interface CalendarProps extends Omit<DaysLayoutProps, 'type'> {
  dataTestId?: string;
  className?: string;
  disableTypeSwitch?: boolean;
  minYear?: Date;
  maxYear?: Date;
  startMonth?: number;
  viewType?: CalendarViewType;
  selectedAutoreset?: boolean;
  colorMode?: 'light' | 'dark' | 'color';
  selectType?: DaysLayoutType;
}
