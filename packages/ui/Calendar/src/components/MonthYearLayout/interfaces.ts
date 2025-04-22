import { Modifier, RangeModifier } from 'react-day-picker';

export interface MonthYearLayoutProps {
  dataTestId?: string;
  selected?: Date | RangeModifier;
  onChange: (month: Date) => void;
  disabled?: boolean;
  disabledDays?: Modifier | Modifier[];
  yearsView?: boolean;
  startDate: Date;
  startYear?: Date;
  className?: string;
}
