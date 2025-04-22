import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../../utils/getAttributesByProps';
import { IconProps } from '../../interfaces';

const PlusIcon = (props: IconProps, ref: Ref<SVGSVGElement>) => (
  <svg
    ref={ref}
    {...getAttributesByProps(props)}
    width='32'
    height='32'
    viewBox='0 0 32 32'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M16.0044 10.0029V22.0029M22.0044 16.0029L10.0044 16.0029'
      stroke='currentColor'
      fill='none'
      strokeWidth='1.2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>

  // <svg
  // ref={ref}
  //   {...getAttributesByProps(props)}
  //   width={32}
  //   height={32}
  //   viewBox='0 0 32 32'
  //   xmlns='http://www.w3.org/2000/svg'
  // >
  //   <path
  //     d='M16 8.5V23.5M23.5 16L8.5 16'
  //     stroke='currentColor'
  //     fill='none'
  //     strokeWidth='1.4'
  //     strokeLinecap='round'
  //     strokeLinejoin='round'
  //   />
  // </svg>
);

const ForwardRef = forwardRef(PlusIcon);
export default ForwardRef;
