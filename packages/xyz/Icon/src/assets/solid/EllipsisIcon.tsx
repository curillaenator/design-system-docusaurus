import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../../utils/getAttributesByProps';
import { IconProps } from '../../interfaces';

const EllipsisIcon = (props: IconProps, ref: Ref<SVGSVGElement>) => (
  <svg
    {...getAttributesByProps(props)}
    width='31'
    height='32'
    viewBox='0 0 31 32'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    ref={ref}
  >
    <path
      d='M9.442 20.118C9.442 19.502 9.708 19.082 10.478 19.082C11.262 19.082 11.542 19.488 11.542 20.118C11.542 20.706 11.276 21.154 10.478 21.154C9.708 21.154 9.442 20.706 9.442 20.118ZM14.4186 20.118C14.4186 19.502 14.6846 19.082 15.4546 19.082C16.2386 19.082 16.5186 19.488 16.5186 20.118C16.5186 20.706 16.2526 21.154 15.4546 21.154C14.6846 21.154 14.4186 20.706 14.4186 20.118ZM19.3951 20.118C19.3951 19.502 19.6611 19.082 20.4311 19.082C21.2151 19.082 21.4951 19.488 21.4951 20.118C21.4951 20.706 21.2291 21.154 20.4311 21.154C19.6611 21.154 19.3951 20.706 19.3951 20.118Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(EllipsisIcon);
export default ForwardRef;
