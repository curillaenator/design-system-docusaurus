import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../../utils/getAttributesByProps';
import { IconProps } from '../../interfaces';

const UserNewIcon = (props: IconProps, ref: Ref<SVGSVGElement>) => (
  <svg
    {...getAttributesByProps(props)}
    width={32}
    height={32}
    viewBox='0 0 32 32'
    xmlns='http://www.w3.org/2000/svg'
    ref={ref}
  >
    <path
      d='M26.9212 13.1054H25.4775V11.6939C25.4775 11.0913 24.9942 10.6 24.3988 10.6C23.8045 10.6 23.32 11.0913 23.32 11.6939V13.1054H21.8788C21.2833 13.1054 20.8 13.5968 20.8 14.1994C20.8 14.802 21.2833 15.2933 21.8788 15.2933H23.32V16.7061C23.32 17.3087 23.8045 17.8 24.3988 17.8C24.9942 17.8 25.4775 17.3087 25.4775 16.7061V15.2933H26.9212C27.5155 15.2933 28 14.802 28 14.1994C28 13.5968 27.5155 13.1054 26.9212 13.1054Z'
      fill='currentColor'
    />
    <path
      d='M13 16.665C16.3055 16.665 18.9551 13.9812 18.9551 10.6331C18.9551 7.28502 16.3055 4.59998 13 4.59998C9.69449 4.59998 7.04481 7.28502 7.04481 10.6331C7.04481 13.9812 9.69449 16.665 13 16.665Z'
      fill='currentColor'
    />
    <path
      d='M13 19.6186C8.14507 19.6186 4 20.3948 4 23.4959C4 26.5958 8.11985 27.4 13 27.4C17.8538 27.4 22 26.6238 22 23.5227C22 20.4216 17.8802 19.6186 13 19.6186Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(UserNewIcon);
export default ForwardRef;
