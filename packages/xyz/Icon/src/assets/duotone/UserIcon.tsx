import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../../utils/getAttributesByProps';
import { IconProps } from '../../interfaces';

const UserIcon = (props: IconProps, ref: Ref<SVGSVGElement>) => (
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
      d='M16 16.7009C19.5256 16.7009 22.3504 13.8748 22.3504 10.3504C22.3504 6.82601 19.5256 4 16 4C12.4755 4 9.64954 6.82601 9.64954 10.3504C9.64954 13.8748 12.4755 16.7009 16 16.7009Z'
      fill='currentColor'
    />
    <path
      d='M16 19.8099C10.8244 19.8099 6.40356 20.6259 6.40356 23.89C6.40356 27.1552 10.7968 28 16 28C21.1756 28 25.5965 27.1852 25.5965 23.92C25.5965 20.6547 21.2044 19.8099 16 19.8099Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(UserIcon);
export default ForwardRef;
