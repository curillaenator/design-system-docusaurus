import React, { FC, useState, useCallback } from 'react';
import { Paper } from '@kit-xyz/paper';
import { isRange, formatDate, type RangeModifier } from '@kit-base/calendar';
import { Calendar, type CalendarProps } from '@kit-xyz/calendar';
import { useViewportContext } from '@site/src/components/DocViewport';
import styles from '@site/src/components/Card/display.module.scss';

export const getCurrentDate = (date: Date | RangeModifier | undefined) => {
  if (!date) return 'Не выбрано';
  if (isRange(date)) {
    return `${date.from ? formatDate(date.from, 'dd MMM yy') : 'не выбрано'} - ${
      date.to ? formatDate(date.to, 'dd MMM yy') : 'не выбрано'
    }`;
  }
  return formatDate(date, 'dd MMM yy');
};

export const CalendarWrapped: FC<CalendarProps> = (props) => {
  const { colorMode } = useViewportContext();

  const [selected, setSelected] = useState<Date | RangeModifier | undefined>(undefined);
  const onChange = useCallback((date: Date | RangeModifier) => setSelected(date), []);

  return (
    <Paper
      colorMode={colorMode}
      fullwidth
      smoothedCorners
      appearance='solid-alt'
      borderRadius='l'
      padding='xl'
      className={styles.paper}
    >
      <span
        style={{
          marginBottom: 32,
          color: colorMode === 'light' ? 'var(--color-neutral-700)' : 'var(--color-neutral-100)',
        }}
      >
        Выбранная дата: {getCurrentDate(selected)}
      </span>

      <Calendar {...props} onChange={onChange} selected={selected} colorMode={colorMode} />
    </Paper>
  );
};
