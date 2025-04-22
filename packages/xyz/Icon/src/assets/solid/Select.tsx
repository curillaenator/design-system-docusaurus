import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../../utils/getAttributesByProps';
import { IconProps } from '../../interfaces';

const Select = (props: IconProps, ref: Ref<SVGSVGElement>) => (
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
      d='M22 20L16 26L10 20'
      stroke='white'
      strokeOpacity='1'
      strokeWidth='1.4'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M22 12L16 6L10 12'
      stroke='white'
      strokeOpacity='1'
      strokeWidth='1.4'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Select);
export default ForwardRef;
