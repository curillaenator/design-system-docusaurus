import React, { FC } from 'react';
import cn from 'classnames';

import styles from './styles/pagination.module.scss';
import type { PaginationProps, PaginationComponents } from './interfaces';
import { usePagination } from './hooks/usePaginationValues';
import { VERSION } from './version';
import { DEFAULT_TEST_ID } from './constants';

const DefaultButton: PaginationComponents['NavigationButton'] = ({ direction, ...rest }) => (
  <button type='button' {...rest} />
);

const Pagination: FC<PaginationProps> = ({
  onPrevButtonClick,
  onNextButtonClick,
  onPageButtonClick,
  className,
  dataTestId = DEFAULT_TEST_ID,
  components = {},
  ...params
}) => {
  const { NavigationButton = DefaultButton, PageButton = DefaultButton } = components;
  const { page, isPrevDisabled, isNextDisabled, items } = usePagination(params);
  return (
    <ul className={cn(styles.pagination, className)} data-version={VERSION} data-testid={dataTestId}>
      <li>
        <NavigationButton disabled={isPrevDisabled} onClick={onPrevButtonClick} direction='prev' />
      </li>

      {items.map((...[props, i]) => (
        <li key={i}>
          <PageButton
            {...props}
            active={props.children === page}
            onClick={
              onPageButtonClick && typeof props.children === 'number'
                ? () => onPageButtonClick(props.children as number)
                : undefined
            }
          />
        </li>
      ))}

      <li>
        <NavigationButton disabled={isNextDisabled} onClick={onNextButtonClick} direction='next' />
      </li>
    </ul>
  );
};

export { Pagination };
