import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../../utils/getAttributesByProps';
import { IconProps } from '../../interfaces';

const ArrowDownIcon = (props: IconProps, ref: Ref<SVGSVGElement>) => (
  <svg
    {...getAttributesByProps(props)}
    width={32}
    height={32}
    viewBox='0 0 32 32'
    xmlns='http://www.w3.org/2000/svg'
    ref={ref}
  >
    <g opacity={0.4}>
      <path
        d='M14.4129 10.9366L13.9767 6.00434C13.9767 4.89744 14.8829 4 16.0006 4C17.1183 4 18.0244 4.89744 18.0244 6.00434L17.5882 10.9366C17.5882 11.805 16.8774 12.509 16.0006 12.509C15.1223 12.509 14.4129 11.805 14.4129 10.9366Z'
        fill='currentColor'
      />
    </g>
    <path
      d='M14.4931 27.4996C14.4153 27.4226 14.0863 27.1346 13.8131 26.864C12.1021 25.2859 9.3042 21.1652 8.44795 19.0096C8.31136 18.6823 8.02056 17.8547 8 17.411C8 16.9878 8.0984 16.5834 8.29227 16.198C8.56398 15.7165 8.99284 15.3325 9.49807 15.1202C9.84762 14.9849 10.8977 14.7725 10.9168 14.7725C12.0639 14.5616 13.9291 14.4467 15.9912 14.4467C17.9534 14.4467 19.7422 14.5616 20.9084 14.7347C20.929 14.7536 22.2317 14.966 22.6782 15.1973C23.4948 15.6205 24 16.4481 24 17.334V17.411C23.9809 17.9885 23.4742 19.2016 23.4566 19.2016C22.6003 21.2423 19.9376 25.2655 18.1678 26.8829C18.1678 26.8829 17.7125 27.3397 17.429 27.5375C17.0207 27.8458 16.5155 28 16.0103 28C15.4463 28 14.922 27.8269 14.4931 27.4996Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(ArrowDownIcon);
export default ForwardRef;
