import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../../utils/getAttributesByProps';
import { IconProps } from '../../interfaces';

const PhoneOffIcon = (props: IconProps, ref: Ref<SVGSVGElement>) => (
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
      d='M16.334 17.1327C20.2436 20.3434 21.3464 15.7512 24.1157 18.5654C26.9728 21.4819 28.6156 22.0703 24.9929 25.7671C24.5668 26.1381 21.8225 30.3466 12.4118 21.1365L16.334 17.1327Z'
      fill='currentColor'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M9.29561 18.1135C1.62988 9.42789 5.46274 6.83117 5.8019 6.40904C9.45952 2.69944 10.0269 4.38794 12.9003 7.30446C15.321 9.77326 12.1829 10.9501 13.4689 13.8794L9.29561 18.1135Z'
      fill='currentColor'
    />
    <path
      d='M27.4002 5.78204V5.79415L6.02875 27.6971C5.82791 27.891 5.57982 28 5.31991 28C5.06001 28 4.81192 27.891 4.59926 27.6971C4.26847 27.3458 4.22122 26.8249 4.44568 26.4372L4.48113 26.3888C4.50475 26.3512 4.52838 26.3161 4.56382 26.2797L25.9707 4.31619C26.1479 4.12236 26.4078 4 26.6795 4C26.9512 4 27.2111 4.12236 27.4002 4.31619C27.79 4.72808 27.79 5.37015 27.4002 5.78204Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(PhoneOffIcon);
export default ForwardRef;
