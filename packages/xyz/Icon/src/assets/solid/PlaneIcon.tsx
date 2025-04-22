import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../../utils/getAttributesByProps';
import { IconProps } from '../../interfaces';

const PlaneIcon = (props: IconProps, ref: Ref<SVGSVGElement>) => (
  <svg
    {...getAttributesByProps(props)}
    width={32}
    height={32}
    viewBox='0 0 32 32'
    xmlns='http://www.w3.org/2000/svg'
    ref={ref}
  >
    <path
      d='M27.3225 4.76837C26.7222 4.15492 25.8338 3.92803 25.0055 4.16812L5.6896 9.74921C4.81564 9.99171 4.19618 10.6844 4.02932 11.5632C3.85885 12.4587 4.45429 13.5968 5.23221 14.0722L11.2719 17.7601C11.8913 18.1394 12.6909 18.0446 13.2035 17.5308L20.1195 10.6148C20.4676 10.2534 21.0439 10.2534 21.392 10.6148C21.7402 10.9617 21.7402 11.5271 21.392 11.8873L14.464 18.8033C13.9502 19.3171 13.8541 20.1143 14.2323 20.7349L17.9226 26.7974C18.3548 27.5165 19.0991 27.9259 19.9154 27.9259C20.0115 27.9259 20.1195 27.9259 20.2155 27.9126C21.1519 27.7938 21.8962 27.1563 22.1723 26.256L27.8987 7.08532C28.1508 6.26898 27.9227 5.38062 27.3225 4.76837Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(PlaneIcon);
export default ForwardRef;
