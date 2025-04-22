import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../../utils/getAttributesByProps';
import { IconProps } from '../../interfaces';

const BookmarkIcon = (props: IconProps, ref: Ref<SVGSVGElement>) => (
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
      d='M15.9894 23.9458L8.19936 27.8369C7.61107 28.1562 6.87724 27.943 6.54821 27.3572C6.45211 27.173 6.40129 26.9683 6.40002 26.7602V18.0505C6.40002 18.914 6.8869 19.4471 8.16761 20.0441L15.9894 23.9458Z'
      fill='currentColor'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12.2743 4H19.6834C22.9328 4 25.5683 5.27926 25.6 8.55204V26.7602C25.5987 26.9649 25.5479 27.1661 25.4518 27.3465C25.2976 27.6408 25.0312 27.8592 24.7138 27.9517C24.3964 28.0442 24.0554 28.0028 23.7689 27.8369L15.9894 23.9458L8.16761 20.0441C6.8869 19.4471 6.40002 18.9141 6.40002 18.0506V8.55204C6.40002 5.27926 9.03553 4 12.2743 4ZM11.4699 13.1467H20.4984C21.0186 13.1467 21.4404 12.7219 21.4404 12.1979C21.4404 11.6739 21.0186 11.2492 20.4984 11.2492H11.4699C10.9497 11.2492 10.5279 11.6739 10.5279 12.1979C10.5279 12.7219 10.9497 13.1467 11.4699 13.1467Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(BookmarkIcon);
export default ForwardRef;
