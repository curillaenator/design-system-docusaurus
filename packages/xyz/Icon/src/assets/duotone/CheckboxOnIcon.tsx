import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../../utils/getAttributesByProps';
import { IconProps } from '../../interfaces';

const CheckboxOnIcon = (props: IconProps, ref: Ref<SVGSVGElement>) => (
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
      d='M22.7071 11.2929C23.0976 11.6834 23.0976 12.3166 22.7071 12.7071L14.7071 20.7071C14.3166 21.0976 13.6834 21.0976 13.2929 20.7071L9.29291 16.7073C8.90238 16.3168 8.90236 15.6836 9.29288 15.2931C9.68339 14.9026 10.3166 14.9025 10.7071 15.2931L14 18.5858L21.2929 11.2929C21.6834 10.9024 22.3166 10.9024 22.7071 11.2929Z'
      fill='currentColor'
    />
    <path
      opacity={0.4}
      fillRule='evenodd'
      clipRule='evenodd'
      d='M4 9C4 6.23858 6.23858 4 9 4H23C25.7614 4 28 6.23858 28 9V23C28 25.7614 25.7614 28 23 28H9C6.23858 28 4 25.7614 4 23V9ZM9 6C7.34315 6 6 7.34315 6 9V23C6 24.6569 7.34315 26 9 26H23C24.6569 26 26 24.6569 26 23V9C26 7.34315 24.6569 6 23 6H9Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(CheckboxOnIcon);
export default ForwardRef;
