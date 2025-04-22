import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../../utils/getAttributesByProps';
import { IconProps } from '../../interfaces';

const Settings = (props: IconProps, ref: Ref<SVGSVGElement>) => (
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
      d='M14.5 10L24.25 10M14.5 10C14.5 10.8284 13.8284 11.5 13 11.5C12.1716 11.5 11.5 10.8284 11.5 10M14.5 10C14.5 9.17157 13.8284 8.5 13 8.5C12.1716 8.5 11.5 9.17157 11.5 10M7.75 10H11.5M14.5 22H24.25M14.5 22C14.5 22.8284 13.8284 23.5 13 23.5C12.1716 23.5 11.5 22.8284 11.5 22M14.5 22C14.5 21.1716 13.8284 20.5 13 20.5C12.1716 20.5 11.5 21.1716 11.5 22M7.75 22L11.5 22M20.5 16L24.25 16M20.5 16C20.5 16.8284 19.8284 17.5 19 17.5C18.1716 17.5 17.5 16.8284 17.5 16M20.5 16C20.5 15.1716 19.8284 14.5 19 14.5C18.1716 14.5 17.5 15.1716 17.5 16M7.75 16H17.5'
      stroke='currentColor'
      strokeWidth='1.4'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Settings);
export default ForwardRef;
