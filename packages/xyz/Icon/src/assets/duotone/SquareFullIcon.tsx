import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../../utils/getAttributesByProps';
import { IconProps } from '../../interfaces';

const SquareFullIcon = (props: IconProps, ref: Ref<SVGSVGElement>) => (
  <svg
    {...getAttributesByProps(props)}
    width={32}
    height={32}
    viewBox='0 0 32 32'
    xmlns='http://www.w3.org/2000/svg'
    ref={ref}
  >
    <rect opacity={0.4} x={9} y={9} width={14} height={14} rx={2} fill='currentColor' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M4 9C4 6.23858 6.23858 4 9 4H23C25.7614 4 28 6.23858 28 9V23C28 25.7614 25.7614 28 23 28H9C6.23858 28 4 25.7614 4 23V9ZM9 6C7.34315 6 6 7.34315 6 9V23C6 24.6569 7.34315 26 9 26H23C24.6569 26 26 24.6569 26 23V9C26 7.34315 24.6569 6 23 6H9Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(SquareFullIcon);
export default ForwardRef;
