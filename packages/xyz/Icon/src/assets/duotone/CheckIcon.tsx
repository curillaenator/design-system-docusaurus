import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../../utils/getAttributesByProps';
import { IconProps } from '../../interfaces';

const CheckIcon = (props: IconProps, ref: Ref<SVGSVGElement>) => (
  <svg
    {...getAttributesByProps(props)}
    width={32}
    height={32}
    viewBox='0 0 32 32'
    xmlns='http://www.w3.org/2000/svg'
    ref={ref}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M27.7234 8.30953C28.1047 8.70902 28.09 9.34202 27.6905 9.72336L13.0238 23.7234C12.6374 24.0922 12.0293 24.0922 11.6429 23.7234L4.30954 16.7237C3.91004 16.3424 3.8953 15.7094 4.27663 15.3099C4.65796 14.9104 5.29095 14.8956 5.69046 15.2769L12.3333 21.6176L26.3095 8.27665C26.709 7.89531 27.342 7.91003 27.7234 8.30953Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(CheckIcon);
export default ForwardRef;
