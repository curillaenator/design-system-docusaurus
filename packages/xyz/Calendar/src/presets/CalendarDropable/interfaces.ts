import { DropableProps as BaseDropdownProps } from '@kit-base/dropable';

import { CalendarProps } from '../Calendar';

type Placements = Extract<BaseDropdownProps['placement'], 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end'>;

export type PickedDroppableProps = Pick<
  BaseDropdownProps,
  | 'dataTestId'
  | 'offset'
  | 'disabled'
  | 'closeOnItemClick'
  | 'openNode'
  | 'placement'
  | 'appendToId'
  | 'openNodeClassName'
  | 'onClickOutside'
>;

export interface CalendarDroppableProps extends Omit<CalendarProps, 'className'>, PickedDroppableProps {
  placement?: Placements;
  closeOnSelect?: boolean;
}

export interface CalendarInternalDroppableProps {
  visible?: boolean;
}

export type useCalendarDroppableFn = {
  (props: CalendarDroppableProps & CalendarInternalDroppableProps): {
    droppableProps: PickedDroppableProps & CalendarInternalDroppableProps;
    calendarProps: CalendarProps;
  };
};
