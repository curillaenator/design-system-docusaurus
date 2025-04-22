import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../../utils/getAttributesByProps';
import { IconProps } from '../../interfaces';

const LocationIcon = (props: IconProps, ref: Ref<SVGSVGElement>) => (
  <svg
    {...getAttributesByProps(props)}
    width={32}
    height={32}
    viewBox='0 0 32 32'
    xmlns='http://www.w3.org/2000/svg'
    ref={ref}
  >
    <path
      d='M22.0002 26.8C22.0002 27.4627 19.3139 28 16.0002 28C12.6865 28 10.0002 27.4627 10.0002 26.8C10.0002 26.1373 12.6865 25.6 16.0002 25.6C19.3139 25.6 22.0002 26.1373 22.0002 26.8Z'
      fill='currentColor'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M11.838 5.12413C14.4599 3.60073 17.6825 3.62736 20.2798 5.19387C22.8514 6.7923 24.4145 9.64501 24.3999 12.7137C24.34 15.7623 22.6641 18.628 20.5691 20.8433C19.3599 22.1277 18.0072 23.2634 16.5387 24.2272C16.3875 24.3147 16.2218 24.3732 16.0499 24.4C15.8844 24.393 15.7233 24.3441 15.581 24.2577C13.339 22.8095 11.3721 20.9608 9.7749 18.8008C8.4384 16.9976 7.6791 14.8192 7.6001 12.5613C7.59836 9.48669 9.21622 6.64752 11.838 5.12413ZM13.3531 13.8337C13.7941 14.921 14.8351 15.6302 15.99 15.6302C16.7466 15.6356 17.4739 15.3326 18.0099 14.7886C18.5458 14.2445 18.8459 13.5048 18.8432 12.7341C18.8472 11.5576 18.1546 10.4948 17.0888 10.0417C16.023 9.58868 14.7941 9.83481 13.9761 10.6652C13.158 11.4956 12.9121 12.7465 13.3531 13.8337Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(LocationIcon);
export default ForwardRef;
