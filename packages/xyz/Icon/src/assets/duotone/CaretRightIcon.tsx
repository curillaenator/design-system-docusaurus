import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../../utils/getAttributesByProps';
import { IconProps } from '../../interfaces';

const CaretRightIcon = (props: IconProps, ref: Ref<SVGSVGElement>) => (
  <svg
    {...getAttributesByProps(props)}
    width={32}
    height={32}
    viewBox='0 0 32 32'
    xmlns='http://www.w3.org/2000/svg'
    ref={ref}
  >
    <path
      d='M22.2763 17.5069C22.1992 17.5847 21.9112 17.9137 21.6407 18.1869C20.0625 19.8979 15.9418 22.6958 13.7862 23.552C13.4589 23.6886 12.6313 23.9794 12.1877 24C11.7644 24 11.3601 23.9016 10.9746 23.7077C10.4932 23.436 10.1092 23.0072 9.8968 22.5019C9.76153 22.1524 9.54917 21.1023 9.54917 21.0832C9.33827 19.9361 9.22336 18.0709 9.22336 16.0088C9.22336 14.0466 9.33827 12.2578 9.51135 11.0916C9.53026 11.071 9.74262 9.76831 9.97389 9.32183C10.3972 8.50523 11.2248 8 12.1106 8H12.1877C12.7651 8.01909 13.9782 8.52579 13.9782 8.54342C16.0189 9.39967 20.0421 12.0624 21.6596 13.8322C21.6596 13.8322 22.1163 14.2875 22.3141 14.571C22.6225 14.9793 22.7766 15.4845 22.7766 15.9897C22.7766 16.5537 22.6036 17.078 22.2763 17.5069Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(CaretRightIcon);
export default ForwardRef;
