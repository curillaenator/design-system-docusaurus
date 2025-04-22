import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../../utils/getAttributesByProps';
import { IconProps } from '../../interfaces';

const CubeThinIcon = (props: IconProps, ref: Ref<SVGSVGElement>) => (
  <svg
    {...getAttributesByProps(props)}
    width={32}
    height={32}
    viewBox='0 0 32 32'
    xmlns='http://www.w3.org/2000/svg'
    ref={ref}
  >
    <path
      d='M23.7692 12.3077L16.3846 8L9 12.3077M23.7692 12.3077L16.3846 16.6154M23.7692 12.3077V19.6923L16.3846 24M9 12.3077L16.3846 16.6154M9 12.3077V19.6923L16.3846 24M16.3846 16.6154V24'
      stroke='currentColor'
      fill='none'
      strokeWidth='1.4'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(CubeThinIcon);
export default ForwardRef;
