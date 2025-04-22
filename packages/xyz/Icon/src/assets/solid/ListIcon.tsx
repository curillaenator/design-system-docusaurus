import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../../utils/getAttributesByProps';
import { IconProps } from '../../interfaces';

const ListIcon = (props: IconProps, ref: Ref<SVGSVGElement>) => (
  <svg
    {...getAttributesByProps(props)}
    width={32}
    height={32}
    viewBox='0 0 32 32'
    xmlns='http://www.w3.org/2000/svg'
    ref={ref}
  >
    <path
      d='M13.6999 20.8829H5.80932C4.81066 20.8829 4 21.6793 4 22.6605C4 23.6403 4.81066 24.4381 5.80932 24.4381H13.6999C14.6986 24.4381 15.5093 23.6403 15.5093 22.6605C15.5093 21.6793 14.6986 20.8829 13.6999 20.8829Z'
      fill='currentColor'
    />
    <path
      d='M28 9.38761C28 8.40777 27.1893 7.61133 26.192 7.61133H18.3014C17.3027 7.61133 16.4921 8.40777 16.4921 9.38761C16.4921 10.3688 17.3027 11.1652 18.3014 11.1652H26.192C27.1893 11.1652 28 10.3688 28 9.38761Z'
      fill='currentColor'
    />
    <path
      d='M28 22.6124C28 24.8511 26.1533 26.6667 23.8734 26.6667C21.5947 26.6667 19.7467 24.8511 19.7467 22.6124C19.7467 20.3724 21.5947 18.5568 23.8734 18.5568C26.1533 18.5568 28 20.3724 28 22.6124Z'
      fill='currentColor'
    />
    <path
      d='M12.2533 9.38761C12.2533 11.6276 10.4066 13.4432 8.12664 13.4432C5.84799 13.4432 4 11.6276 4 9.38761C4 7.14892 5.84799 5.33334 8.12664 5.33334C10.4066 5.33334 12.2533 7.14892 12.2533 9.38761Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(ListIcon);
export default ForwardRef;
