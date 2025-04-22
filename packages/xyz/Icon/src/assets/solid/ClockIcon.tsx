import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../../utils/getAttributesByProps';
import { IconProps } from '../../interfaces';

const ClockIcon = (props: IconProps, ref: Ref<SVGSVGElement>) => (
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
      d='M16 28C22.6276 28 28 22.6288 28 16C28 9.3736 22.6276 4 16 4C9.3724 4 4 9.3736 4 16C4 22.6288 9.3724 28 16 28ZM19.8276 20.4514C19.9728 20.5366 20.1312 20.5774 20.2884 20.5774C20.5944 20.5774 20.8932 20.4202 21.0624 20.1382C21.3168 19.711 21.1764 19.159 20.7504 18.9034L16.4784 16.3558V10.8106C16.4784 10.3138 16.0752 9.91062 15.5784 9.91062C15.0816 9.91062 14.6784 10.3138 14.6784 10.8106V16.867C14.6784 17.1838 14.8452 17.4778 15.1164 17.641L19.8276 20.4514Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(ClockIcon);
export default ForwardRef;
