import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../../utils/getAttributesByProps';
import { IconProps } from '../../interfaces';

const MenuIcon = (props: IconProps, ref: Ref<SVGSVGElement>) => (
  <svg
    {...getAttributesByProps(props)}
    width={32}
    height={32}
    viewBox='0 0 32 32'
    xmlns='http://www.w3.org/2000/svg'
    ref={ref}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M4 24C4 23.4477 4.44772 23 5 23H27C27.5523 23 28 23.4477 28 24C28 24.5523 27.5523 25 27 25H5C4.44772 25 4 24.5523 4 24Z'
      fill='currentColor'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M4 16C4 15.4477 4.44772 15 5 15L27 15C27.5523 15 28 15.4477 28 16C28 16.5523 27.5523 17 27 17L5 17C4.44772 17 4 16.5523 4 16Z'
      fill='currentColor'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M4 8C4 7.44772 4.44772 7 5 7L27 7C27.5523 7 28 7.44772 28 8C28 8.55229 27.5523 9 27 9L5 9C4.44772 9 4 8.55228 4 8Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(MenuIcon);
export default ForwardRef;
