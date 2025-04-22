import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../../utils/getAttributesByProps';
import { IconProps } from '../../interfaces';

const SpacesThinIcon = (props: IconProps, ref: Ref<SVGSVGElement>) => (
  <svg
    {...getAttributesByProps(props)}
    width={32}
    height={32}
    viewBox='0 0 32 32'
    xmlns='http://www.w3.org/2000/svg'
    ref={ref}
  >
    <path
      d='M11.2172 14.9071C10.833 14.2169 10.096 13.75 9.25 13.75C8.00736 13.75 7 14.7574 7 16C7 17.2426 8.00736 18.25 9.25 18.25C10.096 18.25 10.833 17.7831 11.2172 17.0929M11.2172 14.9071C11.3974 15.2307 11.5 15.6034 11.5 16C11.5 16.3966 11.3974 16.7693 11.2172 17.0929M11.2172 14.9071L20.7828 9.5929M11.2172 17.0929L20.7828 22.4071M20.7828 22.4071C20.6026 22.7307 20.5 23.1034 20.5 23.5C20.5 24.7426 21.5074 25.75 22.75 25.75C23.9926 25.75 25 24.7426 25 23.5C25 22.2574 23.9926 21.25 22.75 21.25C21.904 21.25 21.1671 21.7169 20.7828 22.4071ZM20.7828 9.5929C21.1671 10.2831 21.904 10.75 22.75 10.75C23.9926 10.75 25 9.74264 25 8.5C25 7.25736 23.9926 6.25 22.75 6.25C21.5074 6.25 20.5 7.25736 20.5 8.5C20.5 8.89664 20.6026 9.26931 20.7828 9.5929Z'
      stroke='currentColor'
      fill='none'
      strokeWidth='1.4'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(SpacesThinIcon);
export default ForwardRef;
