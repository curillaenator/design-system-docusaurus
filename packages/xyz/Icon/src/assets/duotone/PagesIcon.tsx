import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../../utils/getAttributesByProps';
import { IconProps } from '../../interfaces';

const PagesIcon = (props: IconProps, ref: Ref<SVGSVGElement>) => (
  <svg
    {...getAttributesByProps(props)}
    width='32'
    height='32'
    viewBox='0 0 32 32'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    ref={ref}
  >
    <path
      d='M19.75 21.25V24.625C19.75 25.2463 19.2463 25.75 18.625 25.75H8.875C8.25368 25.75 7.75 25.2463 7.75 24.625V11.875C7.75 11.2537 8.25368 10.75 8.875 10.75H10.75C11.2611 10.75 11.7622 10.7926 12.25 10.8744M19.75 21.25H23.125C23.7463 21.25 24.25 20.7463 24.25 20.125V15.25C24.25 10.7905 21.0066 7.08855 16.75 6.37444C16.2622 6.2926 15.7611 6.25 15.25 6.25H13.375C12.7537 6.25 12.25 6.75368 12.25 7.375V10.8744M19.75 21.25H13.375C12.7537 21.25 12.25 20.7463 12.25 20.125V10.8744M24.25 17.5V15.625C24.25 13.761 22.739 12.25 20.875 12.25H19.375C18.7537 12.25 18.25 11.7463 18.25 11.125V9.625C18.25 7.76104 16.739 6.25 14.875 6.25H13.75'
      stroke='currentColor'
      fill='none'
      strokeWidth='1.4'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(PagesIcon);
export default ForwardRef;
