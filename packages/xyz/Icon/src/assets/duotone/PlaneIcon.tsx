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
      d='M27.3225 4.7684C26.7222 4.15495 25.8338 3.92806 25.0055 4.16815L5.6896 9.74924C4.81564 9.99174 4.19618 10.6844 4.02932 11.5632C3.85885 12.4587 4.45429 13.5968 5.23221 14.0722L11.2719 17.7601C11.8913 18.1395 12.6909 18.0446 13.2035 17.5308L20.1195 10.6148C20.4676 10.2534 21.0439 10.2534 21.392 10.6148C21.7402 10.9617 21.7402 11.5272 21.392 11.8873L14.464 18.8033C13.9502 19.3172 13.8541 20.1143 14.2323 20.7349L17.9226 26.7974C18.3548 27.5165 19.0991 27.9259 19.9154 27.9259C20.0115 27.9259 20.1195 27.9259 20.2155 27.9127C21.1519 27.7938 21.8962 27.1564 22.1723 26.256L27.8987 7.08535C28.1508 6.26901 27.9227 5.38065 27.3225 4.7684Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(PlaneIcon);
export default ForwardRef;
