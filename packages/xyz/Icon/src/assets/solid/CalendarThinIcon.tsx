import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../../utils/getAttributesByProps';
import { IconProps } from '../../interfaces';

const CalendarThinIcon = (props: IconProps, ref: Ref<SVGSVGElement>) => (
  <svg
    {...getAttributesByProps(props)}
    width={32}
    height={32}
    viewBox='0 0 32 32'
    xmlns='http://www.w3.org/2000/svg'
    ref={ref}
  >
    <path
      d='M11.3333 8V10M20.6667 8V10M8 22V12C8 10.8954 8.89543 10 10 10H22C23.1046 10 24 10.8954 24 12V22M8 22C8 23.1046 8.89543 24 10 24H22C23.1046 24 24 23.1046 24 22M8 22V15.3333C8 14.2288 8.89543 13.3333 10 13.3333H22C23.1046 13.3333 24 14.2288 24 15.3333V22M16 16.6667H16.0067V16.6733H16V16.6667ZM16 18.6667H16.0067V18.6733H16V18.6667ZM16 20.6667H16.0067V20.6733H16V20.6667ZM14 18.6667H14.0067V18.6733H14V18.6667ZM14 20.6667H14.0067V20.6733H14V20.6667ZM12 18.6667H12.0067V18.6733H12V18.6667ZM12 20.6667H12.0067V20.6733H12V20.6667ZM18 16.6667H18.0067V16.6733H18V16.6667ZM18 18.6667H18.0067V18.6733H18V18.6667ZM18 20.6667H18.0067V20.6733H18V20.6667ZM20 16.6667H20.0067V16.6733H20V16.6667ZM20 18.6667H20.0067V18.6733H20V18.6667Z'
      stroke='currentColor'
      fill='none'
      strokeWidth='1.4'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(CalendarThinIcon);
export default ForwardRef;
