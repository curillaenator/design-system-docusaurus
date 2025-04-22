import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../../utils/getAttributesByProps';
import { IconProps } from '../../interfaces';

const UploadIcon = (props: IconProps, ref: Ref<SVGSVGElement>) => (
  <svg
    {...getAttributesByProps(props)}
    width={32}
    height={32}
    viewBox='0 0 32 32'
    xmlns='http://www.w3.org/2000/svg'
    ref={ref}
  >
    <path
      opacity={0.4}
      d='M15.3457 4.26528L11.8549 7.68022C11.4949 8.03317 11.4949 8.60116 11.8573 8.95294C12.2197 9.30355 12.8041 9.30238 13.1641 8.9506L15.0757 7.07951V8.87347V18.9418C15.0757 19.4385 15.4897 19.8417 15.9997 19.8417C16.5109 19.8417 16.9237 19.4385 16.9237 18.9418V7.07951L18.8353 8.9506C19.1953 9.30238 19.7797 9.30355 20.1421 8.95294C20.3233 8.77647 20.4145 8.54623 20.4145 8.31483C20.4145 8.08576 20.3233 7.85553 20.1445 7.68022L16.6549 4.26528C16.4809 4.09582 16.2457 3.99998 15.9997 3.99998C15.7549 3.99998 15.5197 4.09582 15.3457 4.26528Z'
      fill='currentColor'
    />
    <path
      d='M15.0757 11.2V18.9419C15.0757 19.4386 15.4897 19.8418 15.9997 19.8418C16.5109 19.8418 16.9237 19.4386 16.9237 18.9419V11.2H22.6636C25.606 11.2 28 13.6363 28 16.6307V22.5816C28 25.5698 25.612 28 22.6756 28H9.3364C6.3952 28 4 25.5637 4 22.5706V16.6172C4 13.6302 6.388 11.2 9.3244 11.2H15.0757Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(UploadIcon);
export default ForwardRef;
