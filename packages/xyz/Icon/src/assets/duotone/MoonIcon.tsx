import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../../utils/getAttributesByProps';
import { IconProps } from '../../interfaces';

const MoonIcon = (props: IconProps, ref: Ref<SVGSVGElement>) => (
  <svg
    {...getAttributesByProps(props)}
    width={32}
    height={32}
    viewBox='0 0 32 32'
    xmlns='http://www.w3.org/2000/svg'
    ref={ref}
  >
    <path
      d='M15.0258 5.00365C15.7036 4.93165 15.8853 5.94347 15.3551 6.37829C15.1635 6.53541 14.9778 6.70347 14.7988 6.88246C11.9056 9.77635 11.8701 14.4318 14.7195 17.2807C17.569 20.1295 22.2243 20.0931 25.1176 17.1992C25.2966 17.0202 25.4646 16.8345 25.6217 16.6428C26.0564 16.1125 27.0682 16.294 26.9964 16.9718C26.7364 19.4238 25.6593 21.8168 23.7683 23.7082C19.4284 28.0491 12.4453 28.1038 8.1711 23.8305C3.89693 19.5571 3.9502 12.574 8.2901 8.23317C10.1811 6.34177 12.5739 5.26411 15.0258 5.00365Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(MoonIcon);
export default ForwardRef;
