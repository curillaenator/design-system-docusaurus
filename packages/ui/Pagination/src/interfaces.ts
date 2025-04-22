import type { FC, HTMLAttributes, ButtonHTMLAttributes } from 'react';

export interface PageButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  unclickable?: boolean;
}

export interface NavigationButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  direction?: 'prev' | 'next';
}

type ButtonOnClick = HTMLAttributes<HTMLButtonElement>['onClick'];

export interface PaginationComponents {
  NavigationButton: FC<NavigationButtonProps>;
  PageButton: FC<PageButtonProps>;
}

export interface PaginationProps {
  count: number;
  page: number;
  components?: Partial<PaginationComponents>;
  className?: string;
  onNextButtonClick?: ButtonOnClick;
  onPrevButtonClick?: ButtonOnClick;
  onPageButtonClick?: (page: number) => void;
  dataTestId?: string;
}
