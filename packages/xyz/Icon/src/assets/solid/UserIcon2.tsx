import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../../utils/getAttributesByProps';
import { IconProps } from '../../interfaces';

const UserIcon2 = (props: IconProps, ref: Ref<SVGSVGElement>) => (
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
      d='M22.6462 23.472C21.1246 21.4639 18.7138 20.1667 16 20.1667C13.2862 20.1667 10.8754 21.4639 9.35385 23.472M22.6462 23.472C24.7039 21.6404 26 18.9716 26 16C26 10.4772 21.5228 6 16 6C10.4772 6 6 10.4772 6 16C6 18.9716 7.29611 21.6404 9.35385 23.472M22.6462 23.472C20.8794 25.0446 18.5513 26 16 26C13.4487 26 11.1206 25.0446 9.35385 23.472M19.3333 13.5C19.3333 15.3409 17.8409 16.8333 16 16.8333C14.1591 16.8333 12.6667 15.3409 12.6667 13.5C12.6667 11.6591 14.1591 10.1667 16 10.1667C17.8409 10.1667 19.3333 11.6591 19.3333 13.5Z'
      stroke='currentColor'
      fill='none'
      strokeWidth='1.4'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(UserIcon2);
export default ForwardRef;
