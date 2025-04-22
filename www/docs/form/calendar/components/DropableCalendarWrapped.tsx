import React, { FC, useState, useCallback } from 'react';
import { Button } from '@kit-xyz/button';
import { Paper } from '@kit-xyz/paper';
import { isRange, formatDate, type RangeModifier } from '@kit-base/calendar';
import { useAnimation, useControledDropdown, useCombineControledAnimated } from '@kit-base/dropable';
import { CalendarDroppable } from '@kit-xyz/calendar';
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

export const DropableCalendarWrapped: FC = () => {
  const { colorMode } = useViewportContext();

  const controled = useControledDropdown();
  const animated = useAnimation();
  const { isOpen, ...dropableProps } = useCombineControledAnimated({ controled, animated, rest: {} });

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
      <CalendarDroppable
        {...dropableProps}
        openNode={
          <Button size='xs' active={isOpen} colorMode={colorMode}>
            {getCurrentDate(selected)}
          </Button>
        }
        selected={selected}
        onChange={onChange}
        colorMode={colorMode}
        closeOnSelect
        onClickOutside={dropableProps.closeDropdown}
      />
    </Paper>
  );
};
