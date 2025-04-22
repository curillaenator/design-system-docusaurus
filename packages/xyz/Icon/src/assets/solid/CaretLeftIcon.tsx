import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../../utils/getAttributesByProps';
import { IconProps } from '../../interfaces';

const CaretLeftIcon = (props: IconProps, ref: Ref<SVGSVGElement>) => (
  <svg
    {...getAttributesByProps(props)}
    width={32}
    height={32}
    viewBox='0 0 32 32'
    xmlns='http://www.w3.org/2000/svg'
    ref={ref}
  >
    <path
      d='M9.72372 14.4931C9.80081 14.4153 10.0888 14.0863 10.3593 13.8131C11.9375 12.1021 16.0582 9.3042 18.2138 8.44795C18.5411 8.31136 19.3687 8.02056 19.8123 8C20.2356 8 20.6399 8.0984 21.0254 8.29227C21.5068 8.56398 21.8908 8.99284 22.1032 9.49807C22.2385 9.84762 22.4508 10.8977 22.4508 10.9168C22.6617 12.0639 22.7766 13.9291 22.7766 15.9912C22.7766 17.9534 22.6617 19.7422 22.4887 20.9084C22.4697 20.929 22.2574 22.2317 22.0261 22.6782C21.6028 23.4948 20.7752 24 19.8894 24H19.8123C19.2349 23.9809 18.0218 23.4742 18.0218 23.4566C15.9811 22.6003 11.9579 19.9376 10.3404 18.1678C10.3404 18.1678 9.88371 17.7125 9.6859 17.429C9.37754 17.0207 9.22336 16.5155 9.22336 16.0103C9.22336 15.4463 9.39645 14.922 9.72372 14.4931Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(CaretLeftIcon);
export default ForwardRef;
