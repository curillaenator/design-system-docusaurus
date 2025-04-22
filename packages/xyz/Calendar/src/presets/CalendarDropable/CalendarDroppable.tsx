import React, { FC } from 'react';
import { Dropable, useClickHandler } from '@kit-base/dropable';

import { Calendar, CalendarProps } from '../Calendar';

import { useCalendarDroppableProps } from './hooks/useCalendarDroppableProps';
import { CalendarDroppableProps, CalendarInternalDroppableProps } from './interfaces';
import styles from './styles.module.scss';

const WithDroppableContext: FC<CalendarProps> = (props) => {
  const { clickHandler } = useClickHandler(props.onChange);
  return <Calendar {...props} onChange={clickHandler} />;
};

export const CalendarDroppable: FC<CalendarDroppableProps & CalendarInternalDroppableProps> = (props) => {
  const { droppableProps, calendarProps } = useCalendarDroppableProps(props);

  return (
    <Dropable {...droppableProps} className={styles.dropableCssv}>
      <WithDroppableContext {...calendarProps} />
    </Dropable>
  );
};
