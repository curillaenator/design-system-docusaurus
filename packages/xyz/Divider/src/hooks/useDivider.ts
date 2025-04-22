import type { DividerProps } from '../interfaces';

import { useDividerClassName } from './useDividerClassName';

export const useDivider = (props: DividerProps): DividerProps => {
  const { size = 'l', shape = 'rounded', appearance = 'dark' } = props;

  const resultClasses = useDividerClassName(props);

  return {
    ...props,
    size,
    iconSize: size,
    shape,
    appearance,
    className: resultClasses,
  };
};
