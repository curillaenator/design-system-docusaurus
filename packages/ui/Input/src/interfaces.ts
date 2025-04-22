import type { InputHTMLAttributes, ReactNode, RefObject } from 'react';

import type { PlaceholderComponent } from './components/Placeholder';

export interface BaseInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {}

export interface InputProps extends BaseInputProps {
  /** тест id */
  dataTestId?: string;

  id?: string;
  status?: string;

  upperNode?: ReactNode;
  lowerNode?: ReactNode;

  nodeLeft?: ReactNode;
  nodeRight?: ReactNode;

  actionLeft?: ReactNode;
  actionRight?: ReactNode;

  uncontrolled?: boolean;
  wrapperRef?: RefObject<HTMLDivElement>;
  active?: boolean;
  setActive?: (active: boolean) => void;
  contentClassName?: string;
  inputClassName?: string;

  version?: string;
  onContainerClick?: () => void;

  PlaceholderComponent?: PlaceholderComponent;
}

export interface IsOverlay {
  left: boolean;
  right: boolean;
}
