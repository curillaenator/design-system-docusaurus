import type { Modifier, RangeModifier } from 'react-day-picker';

export type DaysLayoutTypes = 'day' | 'week' | 'range';

export interface DaysLayoutProps {
  currentNavDate: Date;
  handleCurrentNavDate: (month: Date) => void;
  dataTestId?: string;
  disabledDays?: Modifier | Modifier[];
  initialCurrentMonth?: Date;
  selected?: Date | RangeModifier;
  onChange: (dates?: Date | RangeModifier) => void;
  type?: DaysLayoutTypes;
}

export type OmitedDaysLayoutProps = Omit<DaysLayoutProps, 'currentNavDate' | 'handleCurrentNavDate'>;
