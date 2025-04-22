import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../../utils/getAttributesByProps';
import { IconProps } from '../../interfaces';

const CaretUpIcon = (props: IconProps, ref: Ref<SVGSVGElement>) => (
  <svg
    {...getAttributesByProps(props)}
    width={32}
    height={32}
    viewBox='0 0 32 32'
    xmlns='http://www.w3.org/2000/svg'
    ref={ref}
  >
    <path
      d='M17.5069 9.72368C17.5847 9.80077 17.9137 10.0888 18.1869 10.3593C19.8979 11.9375 22.6958 16.0582 23.552 18.2138C23.6886 18.541 23.9794 19.3687 24 19.8123C24 20.2356 23.9016 20.6399 23.7077 21.0254C23.436 21.5068 23.0072 21.8908 22.5019 22.1032C22.1524 22.2384 21.1023 22.4508 21.0832 22.4508C19.9361 22.6617 18.0709 22.7766 16.0088 22.7766C14.0466 22.7766 12.2578 22.6617 11.0916 22.4886C11.071 22.4697 9.76831 22.2574 9.32183 22.0261C8.50523 21.6028 8 20.7752 8 19.8894V19.8123C8.01909 19.2348 8.52579 18.0218 8.54342 18.0218C9.39967 15.9811 12.0624 11.9578 13.8322 10.3404C13.8322 10.3404 14.2875 9.88368 14.571 9.68587C14.9793 9.37751 15.4845 9.22333 15.9897 9.22333C16.5537 9.22333 17.078 9.39642 17.5069 9.72368Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(CaretUpIcon);
export default ForwardRef;
