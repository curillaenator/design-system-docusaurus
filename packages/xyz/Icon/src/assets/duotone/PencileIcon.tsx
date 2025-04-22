import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../../utils/getAttributesByProps';
import { IconProps } from '../../interfaces';

const PencileIcon = (props: IconProps, ref: Ref<SVGSVGElement>) => (
  <svg
    {...getAttributesByProps(props)}
    width={32}
    height={32}
    viewBox='0 0 32 32'
    xmlns='http://www.w3.org/2000/svg'
    ref={ref}
  >
    <g opacity={0.4}>
      <path
        d='M26.6568 25.271H19.0644C18.3237 25.271 17.7212 25.883 17.7212 26.6355C17.7212 27.3894 18.3237 28 19.0644 28H26.6568C27.3975 28 28 27.3894 28 26.6355C28 25.883 27.3975 25.271 26.6568 25.271Z'
        fill='currentColor'
      />
      <path
        d='M24.1608 11.5539L22.7738 13.2853C22.6341 13.4616 22.383 13.4903 22.2094 13.3498C20.5233 11.9853 16.2058 8.4838 15.0079 7.51345C14.8329 7.37012 14.8089 7.115 14.95 6.93727L16.2876 5.27608C17.5011 3.71378 19.6175 3.57045 21.3248 4.93208L23.286 6.49438C24.0902 7.12503 24.6264 7.95634 24.8098 8.83065C25.0215 9.7924 24.7957 10.7369 24.1608 11.5539Z'
        fill='currentColor'
      />
    </g>
    <path
      d='M13.7454 9.2052L20.9398 15.0187C21.1134 15.1577 21.143 15.4128 21.0076 15.5905L12.4783 26.7043C11.9422 27.3909 11.152 27.7793 10.3054 27.7936L5.64928 27.851C5.40095 27.8538 5.18366 27.6818 5.12723 27.4353L4.06901 22.8344C3.88558 21.9888 4.06901 21.1145 4.60517 20.4408L13.1767 9.274C13.315 9.09483 13.5704 9.0633 13.7454 9.2052Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(PencileIcon);
export default ForwardRef;
