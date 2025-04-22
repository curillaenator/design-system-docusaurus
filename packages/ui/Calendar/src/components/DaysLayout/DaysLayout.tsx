import React, { FC } from 'react';
import DayPicker from 'react-day-picker';
import { LOCALES } from '@kit-base/uikit-utils';

import { localeUtils } from '../../utils';
import { DEFAULT_TEST_ID } from '../../constants';
import { VERSION } from '../../version';

import { DaysLayoutProps } from './interfaces';
import { useDaysLayoutProps } from './hooks/useDaysLayoutProps';

import './styles/defaultStyles.scss';

export const DaysLayout: FC<DaysLayoutProps> = (props) => {
  const { dataTestId, selected, currentNavDate, handleCurrentNavDate } = props;

  const { modifiers, onDayClick, onDayMouseEnter, onDayMouseLeave, resetRange } = useDaysLayoutProps(props);

  return (
    <div data-testid={dataTestId} data-analytics={DEFAULT_TEST_ID} data-version={VERSION} onMouseLeave={resetRange}>
      <DayPicker
        localeUtils={localeUtils}
        locale={LOCALES.RU}
        month={currentNavDate}
        modifiers={modifiers}
        onMonthChange={handleCurrentNavDate}
        showOutsideDays
        onDayClick={onDayClick}
        navbarElement={(): JSX.Element => <></>}
        captionElement={(): JSX.Element => <></>}
        selectedDays={selected}
        onDayMouseEnter={onDayMouseEnter}
        onDayMouseLeave={onDayMouseLeave}
        fixedWeeks
      />
    </div>
  );
};
