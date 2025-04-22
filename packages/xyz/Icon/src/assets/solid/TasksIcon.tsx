import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../../utils/getAttributesByProps';
import { IconProps } from '../../interfaces';

const SunIcon = (props: IconProps, ref: Ref<SVGSVGElement>) => (
  <svg
    {...getAttributesByProps(props)}
    ref={ref}
    width='32'
    height='32'
    viewBox='0 0 32 32'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M6 17.25C6 16.5596 6.55964 16 7.25 16H9.75C10.4404 16 11 16.5596 11 17.25V24.75C11 25.4404 10.4404 26 9.75 26H7.25C6.55964 26 6 25.4404 6 24.75V17.25Z'
      stroke='currentColor'
      fill='rgba(0, 0, 0, 0)'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M13.5 12.25C13.5 11.5596 14.0596 11 14.75 11H17.25C17.9404 11 18.5 11.5596 18.5 12.25V24.75C18.5 25.4404 17.9404 26 17.25 26H14.75C14.0596 26 13.5 25.4404 13.5 24.75V12.25Z'
      stroke='currentColor'
      fill='rgba(0, 0, 0, 0)'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M21 7.25C21 6.55964 21.5596 6 22.25 6H24.75C25.4404 6 26 6.55964 26 7.25V24.75C26 25.4404 25.4404 26 24.75 26H22.25C21.5596 26 21 25.4404 21 24.75V7.25Z'
      stroke='currentColor'
      fill='rgba(0, 0, 0, 0)'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(SunIcon);
export default ForwardRef;
