import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../../utils/getAttributesByProps';
import { IconProps } from '../../interfaces';

const MagnifyingGlassThinIcon = (props: IconProps, ref: Ref<SVGSVGElement>) => (
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
      d='M25 25L19.8033 19.8033M19.8033 19.8033C21.1605 18.4461 22 16.5711 22 14.5C22 10.3579 18.6421 7 14.5 7C10.3579 7 7 10.3579 7 14.5C7 18.6421 10.3579 22 14.5 22C16.5711 22 18.4461 21.1605 19.8033 19.8033Z'
      stroke='currentColor'
      fill='none'
      strokeWidth='1.4'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(MagnifyingGlassThinIcon);
export default ForwardRef;
