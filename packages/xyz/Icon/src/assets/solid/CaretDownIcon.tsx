import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../../utils/getAttributesByProps';
import { IconProps } from '../../interfaces';

const CaretDownIcon = (props: IconProps, ref: Ref<SVGSVGElement>) => (
  <svg
    {...getAttributesByProps(props)}
    width={32}
    height={32}
    viewBox='0 0 32 32'
    xmlns='http://www.w3.org/2000/svg'
    ref={ref}
  >
    <path
      d='M14.4931 22.2763C14.4153 22.1992 14.0863 21.9112 13.8131 21.6407C12.1021 20.0625 9.3042 15.9418 8.44795 13.7862C8.31136 13.4589 8.02056 12.6313 8 12.1877C8 11.7644 8.0984 11.3601 8.29227 10.9746C8.56398 10.4932 8.99284 10.1092 9.49807 9.8968C9.84762 9.76153 10.8977 9.54917 10.9168 9.54917C12.0639 9.33827 13.9291 9.22336 15.9912 9.22336C17.9534 9.22336 19.7422 9.33827 20.9084 9.51135C20.929 9.53026 22.2317 9.74262 22.6782 9.97389C23.4948 10.3972 24 11.2248 24 12.1106V12.1877C23.9809 12.7651 23.4742 13.9782 23.4566 13.9782C22.6003 16.0189 19.9376 20.0421 18.1678 21.6596C18.1678 21.6596 17.7125 22.1163 17.429 22.3141C17.0207 22.6225 16.5155 22.7766 16.0103 22.7766C15.4463 22.7766 14.922 22.6036 14.4931 22.2763Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(CaretDownIcon);
export default ForwardRef;
