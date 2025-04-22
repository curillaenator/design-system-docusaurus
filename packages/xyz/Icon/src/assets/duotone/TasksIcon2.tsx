import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../../utils/getAttributesByProps';
import { IconProps } from '../../interfaces';

const TasksIcon2 = (props: IconProps, ref: Ref<SVGSVGElement>) => (
  <svg
    {...getAttributesByProps(props)}
    width='32'
    height='32'
    viewBox='0 0 32 32'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    ref={ref}
  >
    <path
      d='M11.5 18.25V20.5M14.5 16V20.5M17.5 13.75V20.5M20.5 11.5V20.5M10 24.25H22C23.2426 24.25 24.25 23.2426 24.25 22V10C24.25 8.75736 23.2426 7.75 22 7.75H10C8.75736 7.75 7.75 8.75736 7.75 10V22C7.75 23.2426 8.75736 24.25 10 24.25Z'
      stroke='currentColor'
      fill='none'
      strokeWidth='1.4'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(TasksIcon2);
export default ForwardRef;
