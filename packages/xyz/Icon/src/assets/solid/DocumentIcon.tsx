import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../../utils/getAttributesByProps';
import { IconProps } from '../../interfaces';

const DocumentIcon = (props: IconProps, ref: Ref<SVGSVGElement>) => (
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
      d='M10.972 4H21.0292C24.736 4 26.8 6.136 26.8 9.796V22.192C26.8 25.912 24.736 28 21.0292 28H10.972C7.32395 28 5.19995 25.912 5.19995 22.192V9.796C5.19995 6.136 7.32395 4 10.972 4ZM11.296 9.58V9.592C10.7788 9.592 10.36 10.012 10.36 10.528C10.36 11.044 10.7788 11.464 11.296 11.464H14.8828C15.4 11.464 15.82 11.044 15.82 10.5148C15.82 10 15.4 9.58 14.8828 9.58H11.296ZM20.704 16.888H11.296C10.7788 16.888 10.36 16.468 10.36 15.952C10.36 15.436 10.7788 15.0148 11.296 15.0148H20.704C21.22 15.0148 21.64 15.436 21.64 15.952C21.64 16.468 21.22 16.888 20.704 16.888ZM20.704 22.372H11.296C10.936 22.42 10.588 22.24 10.396 21.94C10.204 21.628 10.204 21.232 10.396 20.932C10.588 20.62 10.936 20.452 11.296 20.488H20.704C21.1828 20.536 21.544 20.944 21.544 21.436C21.544 21.9148 21.1828 22.324 20.704 22.372Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(DocumentIcon);
export default ForwardRef;
