import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../../utils/getAttributesByProps';
import { IconProps } from '../../interfaces';

const VideoIcon = (props: IconProps, ref: Ref<SVGSVGElement>) => (
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
      d='M27.1972 9.93106C26.6944 9.6143 26.0764 9.58628 25.5496 9.8543L23.7712 10.7522C23.1136 11.0835 22.7056 11.7536 22.7056 12.4992V19.4994C22.7056 20.245 23.1136 20.9138 23.7712 21.2476L25.5484 22.1443C25.7896 22.2685 26.0476 22.3282 26.3056 22.3282C26.6152 22.3282 26.9224 22.2405 27.1972 22.0687C27.7 21.7532 28 21.2062 28 20.6068V11.3942C28 10.7948 27.7 10.2478 27.1972 9.93106Z'
      fill='currentColor'
    />
    <path
      d='M15.8861 25H8.93565C6.02922 25 4 22.9959 4 20.1269V11.8731C4 9.00284 6.02922 7 8.93565 7H15.8861C18.7926 7 20.8218 9.00284 20.8218 11.8731V20.1269C20.8218 22.9959 18.7926 25 15.8861 25Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(VideoIcon);
export default ForwardRef;
