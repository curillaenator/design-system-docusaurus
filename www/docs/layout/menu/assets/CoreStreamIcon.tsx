import React, { Ref, forwardRef } from 'react';

const CoreStreamIcon = (props: {}, ref: Ref<SVGSVGElement>) => (
  <svg
    {...props}
    ref={ref}
    width='32'
    height='32'
    viewBox='0 0 32 32'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    style={{ flexShrink: 0 }}
  >
    <mask
      id='mask0_3001_17503'
      style={{ maskType: 'alpha' }}
      maskUnits='userSpaceOnUse'
      x='0'
      y='0'
      width='32'
      height='32'
    >
      <rect width='32' height='32' fill='white' />
    </mask>

    <g mask='url(#mask0_3001_17503)'>
      <rect width='32' height='32' rx='4' fill='#20A060' />

      <path
        d='M19.9984 11.168V12.768C19.4224 12.368 18.2864 11.952 16.9584 11.952C14.5904 11.952 13.3584 13.056 13.3584 16.256C13.3584 19.76 14.7664 20.832 17.0864 20.832C18.5904 20.832 19.8224 20.24 20.3024 19.968V21.424C19.7904 21.712 18.5904 22.128 17.0704 22.128C13.5344 22.128 11.8544 20.464 11.8544 16.4C11.8544 12.352 13.5984 10.672 17.0064 10.672C18.4464 10.672 19.4384 10.992 19.9984 11.168Z'
        fill='white'
      />
    </g>
  </svg>
);

const ForwardRef = forwardRef(CoreStreamIcon);
export default ForwardRef;
