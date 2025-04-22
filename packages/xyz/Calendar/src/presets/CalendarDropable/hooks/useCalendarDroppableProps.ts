import { CalendarProps } from '../../Calendar';
import { CalendarInternalDroppableProps, PickedDroppableProps, useCalendarDroppableFn } from '../interfaces';
import { RESET_SIZINGS } from '../constants';
import { DEFAULT_TEST_ID } from '../../../constants';

export const useCalendarDroppableProps: useCalendarDroppableFn = (props) => {
  const {
    dataTestId = DEFAULT_TEST_ID,
    colorMode,

    appendToId,
    placement = 'bottom-start',
    openNodeClassName,
    openNode,
    offset = [0, 8],
    closeOnSelect = false,
    visible,
    onClickOutside,

    disabledDays,
    initialCurrentMonth,
    selected,
    onChange,
    selectType = 'day',
    viewType = 'day',
    disableTypeSwitch = false,
    minYear,
    maxYear,
    startMonth = 0,
    selectedAutoreset,

    ...rest
  } = props;

  const droppableProps: PickedDroppableProps & CalendarInternalDroppableProps = {
    dataTestId: `${dataTestId}.Dropable`,
    openNode,
    offset,
    placement,
    appendToId,
    openNodeClassName,
    closeOnItemClick: selectType === 'range' && viewType === 'day' ? false : closeOnSelect,
    visible,
    onClickOutside,
  };

  const calendarProps: CalendarProps = {
    dataTestId: `${dataTestId}.Calendar`,
    disabledDays,
    initialCurrentMonth,
    selected,
    onChange,
    selectType,
    viewType,
    disableTypeSwitch,
    minYear,
    maxYear,
    startMonth,
    selectedAutoreset,
    colorMode,
  };

  return {
    droppableProps: { ...RESET_SIZINGS, ...droppableProps, ...rest },
    calendarProps,
  };
};
