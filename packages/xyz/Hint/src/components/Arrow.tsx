import React, { forwardRef } from 'react';

interface ArrowProps {
  className?: string;
}

export const Arrow = forwardRef<SVGSVGElement, ArrowProps>(({ className, ...rest }, ref) => (
  <svg
    {...rest}
    ref={ref}
    className={className}
    width='40px'
    height='8px'
    viewBox='0 0 40 8'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M40 8 L0 8 V6 C2.26701 5.99999 3.4005 5.99999 4.51191 5.88313C6.89509 5.63256 9.22469 4.98165 11.412 3.95519C12.4321 3.4765 13.4163 2.88481 15.3846 1.70144C16.6267 0.954656 17.2478 0.581265 17.8855 0.35895C19.2585 -0.11965 20.7415 -0.11965 22.1144 0.358951C22.7522 0.581266 23.3733 0.954657 24.6154 1.70144C26.5837 2.88481 27.5678 3.47649 28.5879 3.95519C30.7753 4.98165 33.1049 5.63256 35.4881 5.88314C36.5995 5.99999 37.733 5.99999 40 6 V8 Z' />
  </svg>
));
