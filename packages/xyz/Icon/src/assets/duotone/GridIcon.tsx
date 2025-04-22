import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../../utils/getAttributesByProps';
import { IconProps } from '../../interfaces';

const GridIcon = (props: IconProps, ref: Ref<SVGSVGElement>) => (
  <svg
    {...getAttributesByProps(props)}
    width={32}
    height={32}
    viewBox='0 0 32 32'
    xmlns='http://www.w3.org/2000/svg'
    ref={ref}
  >
    <path
      opacity={0.4}
      d='M20.8906 4H24.9537C26.6365 4 28 5.37502 28 7.07195V11.1694C28 12.8664 26.6365 14.2414 24.9537 14.2414H20.8906C19.2079 14.2414 17.8444 12.8664 17.8444 11.1694V7.07195C17.8444 5.37502 19.2079 4 20.8906 4Z'
      fill='currentColor'
    />
    <path
      d='M20.8906 17.7586H24.9538C26.6365 17.7586 28 19.1336 28 20.8306V24.928C28 26.6238 26.6365 28 24.9538 28H20.8906C19.2079 28 17.8444 26.6238 17.8444 24.928V20.8306C17.8444 19.1336 19.2079 17.7586 20.8906 17.7586Z'
      fill='currentColor'
    />
    <path
      d='M7.04623 17.7586H11.1094C12.7921 17.7586 14.1556 19.1336 14.1556 20.8305V24.928C14.1556 26.6238 12.7921 28 11.1094 28H7.04623C5.36351 28 4 26.6238 4 24.928V20.8305C4 19.1336 5.36351 17.7586 7.04623 17.7586Z'
      fill='currentColor'
    />
    <path
      d='M7.04623 4H11.1094C12.7921 4 14.1556 5.37502 14.1556 7.07195V11.1694C14.1556 12.8664 12.7921 14.2414 11.1094 14.2414H7.04623C5.36351 14.2414 4 12.8664 4 11.1694V7.07195C4 5.37502 5.36351 4 7.04623 4Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(GridIcon);
export default ForwardRef;
