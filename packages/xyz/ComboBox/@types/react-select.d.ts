/* eslint-disable */
import type { ReactNode } from 'react';
import type { Props, GroupBase } from 'react-select';

declare module 'react-select/dist/declarations/src/Select' {
  export interface Props<Option, IsMulti extends boolean, Group extends GroupBase<Option>> {
    dataTestId?: string;
    bordered?: boolean;
    iconLeft?: ReactNode;
    iconRight?: ReactNode;
    iconClear?: ReactNode;
    iconChecked?: ReactNode;
    iconRemove?: ReactNode;
    menuListScrollClassName?: string;
  }
}
