import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../../utils/getAttributesByProps';
import { IconProps } from '../../interfaces';

const FunnelIcon = (props: IconProps, ref: Ref<SVGSVGElement>) => (
  <svg
    {...getAttributesByProps(props)}
    width={32}
    height={32}
    viewBox='0 0 32 32'
    xmlns='http://www.w3.org/2000/svg'
    ref={ref}
  >
    <path
      d='M12.0751 18.2477V27.0538C12.0751 27.3745 12.2366 27.6766 12.501 27.8496C12.6521 27.9494 12.8266 28 13.0011 28C13.1327 28 13.2642 27.9721 13.3867 27.9162L18.6746 25.4515C19.0054 25.2984 19.2177 24.9617 19.2177 24.5904V18.2477H12.0751Z'
      fill='currentColor'
    />
    <path
      d='M19.4287 18.1255L27.2355 10.2935C27.7239 9.80244 28 9.1317 28 8.43168V6.13466C28 4.69336 26.8565 4 25.4459 4H6.55408C5.14354 4 4 4.69336 4 6.13466V8.47293C4 9.13569 4.24616 9.77449 4.69029 10.2589L11.8628 18.0842C11.9983 18.2319 12.1871 18.3158 12.3864 18.3171L18.922 18.3357C19.1109 18.3371 19.2932 18.2626 19.4287 18.1255Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(FunnelIcon);
export default ForwardRef;
