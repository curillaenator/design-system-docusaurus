import { Link } from 'react-router-dom';
import type { PolymorphicComponentWithRef } from '@kit-base/common-types';
import type { ButtonHTMLAttributes, ReactNode, AnchorHTMLAttributes } from 'react';

export interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  component?: 'button' | 'a' | typeof Link;
  dataTestId?: string;
  active?: boolean;
  reversed?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  fullWidth?: boolean;
  justify?: 'between' | 'center' | 'start' | 'end';
  interactive?: boolean;
  elementRight?: ReactNode;
  href?: string;
  to?: string;
  target?: AnchorHTMLAttributes<HTMLAnchorElement>['target'];
}

export type ButtonComponent = PolymorphicComponentWithRef<BaseButtonProps, 'component', 'button'>;
