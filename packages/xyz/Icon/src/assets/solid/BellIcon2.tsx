import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../../utils/getAttributesByProps';
import { IconProps } from '../../interfaces';

const BellIcon2 = (props: IconProps, ref: Ref<SVGSVGElement>) => (
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
      d='M18.8569 21.0817C20.7514 20.857 22.5783 20.4116 24.3111 19.7719C22.8743 18.177 21.9998 16.0656 21.9998 13.75V13.0492C21.9999 13.0328 22 13.0164 22 13C22 9.68629 19.3137 7 16 7C12.6863 7 10 9.68629 10 13L9.9998 13.75C9.9998 16.0656 9.12527 18.177 7.68848 19.7719C9.4214 20.4116 11.2484 20.857 13.1431 21.0818M18.8569 21.0817C17.92 21.1928 16.9666 21.25 15.9998 21.25C15.0332 21.25 14.0799 21.1929 13.1431 21.0818M18.8569 21.0817C18.9498 21.3711 19 21.6797 19 22C19 23.6569 17.6569 25 16 25C14.3431 25 13 23.6569 13 22C13 21.6797 13.0502 21.3712 13.1431 21.0818'
      stroke='currentColor'
      fill='none'
      strokeWidth='1.4'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(BellIcon2);
export default ForwardRef;
