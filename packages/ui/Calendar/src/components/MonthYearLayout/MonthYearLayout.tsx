import React, { FC } from 'react';
import cn from 'classnames';

import fns from '../../date-fns';
import { DEFAULT_TEST_ID } from '../../constants';
import { VERSION } from '../../version';

import { useMonthYearLayoutProps } from './hooks/useMonthYearLayout';
import { MonthYearLayoutProps } from './interfaces';
import styles from './styles.module.scss';

export const MonthYearLayout: FC<MonthYearLayoutProps> = (props) => {
  const {
    dataTestId,
    disabledDays,
    onChange,
    disabled,
    yearsView = false,
    datesMap,
    formatLabel,
    isSelected,
    className,
  } = useMonthYearLayoutProps(props);

  const todayMonth = fns.format(new Date(), 'yyyy-MM');
  const todayYear = fns.format(new Date(), 'yyyy');

  return (
    <div
      className={cn(styles.months, className)}
      data-testid={dataTestId}
      data-analytics={DEFAULT_TEST_ID}
      data-version={VERSION}
    >
      {datesMap.map((cellDate) => {
        const dateIndex = fns.format(cellDate, 'yyyy-MM');

        const isActive = !disabled && isSelected(cellDate);
        const isCurrent = yearsView ? dateIndex.includes(todayYear) : todayMonth === dateIndex;

        const disabledCell =
          // @ts-expect-error
          fns.isBefore(fns.addDays(cellDate, 1), disabledDays?.before) || fns.isAfter(cellDate, disabledDays?.after);

        return (
          <button
            key={`date-${dateIndex}`}
            type='button'
            data-testid={`${dataTestId}.${yearsView ? fns.format(cellDate, 'yyyy') : fns.format(cellDate, 'yyyy-MM')}`}
            onClick={() => onChange(cellDate)}
            disabled={disabledCell || disabled}
            className={cn(styles.monthButton, {
              [styles.monthButton_active]: isActive,
              [styles.monthButton_current]: isCurrent,
              [styles.monthButton_withHover]: !(isActive || disabledCell || disabled),
            })}
          >
            {formatLabel(cellDate)}
          </button>
        );
      })}
    </div>
  );
};
