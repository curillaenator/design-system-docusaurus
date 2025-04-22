import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../../utils/getAttributesByProps';
import { IconProps } from '../../interfaces';

const FullscreenIcon2 = (props: IconProps, ref: Ref<SVGSVGElement>) => (
  <svg
    {...getAttributesByProps(props)}
    ref={ref}
    width='32'
    height='32'
    viewBox='0 0 32 32'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M7 12.25V22C7 23.2426 8.00736 24.25 9.25 24.25H22.75C23.9926 24.25 25 23.2426 25 22V12.25M7 12.25V10C7 8.75736 8.00736 7.75 9.25 7.75H22.75C23.9926 7.75 25 8.75736 25 10V12.25M7 12.25H25M9.25 10H9.2575V10.0075H9.25V10ZM11.5 10H11.5075V10.0075H11.5V10ZM13.75 10H13.7575V10.0075H13.75V10Z'
      stroke='currentColor'
      fill='none'
      strokeWidth='1.4'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(FullscreenIcon2);
export default ForwardRef;
