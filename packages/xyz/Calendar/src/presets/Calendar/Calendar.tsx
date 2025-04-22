import React, { FC } from 'react';
import { DaysLayout, MonthYearLayout } from '@kit-base/calendar';

import { VERSION } from '../../version';
import { MIN_YEAR, MAX_YEAR, DEFAULT_TEST_ID } from '../../constants';

import { Navigation } from './components';
import { useCalendarProps, useCalendarClassName } from './hooks';
import { CalendarProps } from './interfaces';
import styles from './calendar.module.scss';
import './calendarStyles.scss';

export const Calendar: FC<CalendarProps> = (props) => {
  const {
    dataTestId = DEFAULT_TEST_ID,
    selectType = 'day',
    disableTypeSwitch = false,

    selected,
    disabledDays,

    lockNavigation,
    currentNavDate,
    handleCurrentNavDate,
    navigationHandlers,
    onChange,

    view,
    changeView,

    startMonth = 0,
    monthViewStartDate,
    yearsViewStartDate,
    onMonth,
    onYear,

    minYear = MIN_YEAR,
    maxYear = MAX_YEAR,
    colorMode,
  } = useCalendarProps(props);

  const className = useCalendarClassName(props);

  return (
    <div data-testid={dataTestId} data-analytics={DEFAULT_TEST_ID} data-version={VERSION} className={className}>
      <Navigation
        dataTestId={dataTestId}
        minYear={minYear}
        maxYear={maxYear}
        startMonth={startMonth}
        lockNavigation={lockNavigation}
        yearsViewStartDate={yearsViewStartDate}
        monthViewStartDate={monthViewStartDate}
        currentNavDate={currentNavDate}
        calendarViewType={view}
        setViewTypeMonth={() => changeView('month')}
        setViewTypeYear={() => changeView('year')}
        navigationHandlers={navigationHandlers}
        disableTypeSwitch={disableTypeSwitch}
        colorMode={colorMode}
      />

      {view === 'month' && (
        <MonthYearLayout
          dataTestId={`${dataTestId}.Months`}
          selected={selected}
          onChange={onMonth}
          startDate={monthViewStartDate}
          disabledDays={disabledDays}
        />
      )}

      {view === 'year' && (
        <MonthYearLayout
          dataTestId={`${dataTestId}.Years`}
          selected={selected}
          onChange={onYear}
          startDate={yearsViewStartDate}
          yearsView
          disabledDays={disabledDays}
          className={styles.monthYearLayout}
        />
      )}

      {view === 'day' && (
        <DaysLayout
          dataTestId={`${dataTestId}.Days`}
          selected={selected}
          handleCurrentNavDate={handleCurrentNavDate}
          currentNavDate={currentNavDate}
          onChange={onChange}
          disabledDays={disabledDays}
          type={selectType}
        />
      )}
    </div>
  );
};
