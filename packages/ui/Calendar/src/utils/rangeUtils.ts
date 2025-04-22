import { RangeModifier } from 'react-day-picker';

import fns from '../date-fns';

export function isRange(selected: Date | RangeModifier | undefined): selected is RangeModifier {
  return (selected as RangeModifier)?.from !== undefined || (selected as RangeModifier)?.to !== undefined;
}

export const sameRange = (dates: RangeModifier) => !!dates.from && !!dates.to && fns.isEqual(dates.from, dates.to);

export const validRange = (dates: RangeModifier) => fns.isValid(dates.from) && fns.isValid(dates.to);

export const rangeIsSet = (dates: RangeModifier) => validRange(dates) && !sameRange(dates);
