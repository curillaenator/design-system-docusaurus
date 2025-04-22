import React, { forwardRef } from 'react';

const SvgCmponent = forwardRef<SVGSVGElement>((props, ref) => (
  <svg {...props} ref={ref} width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M4 4L8 0L24 8L22 20L4 4Z' fill='white' fillOpacity='0.4' />
    <path d='M4 44L8 48L24 40L22 28L4 44Z' fill='white' fillOpacity='0.4' />
    <path d='M4 44L5.24537e-07 40L8 24L20 26L4 44Z' fill='white' fillOpacity='0.4' />
    <path d='M44 44L48 40L40 24L28 26L44 44Z' fill='white' fillOpacity='0.4' />
    <path d='M44 4L40 0L24 8L26 20L44 4Z' fill='white' fillOpacity='0.4' />
    <path d='M44 44L40 48L24 40L26 28L44 44Z' fill='white' fillOpacity='0.4' />
    <path d='M4 4L0 8L8 24L20 22L4 4Z' fill='white' fillOpacity='0.4' />
    <path d='M44 4L48 8L40 24L28 22L44 4Z' fill='white' fillOpacity='0.4' />
  </svg>
));

SvgCmponent.displayName = 'LogoMin';

export default SvgCmponent;
