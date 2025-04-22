import React, { FC } from 'react';
import { Button } from '@kit-xyz/button';
import EllipsisIcon from '@kit-xyz/icon/src/assets/solid/EllipsisIcon';

import { DEFAULT_TEST_ID } from '../../constants';
import { VERSION } from '../../version';

import { usePagesPaginationProps } from './hooks/usePagesPaginationProps';
import { PagesPaginationProps } from './interfaces';

export const PagesPagination: FC<PagesPaginationProps> = (props) => {
  const {
    id, // eslint-disable-line no-unused-vars
    pages,
    currentPage,
    dataTestId = DEFAULT_TEST_ID,
    navTab,
    onPageChange,
    className,
    rangeIndex,
    colorMode,
    rangeIndexSetter,
    handleShiftLeft,
    handleShiftRight,
    ...rest
  } = usePagesPaginationProps(props);

  const { first, shiftLeft, range, shiftRight, last } = navTab;

  return (
    <nav
      {...rest}
      data-testid={dataTestId}
      data-analytics={DEFAULT_TEST_ID}
      data-version={VERSION}
      className={className}
    >
      {first && (
        <Button
          {...first}
          colorMode={colorMode}
          appearance='tertiary-solid'
          active={currentPage === 1}
          onClick={(e) => onPageChange(+e.currentTarget.value)}
        />
      )}

      {shiftLeft && (
        <Button
          {...shiftLeft}
          colorMode={colorMode}
          appearance='tertiary-solid'
          tabIndex={0}
          IconLeft={EllipsisIcon}
          onClick={() => handleShiftLeft(rangeIndex, rangeIndexSetter)}
        />
      )}

      {range.map((pageButton) => (
        <Button
          {...pageButton}
          colorMode={colorMode}
          appearance='tertiary-solid'
          key={pageButton.id}
          tabIndex={0}
          dataTestId={`${dataTestId}.${pageButton.id}`}
          active={currentPage === +(pageButton.value as number)}
          onClick={(e) => onPageChange(+e.currentTarget.value)}
        />
      ))}

      {shiftRight && (
        <Button
          {...shiftRight}
          colorMode={colorMode}
          appearance='tertiary-solid'
          tabIndex={0}
          IconLeft={EllipsisIcon}
          onClick={() => handleShiftRight(rangeIndex, rangeIndexSetter)}
        />
      )}

      {last && (
        <Button
          {...last}
          colorMode={colorMode}
          appearance='tertiary-solid'
          active={currentPage === pages}
          onClick={(e) => onPageChange(+e.currentTarget.value)}
        />
      )}
    </nav>
  );
};
