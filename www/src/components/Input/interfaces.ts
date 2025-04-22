import { InputHTMLAttributes, ReactNode } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  focused?: boolean;
  leftEl?: ReactNode;
  rightEl?: ReactNode;
  wrapperClassName?: string;
  inputClassName?: string;
}
