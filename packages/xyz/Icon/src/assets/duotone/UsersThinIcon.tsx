import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../../utils/getAttributesByProps';
import { IconProps } from '../../interfaces';

const UsersThinIcon = (props: IconProps, ref: Ref<SVGSVGElement>) => (
  <svg
    {...getAttributesByProps(props)}
    width={32}
    height={32}
    viewBox='0 0 32 32'
    xmlns='http://www.w3.org/2000/svg'
    ref={ref}
  >
    <path
      d='M19 23.1276C19.8329 23.37 20.7138 23.5 21.625 23.5C23.1037 23.5 24.5025 23.1576 25.7464 22.5478C25.7488 22.4905 25.75 22.4329 25.75 22.375C25.75 20.0968 23.9031 18.25 21.625 18.25C20.2069 18.25 18.956 18.9655 18.2136 20.0552M19 23.1276V23.125C19 22.0121 18.7148 20.9658 18.2136 20.0552M19 23.1276C19 23.1632 18.9997 23.1988 18.9991 23.2343C17.1374 24.3552 14.9565 25 12.625 25C10.2935 25 8.11264 24.3552 6.25092 23.2343C6.25031 23.198 6.25 23.1615 6.25 23.125C6.25 19.6042 9.10418 16.75 12.625 16.75C15.0329 16.75 17.129 18.085 18.2136 20.0552M16 10.375C16 12.239 14.489 13.75 12.625 13.75C10.761 13.75 9.25 12.239 9.25 10.375C9.25 8.51104 10.761 7 12.625 7C14.489 7 16 8.51104 16 10.375ZM24.25 12.625C24.25 14.0747 23.0747 15.25 21.625 15.25C20.1753 15.25 19 14.0747 19 12.625C19 11.1753 20.1753 10 21.625 10C23.0747 10 24.25 11.1753 24.25 12.625Z'
      stroke='currentColor'
      fill='none'
      strokeWidth='1.4'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(UsersThinIcon);
export default ForwardRef;
