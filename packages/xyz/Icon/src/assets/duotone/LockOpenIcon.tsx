import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../../utils/getAttributesByProps';
import { IconProps } from '../../interfaces';

const LockOpenIcon = (props: IconProps, ref: Ref<SVGSVGElement>) => (
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
      d='M11.4869 12.0509V10.4407C11.4991 8.04453 13.511 6.08727 15.9985 6.08727C17.9007 6.08727 19.6078 7.26807 20.2297 9.03449C20.437 9.58314 21.0467 9.86821 21.5954 9.67856C21.8637 9.59388 22.0832 9.40304 22.2051 9.15257C22.327 8.9021 22.3514 8.61585 22.2539 8.35345C21.3271 5.7545 18.8153 4 15.9741 4C12.3404 4 9.37735 6.89951 9.35297 10.4646V12.293L11.4869 12.0509Z'
      fill='currentColor'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M10.9225 12.0533H21.0774C23.9064 12.0533 26.2 14.2968 26.2 17.0639V22.9894C26.2 25.7565 23.9064 28 21.0774 28H10.9225C8.09362 28 5.79999 25.7565 5.79999 22.9894V17.0639C5.79999 14.2968 8.09362 12.0533 10.9225 12.0533ZM15.9939 22.3942C16.5914 22.3942 17.0669 21.929 17.0669 21.3446V18.6968C17.0669 18.1243 16.5914 17.6591 15.9939 17.6591C15.4086 17.6591 14.933 18.1243 14.933 18.6968V21.3446C14.933 21.929 15.4086 22.3942 15.9939 22.3942Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(LockOpenIcon);
export default ForwardRef;
