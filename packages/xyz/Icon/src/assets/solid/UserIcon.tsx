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
      d='M16 16.7009C19.5257 16.7009 22.3505 13.8748 22.3505 10.3504C22.3505 6.82601 19.5257 4 16 4C12.4756 4 9.6496 6.82601 9.6496 10.3504C9.6496 13.8748 12.4756 16.7009 16 16.7009Z'
      fill='currentColor'
    />
    <path
      d='M16 19.81C10.8244 19.81 6.40356 20.626 6.40356 23.89C6.40356 27.1552 10.7968 28 16 28C21.1756 28 25.5965 27.1852 25.5965 23.92C25.5965 20.6548 21.2044 19.81 16 19.81Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(UserIcon);
export default ForwardRef;
