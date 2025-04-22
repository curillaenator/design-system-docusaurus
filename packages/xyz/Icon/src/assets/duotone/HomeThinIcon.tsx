import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../../utils/getAttributesByProps';
import { IconProps } from '../../interfaces';

const HomeThinIcon = (props: IconProps, ref: Ref<SVGSVGElement>) => (
  <svg
    {...getAttributesByProps(props)}
    width={32}
    height={32}
    viewBox='0 0 32 32'
    xmlns='http://www.w3.org/2000/svg'
    ref={ref}
  >
    <path
      d='M8 15.6176L15.3473 8.27036C15.7078 7.90988 16.2922 7.90988 16.6527 8.27036L24 15.6176M9.84615 13.7715V22.0792C9.84615 22.589 10.2594 23.0023 10.7692 23.0023H14.1538V19.0023C14.1538 18.4925 14.5671 18.0792 15.0769 18.0792H16.9231C17.4329 18.0792 17.8462 18.4925 17.8462 19.0023V23.0023H21.2308C21.7406 23.0023 22.1538 22.589 22.1538 22.0792V13.7715M12.9231 23.0023H19.6923'
      stroke='currentColor'
      fill='none'
      strokeWidth='1.4'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(HomeThinIcon);
export default ForwardRef;
