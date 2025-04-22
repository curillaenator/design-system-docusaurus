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
      opacity={0.4}
      d='M26.4095 27.9463C26.0087 27.9333 25.6275 27.7684 25.3424 27.4845L22.8987 24.6282C22.3748 24.1491 22.332 23.3348 22.8027 22.8027C23.023 22.5797 23.3226 22.4543 23.635 22.4543C23.9475 22.4543 24.2471 22.5797 24.4674 22.8027L27.5407 25.2617C27.9834 25.7148 28.12 26.3875 27.8895 26.979C27.6589 27.5706 27.1043 27.9705 26.4736 28L26.4095 27.9463Z'
      fill='currentColor'
    />
    <ellipse cx={14.3191} cy={14.3839} rx={10.3191} ry={10.3839} fill='currentColor' />
  </svg>
);

const ForwardRef = forwardRef(MagnifyingGlassIcon);
export default ForwardRef;
