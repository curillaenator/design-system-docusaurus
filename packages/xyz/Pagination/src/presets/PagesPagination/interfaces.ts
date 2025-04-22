import type { HTMLAttributes } from 'react';
import type { ButtonProps } from '@kit-xyz/button';

export interface PagesPaginationProps extends HTMLAttributes<HTMLDivElement> {
  id: string;
  pages: number;
  onPageChange: (page: number) => void;
  currentPage?: number;
  dataTestId?: string;
  size?: ButtonProps['size'];
  maxItemsShown?: number;
  appearance?: 'primary-solid';
  colorMode?: 'light' | 'dark' | 'color';
  className?: string;
  shape?: 'rounded' | 'circular' | 'square';
}
