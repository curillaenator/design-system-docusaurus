import { CalendarViewType } from '../../interfaces';

export interface NavigationProps {
  dataTestId: string;
  calendarViewType: CalendarViewType;
  setViewTypeMonth: () => void;
  setViewTypeYear: () => void;
  disableTypeSwitch: boolean;
  startMonth: number;
  minYear: Date;
  maxYear: Date;
  monthViewStartDate: Date;
  yearsViewStartDate: Date;
  currentNavDate: Date;
  navigationHandlers: {
    handlePrevMonth: () => void;
    handleNextMonth: () => void;
    handlePrevYear: (decr: number) => void;
    handleNextYear: (incr: number) => void;
  };
  lockNavigation: {
    prevM: boolean;
    prevY: boolean;
    nextM: boolean;
    nextY: boolean;
    prevDec: boolean;
    nextDec: boolean;
  };
  colorMode?: 'light' | 'dark' | 'color';
}
