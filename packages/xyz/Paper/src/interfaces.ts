import { Link } from 'react-router-dom';
import type { ReactNode, AnchorHTMLAttributes, CSSProperties } from 'react';
import type { PolymorphicComponentWithRef } from '@kit-base/common-types';

import type { GeneratedPaperProps } from './tokenInterfaces';

export type Sizes = '2xl' | 'xl' | 'l' | 'm' | 's' | 'xs' | 'none';

export interface PaperProps extends GeneratedPaperProps {
  dataTestId?: string;
  component?: 'div' | 'a' | typeof Link;
  id?: string;
  fullwidth?: boolean;
  backgroungGradient?: string;
  smoothedCorners?: boolean;
  colorMode?: 'dark' | 'light' | 'color';
  className?: string;
  dropShadow?: boolean;
  children?: ReactNode;
  borderRadius?: Sizes;
  borderWidth?: Sizes;
  padding?: Sizes;
  withBorder?: boolean;
  interactive?: boolean;
  style?: CSSProperties;
  noPointerEvents?: boolean;

  href?: string;
  to?: string;
  target?: AnchorHTMLAttributes<HTMLAnchorElement>['target'];
}

export type PaperComponent = PolymorphicComponentWithRef<PaperProps, 'component', 'div'>;
