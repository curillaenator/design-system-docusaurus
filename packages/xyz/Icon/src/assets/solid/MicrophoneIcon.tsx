import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../../utils/getAttributesByProps';
import { IconProps } from '../../interfaces';

const MicrophoneIcon = (props: IconProps, ref: Ref<SVGSVGElement>) => (
  <svg
    {...getAttributesByProps(props)}
    width={32}
    height={32}
    viewBox='0 0 32 32'
    xmlns='http://www.w3.org/2000/svg'
    ref={ref}
  >
    <path
      d='M15.7895 19.8605H16.2103C19.0932 19.8605 21.4321 17.5519 21.4321 14.7049V9.15672C21.4321 6.30744 19.0932 4 16.2103 4H15.7895C12.9066 4 10.5677 6.30744 10.5677 9.15672V14.7049C10.5677 17.5519 12.9066 19.8605 15.7895 19.8605Z'
      fill='currentColor'
    />
    <path
      d='M25.0376 13.3908C24.3959 13.3908 23.8751 13.904 23.8751 14.5388C23.8751 18.8265 20.3424 22.3152 16.0006 22.3152C11.6577 22.3152 8.12497 18.8265 8.12497 14.5388C8.12497 13.904 7.60419 13.3908 6.96251 13.3908C6.32083 13.3908 5.80005 13.904 5.80005 14.5388C5.80005 19.7047 9.75939 23.9694 14.8382 24.5423V26.852C14.8382 27.4857 15.3578 28 16.0006 28C16.6423 28 17.1631 27.4857 17.1631 26.852V24.5423C22.2407 23.9694 26.2001 19.7047 26.2001 14.5388C26.2001 13.904 25.6793 13.3908 25.0376 13.3908Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(MicrophoneIcon);
export default ForwardRef;
