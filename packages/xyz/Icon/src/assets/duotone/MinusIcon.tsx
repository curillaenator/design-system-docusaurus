import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../../utils/getAttributesByProps';
import { IconProps } from '../../interfaces';

const MinusIcon = (props: IconProps, ref: Ref<SVGSVGElement>) => (
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
      d='M4 16C4 15.4477 4.44772 15 5 15L27 15C27.5523 15 28 15.4477 28 16C28 16.5523 27.5523 17 27 17L5 17C4.44772 17 4 16.5523 4 16Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(MinusIcon);
export default ForwardRef;
