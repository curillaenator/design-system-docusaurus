import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../../utils/getAttributesByProps';
import { IconProps } from '../../interfaces';

const DotIcon = (props: IconProps, ref: Ref<SVGSVGElement>) => (
  <svg
    ref={ref}
    {...getAttributesByProps(props)}
    width='32'
    height='32'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='12' cy='12' r='3' fill='currentColor' />
  </svg>
);

const ForwardRef = forwardRef(DotIcon);
export default ForwardRef;
