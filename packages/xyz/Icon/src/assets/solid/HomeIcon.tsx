import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../../utils/getAttributesByProps';
import { IconProps } from '../../interfaces';

const HomeIcon = (props: IconProps, ref: Ref<SVGSVGElement>) => (
  <svg
    {...getAttributesByProps(props)}
    width={32}
    height={32}
    viewBox='0 0 32 32'
    xmlns='http://www.w3.org/2000/svg'
    ref={ref}
  >
    <path
      d='M12.5725 26.5385V22.8583C12.5724 21.9257 13.3308 21.168 14.2701 21.1622H17.7191C18.6626 21.1622 19.4275 21.9216 19.4275 22.8583V26.5279C19.4275 27.3367 20.0848 27.9941 20.8995 28H23.2526C24.3515 28.0028 25.4065 27.5714 26.1846 26.8008C26.9627 26.0303 27.4 24.9841 27.4 23.893V13.439C27.3999 12.5577 27.0065 11.7217 26.3255 11.1562L18.3315 4.80912C16.9342 3.69895 14.9384 3.73481 13.5824 4.89446L5.76039 11.1562C5.04726 11.705 4.62104 12.5435 4.59998 13.439V23.8824C4.59998 26.1565 6.45683 28 8.74738 28H11.0467C11.439 28.0028 11.8162 27.8501 12.0945 27.5757C12.3729 27.3013 12.5295 26.928 12.5295 26.5385H12.5725Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(HomeIcon);
export default ForwardRef;
