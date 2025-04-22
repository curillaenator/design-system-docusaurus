import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../../utils/getAttributesByProps';
import { IconProps } from '../../interfaces';

const EyeOnIcon = (props: IconProps, ref: Ref<SVGSVGElement>) => (
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
      d='M7.05099 16.2924C6.98892 16.1062 6.98886 15.9045 7.05082 15.7183C8.29832 11.968 11.8359 9.26367 16.0052 9.26367C20.1725 9.26367 23.7087 11.9655 24.9578 15.713C25.0199 15.8993 25.0199 16.1009 24.958 16.2872C23.7105 20.0374 20.1729 22.7418 16.0036 22.7418C11.8363 22.7418 8.30004 20.0399 7.05099 16.2924Z'
      stroke='currentColor'
      fill='none'
      strokeWidth='1.2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M18.7001 16.0027C18.7001 17.4915 17.4932 18.6983 16.0045 18.6983C14.5157 18.6983 13.3088 17.4915 13.3088 16.0027C13.3088 14.514 14.5157 13.3071 16.0045 13.3071C17.4932 13.3071 18.7001 14.514 18.7001 16.0027Z'
      stroke='currentColor'
      fill='none'
      strokeWidth='1.2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(EyeOnIcon);
export default ForwardRef;
