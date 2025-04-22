import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../../utils/getAttributesByProps';
import { IconProps } from '../../interfaces';

const PriorityHightIcon = (props: IconProps, ref: Ref<SVGSVGElement>) => (
  <svg
    {...getAttributesByProps(props)}
    width='32'
    height='32'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    ref={ref}
  >
    <path
      d='M5 14.5798L12.2269 9.71801L19.4539 14.5798M5 8.8618L12.2269 4L19.4539 8.8618M5 20L12.2269 15.1382L19.4539 20M5 14.282L12.2269 9.4202L19.4539 14.282'
      stroke='currentColor'
      fill='none'
      strokeWidth='1.4'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(PriorityHightIcon);
export default ForwardRef;
