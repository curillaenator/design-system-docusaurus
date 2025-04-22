import { useMemo } from 'react';

import type { PageButtonProps } from '../interfaces';

interface UsePaginationParameters {
  count: number;
  page: number;
}

type ItemCreatorFn = {
  ({ count, page }: UsePaginationParameters): PageButtonProps[];
};

type CursorPosition = 'start' | 'middle' | 'end';

/**
 * @description - Количество всех элементов пагинации [1, ..., 4, 5, 6, ..., 12]
 *                                                    ^^^^^^^^^^^^^^^^^^^^^^^^^^
 * */
const MAX_ITEMS = 7;

/**
 * @description - Максимальное количество элементов пагинации,
 * которые требуют динамиечского расчета [1, ..., 8, 9, 10, 11, 12]
 *                                                ^^^^^^^^^^^^^^^^^
 * */
const MAX_DYNAMIC_ITEMS = MAX_ITEMS - 2;

/**
 * @description - Минимальное количество элементов пагинации,
 * которые требуют динамиечского расчета [1, ..., 4, 5, 6, ..., 12]
 *                                                ^^^^^^^
 * */
const MIN_DYNAMIC_ITEMS = MAX_ITEMS - 4;

const START_AND_END_INDEXES = [...Array(MAX_DYNAMIC_ITEMS)];
const MIDDLE_INDEXES = [...Array(MIN_DYNAMIC_ITEMS)];

const CURSOR_RESOLVERS: Record<CursorPosition, ItemCreatorFn> & {
  create(this: typeof CURSOR_RESOLVERS, v: UsePaginationParameters): ReturnType<ItemCreatorFn>;
} = {
  start: ({ count, page }) => [
    ...START_AND_END_INDEXES.map<PageButtonProps>((...[, i]) => ({
      children: i + 1,
      active: i + 1 === page,
    })),
    { children: '...', unclickable: true },
    { children: count },
  ],

  middle: ({ count, page }) => [
    { children: 1 },
    { children: '...', unclickable: true },
    ...MIDDLE_INDEXES.map<PageButtonProps>((...[, i]) => ({ children: page + (i - 1), active: i === 1 })),
    { children: '...', unclickable: true },
    { children: count },
  ],

  end: ({ count, page }) => [
    { children: 1 },
    { children: '...', unclickable: true },
    ...START_AND_END_INDEXES.map((...[, i, arr]) => ({
      children: count - (arr.length - (i + 1)),
      active: count - (arr.length - (i + 1)) === page,
    })),
  ],

  create(params) {
    if (params.page < MAX_DYNAMIC_ITEMS) return this.start(params);
    if (params.count - MAX_DYNAMIC_ITEMS + 1 < params.page) return this.end(params);
    return this.middle(params);
  },
};

const usePagination = (params: UsePaginationParameters) => {
  const count = params.count <= 0 ? 1 : params.count;
  const page = [(v: number) => (v < 0 ? 0 : v), (v: number) => (count < v ? count : v)].reduce(
    (v, fn) => fn(v),
    params.page,
  );

  const isPrevDisabled = params.page <= 1;
  const isNextDisabled = count <= params.page;
  const isExceedsLimit = count > MAX_ITEMS;

  const items = useMemo(
    () =>
      isExceedsLimit
        ? CURSOR_RESOLVERS.create({ count, page })
        : [...Array(count)].map<PageButtonProps>((...[, i]) => ({ children: i + 1, active: i + 1 === page })),
    [isExceedsLimit, count, page],
  );

  return { ...params, count, page, isPrevDisabled, isNextDisabled, items };
};

export { usePagination };
