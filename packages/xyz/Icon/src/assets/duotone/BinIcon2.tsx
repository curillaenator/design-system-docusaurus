import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../../utils/getAttributesByProps';
import { IconProps } from '../../interfaces';

const BinIcon2 = (props: IconProps, ref: Ref<SVGSVGElement>) => (
  <svg
    {...getAttributesByProps(props)}
    ref={ref}
    width='32'
    height='32'
    viewBox='0 0 32 32'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M18.7404 13L18.3942 22M13.6058 22L13.2596 13M23.2276 9.79057C23.5696 9.84221 23.9104 9.89747 24.25 9.95629M23.2276 9.79057L22.1598 23.6726C22.0696 24.8448 21.0921 25.75 19.9164 25.75H12.0836C10.9079 25.75 9.93037 24.8448 9.8402 23.6726L8.77235 9.79057M23.2276 9.79057C22.0812 9.61744 20.9215 9.48485 19.75 9.39432M7.75 9.95629C8.08957 9.89747 8.43037 9.84221 8.77235 9.79057M8.77235 9.79057C9.91878 9.61744 11.0785 9.48485 12.25 9.39432M19.75 9.39432V8.47819C19.75 7.29882 18.8393 6.31423 17.6606 6.27652C17.1092 6.25889 16.5556 6.25 16 6.25C15.4444 6.25 14.8908 6.25889 14.3394 6.27652C13.1607 6.31423 12.25 7.29882 12.25 8.47819V9.39432M19.75 9.39432C18.5126 9.2987 17.262 9.25 16 9.25C14.738 9.25 13.4874 9.2987 12.25 9.39432'
      stroke='currentColor'
      fill='none'
      strokeWidth='1.4'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(BinIcon2);
export default ForwardRef;
