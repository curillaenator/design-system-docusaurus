import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../../utils/getAttributesByProps';
import { IconProps } from '../../interfaces';

const MagnifyingGlassIcon = (props: IconProps, ref: Ref<SVGSVGElement>) => (
  <svg
    {...getAttributesByProps(props)}
    width={32}
    height={32}
    viewBox='0 0 32 32'
    xmlns='http://www.w3.org/2000/svg'
    ref={ref}
  >
    <path
      d='M26.4095 27.9463C26.0087 27.9333 25.6275 27.7684 25.3424 27.4846L22.8987 24.6282C22.3748 24.1491 22.332 23.3348 22.8027 22.8027C23.023 22.5797 23.3226 22.4544 23.635 22.4544C23.9475 22.4544 24.2471 22.5797 24.4674 22.8027L27.5407 25.2617C27.9834 25.7148 28.12 26.3875 27.8895 26.9791C27.6589 27.5706 27.1043 27.9705 26.4736 28L26.4095 27.9463Z'
      fill='currentColor'
    />
    <path
      d='M24.6381 14.3839C24.6381 20.1188 20.0181 24.7678 14.3191 24.7678C8.62 24.7678 4 20.1188 4 14.3839C4 8.64903 8.62 4 14.3191 4C20.0181 4 24.6381 8.64903 24.6381 14.3839Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(MagnifyingGlassIcon);
export default ForwardRef;
