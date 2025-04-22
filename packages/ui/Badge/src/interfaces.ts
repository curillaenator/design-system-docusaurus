import { HTMLAttributes, ReactNode } from 'react';

export interface BaseBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  id?: string;
  dataTestId?: string;
  children?: ReactNode;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  className?: string;
}
