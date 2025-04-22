import cns from 'classnames';

import { BaseBubbleProps } from '../interfaces';

import { useBubbleClassnames } from './useBubbleClassnames';

export const useBubble = (props: BaseBubbleProps): BaseBubbleProps => {
  const { size = 'l', shape = 'rounded', className } = props;
  const resultProps: BaseBubbleProps = {
    size,
    shape,
    ...props,
  };
  const resultClasses = useBubbleClassnames(resultProps);

  return {
    ...resultProps,
    className: cns(resultClasses, className),
  };
};
