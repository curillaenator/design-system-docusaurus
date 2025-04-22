import React, { Ref, forwardRef } from 'react';

const KitIcon = (props: {}, ref: Ref<SVGSVGElement>) => (
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
      id='mask0_3001_13317'
      style={{ maskType: 'alpha' }}
      maskUnits='userSpaceOnUse'
      x='0'
      y='0'
      width='32'
      height='32'
    >
      <rect width='32' height='32' fill='white' />
    </mask>

    <g mask='url(#mask0_3001_13317)'>
      <rect width='32' height='32' rx='4' fill='#FF4040' />

      <path
        d='M12.2608 22V10.8H13.7008V15.728H14.5328L18.8368 10.8H20.6928L15.7808 16.224L21.2848 22H19.4288L14.5488 16.848H13.7008V22H12.2608Z'
        fill='white'
      />
    </g>
  </svg>
);

const ForwardRef = forwardRef(KitIcon);
export default ForwardRef;
