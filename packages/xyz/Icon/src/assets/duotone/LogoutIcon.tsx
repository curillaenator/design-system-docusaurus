import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../../utils/getAttributesByProps';
import { IconProps } from '../../interfaces';

const LogoutIcon = (props: IconProps, ref: Ref<SVGSVGElement>) => (
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
      d='M27.7347 15.3458L24.3197 11.855C23.9668 11.495 23.3988 11.495 23.047 11.8574C22.6964 12.2198 22.6976 12.8042 23.0493 13.1642L24.9204 15.0758H23.1265H13.0581C12.5614 15.0758 12.1582 15.4898 12.1582 15.9998C12.1582 16.511 12.5614 16.9238 13.0581 16.9238H24.9204L23.0493 18.8354C22.6976 19.1954 22.6964 19.7798 23.047 20.1422C23.2235 20.3234 23.4537 20.4146 23.6851 20.4146C23.9142 20.4146 24.1444 20.3234 24.3197 20.1446L27.7347 16.655C27.9041 16.481 28 16.2458 28 15.9998C28 15.755 27.9041 15.5198 27.7347 15.3458Z'
      fill='currentColor'
    />
    <path
      d='M9.42944 4C6.43629 4 4 6.3952 4 9.3364V22.6756C4 25.612 6.43018 28 9.41845 28H15.3693C18.3637 28 20.8 25.606 20.8 22.6636V16.9238H13.0581C12.5614 16.9238 12.1582 16.511 12.1582 15.9998C12.1582 15.4898 12.5614 15.0758 13.0581 15.0758H20.8V9.3244C20.8 6.388 18.3698 4 15.3828 4H9.42944Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(LogoutIcon);
export default ForwardRef;
