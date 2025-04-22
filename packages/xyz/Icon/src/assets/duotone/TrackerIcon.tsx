import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../../utils/getAttributesByProps';
import { IconProps } from '../../interfaces';

const TrackerIcon = (props: IconProps, ref: Ref<SVGSVGElement>) => (
  <svg
    {...getAttributesByProps(props)}
    ref={ref}
    width='32'
    height='32'
    viewBox='0 0 48 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M4 4L6.98069 1.01931C7.58941 0.410587 8.51936 0.259678 9.28933 0.644667L24 8L22.5953 16.4284C22.3366 17.9805 20.4698 18.6398 19.2937 17.5944L4 4Z'
      fill='currentColor'
      fillOpacity='0.4'
    />
    <path
      d='M4 44L6.98069 46.9807C7.58941 47.5894 8.51936 47.7403 9.28933 47.3553L24 40L22.5953 31.5716C22.3366 30.0195 20.4698 29.3602 19.2937 30.4056L4 44Z'
      fill='currentColor'
      fillOpacity='0.4'
    />
    <path
      d='M4 44L1.01931 41.0193C0.410588 40.4106 0.259679 39.4806 0.644667 38.7107L8 24L16.4284 25.4047C17.9805 25.6634 18.6398 27.5302 17.5944 28.7063L4 44Z'
      fill='currentColor'
      fillOpacity='0.4'
    />
    <path
      d='M44 44L46.9807 41.0193C47.5894 40.4106 47.7403 39.4806 47.3553 38.7107L40 24L31.5716 25.4047C30.0195 25.6634 29.3602 27.5302 30.4056 28.7063L44 44Z'
      fill='currentColor'
      fillOpacity='0.4'
    />
    <path
      d='M44 4L41.0193 1.01931C40.4106 0.410587 39.4806 0.259678 38.7107 0.644667L24 8L25.4047 16.4284C25.6634 17.9805 27.5302 18.6398 28.7063 17.5944L44 4Z'
      fill='currentColor'
      fillOpacity='0.4'
    />
    <path
      d='M44 44L41.0193 46.9807C40.4106 47.5894 39.4806 47.7403 38.7107 47.3553L24 40L25.4047 31.5716C25.6634 30.0195 27.5302 29.3602 28.7063 30.4056L44 44Z'
      fill='currentColor'
      fillOpacity='0.4'
    />
    <path
      d='M4 4L1.01931 6.98069C0.410587 7.58941 0.259678 8.51936 0.644667 9.28933L8 24L16.4284 22.5953C17.9805 22.3366 18.6398 20.4698 17.5944 19.2937L4 4Z'
      fill='currentColor'
      fillOpacity='0.4'
    />
    <path
      d='M44 4L46.9807 6.98069C47.5894 7.58941 47.7403 8.51936 47.3553 9.28933L40 24L31.5716 22.5953C30.0195 22.3366 29.3602 20.4698 30.4056 19.2937L44 4Z'
      fill='currentColor'
      fillOpacity='0.4'
    />
  </svg>
);

const ForwardRef = forwardRef(TrackerIcon);
export default ForwardRef;
