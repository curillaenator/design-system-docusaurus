import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../../utils/getAttributesByProps';
import { IconProps } from '../../interfaces';

const LockClosedIcon = (props: IconProps, ref: Ref<SVGSVGElement>) => (
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
      d='M22.6274 10.4751V12.24C22.2006 12.1208 21.7494 12.0611 21.2861 12.0611H20.4935V10.4751C20.4935 8.05442 18.4815 6.08683 16.0062 6.08683C13.5309 6.08683 11.5189 8.04249 11.5068 10.4513V12.0611H10.7264C10.2508 12.0611 9.79964 12.1208 9.37286 12.2519V10.4751C9.38506 6.89772 12.3481 4 15.9818 4C19.6643 4 22.6274 6.89772 22.6274 10.4751Z'
      fill='currentColor'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M10.9225 12.0566H21.0774C23.9064 12.0566 26.2 14.2997 26.2 17.0662V22.9904C26.2 25.757 23.9064 28 21.0774 28H10.9225C8.09362 28 5.79999 25.757 5.79999 22.9904V17.0662C5.79999 14.2997 8.09362 12.0566 10.9225 12.0566ZM15.9939 22.3954C16.5914 22.3954 17.0669 21.9303 17.0669 21.346V18.6987C17.0669 18.1263 16.5914 17.6613 15.9939 17.6613C15.4086 17.6613 14.933 18.1263 14.933 18.6987V21.346C14.933 21.9303 15.4086 22.3954 15.9939 22.3954Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(LockClosedIcon);
export default ForwardRef;
