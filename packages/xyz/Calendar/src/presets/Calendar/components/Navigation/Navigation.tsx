import React, { FC } from 'react';
import cn from 'classnames';
import { Button } from '@kit-xyz/button';
import CaretLeftIcon from '@kit-xyz/icon/src/assets/solid/CaretLeftThinIcon';
import CaretRightIcon from '@kit-xyz/icon/src/assets/solid/CaretRightThinIcon';

import { useNavigationProps } from './hooks/useNavigationProps';
import { NavigationProps } from './interfaces';
import styles from './styles.module.scss';

export const Navigation: FC<NavigationProps> = (props) => {
  const {
    dataTestId,
    month,
    year,
    yearsPeriod,
    showMonths,
    showYears,
    showPeriod,
    titleNotClickable,
    calendarViewType,
    lockNavigation,
    navigationHandlers,
    setViewTypeMonth,
    setViewTypeYear,
    colorMode,
  } = useNavigationProps(props);

  const { handlePrevMonth, handleNextMonth, handlePrevYear, handleNextYear } = navigationHandlers;

  return (
    <div className={styles.container} data-testid={`${dataTestId}.Navigation`}>
      <div className={styles.navButtons}>
        {calendarViewType === 'day' ? (
          <Button
            onClick={handlePrevMonth}
            IconLeft={CaretLeftIcon}
            appearance='primary-transparent'
            size='xs'
            dataTestId={`${dataTestId}.Navigation.PrevMonth`}
            disabled={lockNavigation.prevM}
            colorMode={colorMode}
          />
        ) : (
          <Button
            onClick={() => handlePrevYear(calendarViewType === 'year' ? 12 : 1)}
            IconRight={CaretLeftIcon}
            appearance='primary-transparent'
            size='xs'
            dataTestId={`${dataTestId}.Navigation.PrevYear`}
            disabled={calendarViewType === 'year' ? lockNavigation.prevDec : lockNavigation.prevY}
            colorMode={colorMode}
          />
        )}
      </div>

      <div
        data-testid={`${dataTestId}.Navigation.Title`}
        className={cn(styles.title, {
          [styles.title_nonclickable]: titleNotClickable,
        })}
      >
        {titleNotClickable ? (
          <>
            {showMonths && <span>{month}</span>}
            {showYears && <span>{year}</span>}
            {showPeriod && <span>{yearsPeriod}</span>}
          </>
        ) : (
          <>
            {showMonths && (
              <Button
                data-testid={`${dataTestId}.Navigation.Title.Month`}
                className={styles.textButton}
                onClick={setViewTypeMonth}
                appearance='primary-transparent'
                size='xs'
                colorMode={colorMode}
              >
                {month}
              </Button>
            )}

            {showYears && (
              <Button
                data-testid={`${dataTestId}.Navigation.Title.Year`}
                className={styles.textButton}
                onClick={setViewTypeYear}
                appearance='primary-transparent'
                size='xs'
                colorMode={colorMode}
              >
                {year}
              </Button>
            )}
          </>
        )}
      </div>

      <div className={styles.navButtons}>
        {calendarViewType === 'day' ? (
          <Button
            onClick={handleNextMonth}
            IconLeft={CaretRightIcon}
            appearance='primary-transparent'
            size='xs'
            dataTestId={`${dataTestId}.Navigation.NextMonth`}
            disabled={lockNavigation.nextM}
            colorMode={colorMode}
          />
        ) : (
          <Button
            onClick={() => handleNextYear(calendarViewType === 'year' ? 12 : 1)}
            IconLeft={CaretRightIcon}
            appearance='primary-transparent'
            size='xs'
            dataTestId={`${dataTestId}.Navigation.NextYear`}
            disabled={calendarViewType === 'year' ? lockNavigation.nextDec : lockNavigation.nextY}
            colorMode={colorMode}
          />
        )}
      </div>
    </div>
  );
};
