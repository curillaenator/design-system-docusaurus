import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../../utils/getAttributesByProps';
import { IconProps } from '../../interfaces';

const RadioOffIcon = (props: IconProps, ref: Ref<SVGSVGElement>) => (
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
      fillRule='evenodd'
      clipRule='evenodd'
      d='M4 11C4 7.13401 7.13401 4 11 4H21C24.866 4 28 7.13401 28 11V21C28 24.866 24.866 28 21 28H11C7.13401 28 4 24.866 4 21V11ZM11 6C8.23858 6 6 8.23858 6 11V21C6 23.7614 8.23858 26 11 26H21C23.7614 26 26 23.7614 26 21V11C26 8.23858 23.7614 6 21 6H11Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(RadioOffIcon);
export default ForwardRef;
