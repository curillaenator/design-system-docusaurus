import { useState, useCallback, useRef, useEffect } from 'react';
import cn from 'classnames';

import type { PagesPaginationProps } from '../interfaces';
import styles from '../styles.module.scss';

import { PaginationManager, type PaginationButtons } from './utils';

export const usePagesPaginationProps = (props: PagesPaginationProps) => {
  const {
    id,
    pages,
    currentPage = 1,
    maxItemsShown = 2,
    size = 'xs',
    shape = 'rounded',
    appearance = 'primary-solid',
    colorMode = 'light',
    className,
    ...rest
  } = props;

  const [tabs, setTabs] = useState<PaginationButtons>({
    first: null,
    shiftLeft: null,
    range: [],
    shiftRight: null,
    last: null,
  });

  const [rangeIndex, setRangeIndex] = useState<number>(1);
  const rangeIndexSetter = useCallback((newRangeIndex: number) => setRangeIndex(newRangeIndex), []);

  const nav = useRef(
    new PaginationManager(pages, {
      paginatorId: id,
      maxRangeLenght: maxItemsShown,
    }),
  );

  useEffect(() => {
    if (currentPage <= maxItemsShown) {
      setRangeIndex(1);
      return;
    }

    let roller;

    if (maxItemsShown <= 2) {
      roller = (currentPage + 1) % maxItemsShown;
    } else {
      roller = (currentPage - 1) % maxItemsShown;
    }

    setRangeIndex(currentPage - roller);
  }, [currentPage, maxItemsShown]);

  useEffect(() => {
    const update = nav.current.update.bind(nav.current) as typeof nav.current.update;
    setTabs(update(rangeIndex, pages));
  }, [rangeIndex, pages]);

  return {
    ...rest,
    id,
    colorMode,
    pages,
    currentPage,
    navTab: tabs,
    rangeIndex,
    rangeIndexSetter,
    handleShiftLeft: nav.current.handleShiftLeft.bind(nav.current) as typeof nav.current.handleShiftLeft,
    handleShiftRight: nav.current.handleShiftRight.bind(nav.current) as typeof nav.current.handleShiftRight,
    className: cn(
      styles.container,
      styles[`_size_${size}`],
      styles[`_color-${appearance}_${colorMode}`],
      styles[`_shape_${shape}`],
      className,
    ),
  };
};
