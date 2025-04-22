import type { ButtonProps } from '@kit-xyz/button';

export interface PaginationButtons {
  first: ButtonProps | null;
  shiftLeft: ButtonProps | null;
  range: ButtonProps[];
  shiftRight: ButtonProps | null;
  last: ButtonProps | null;
}

interface PaginationManagerOptions {
  paginatorId?: string;
  buttonProps?: ButtonProps;
  maxRangeLenght?: number;
}

const DEFAULT_BUTTON_PROPS: ButtonProps = {
  size: 'xs',
  appearance: 'primary-solid',
  colorMode: 'light',
  shape: 'rounded',
  justify: 'center',
};

const DEFAULT_PAGINATOR_ID = 'xyz-pagination';

export class PaginationManager {
  private _paginatorId: string = DEFAULT_PAGINATOR_ID;

  private _pages: number = 0;

  private _first: ButtonProps | null = null;

  private _last: ButtonProps | null = null;

  private _shiftLeft: ButtonProps | null = null;

  private _shiftRight: ButtonProps | null = null;

  private _maxRangeLenght: number = 2;

  private _range: ButtonProps[] = [];

  private _buttonProps: ButtonProps = {};

  constructor(pages: number, options?: PaginationManagerOptions) {
    const {
      buttonProps,
      maxRangeLenght = 2,
      paginatorId = DEFAULT_PAGINATOR_ID,
    } = { ...options, buttonProps: { ...DEFAULT_BUTTON_PROPS, ...options?.buttonProps } };

    this._paginatorId = paginatorId;
    this._maxRangeLenght = maxRangeLenght;
    this._buttonProps = buttonProps;
    this._pages = pages;
  }

  update(rangeIndex: number, pagesCount: number) {
    this._pages = pagesCount;

    const newArrayLength =
      this._pages - rangeIndex >= this._maxRangeLenght ? this._maxRangeLenght : this._pages + 1 - rangeIndex;

    this._range = [...new Array(newArrayLength)].map((_, i) => ({
      ...this._buttonProps,
      id: `${this._paginatorId}-page-${i + rangeIndex}`,
      children: `${i + rangeIndex}`,
      value: `${i + rangeIndex}`,
    }));

    if (rangeIndex + this._maxRangeLenght > this._pages) {
      this._last = null;
      this._shiftRight = null;
    } else {
      this._last = {
        ...this._buttonProps,
        id: `${this._paginatorId}-page-${this._pages}`,
        children: this._pages,
        value: this._pages,
      };

      const isShiftRight = +(this._range[newArrayLength - 1].value || 0) + 1 !== pagesCount;

      this._shiftRight = isShiftRight
        ? {
            ...this._buttonProps,
            id: `${this._paginatorId}-shift-right`,
          }
        : null;
    }

    if (rangeIndex < this._maxRangeLenght) {
      this._first = null;
      this._shiftLeft = null;
    } else {
      this._first = {
        ...this._buttonProps,
        id: `${this._paginatorId}-page-1`,
        children: '1',
        value: 1,
      };

      this._shiftLeft = {
        ...this._buttonProps,
        id: `${this._paginatorId}-shift-left`,
      };
    }

    return {
      first: this._first,
      shiftLeft: this._shiftLeft,
      range: this._range,
      shiftRight: this._shiftRight,
      last: this._last,
    };
  }

  handleShiftLeft(currentRangeIndex: number, rangeIndexSetter: (newRangeIndex: number) => void) {
    if (currentRangeIndex - this._maxRangeLenght < 0) rangeIndexSetter(0);
    rangeIndexSetter(currentRangeIndex - this._maxRangeLenght);
  }

  handleShiftRight(currentRangeIndex: number, rangeIndexSetter: (newRangeIndex: number) => void) {
    if (currentRangeIndex + this._maxRangeLenght > this._pages) rangeIndexSetter(this._pages);
    rangeIndexSetter(currentRangeIndex + this._maxRangeLenght);
  }
}
