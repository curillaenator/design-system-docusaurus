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
      d='M15.0757 11.2V18.9418C15.0757 19.4385 15.4897 19.8417 15.9997 19.8417C16.5109 19.8417 16.9237 19.4385 16.9237 18.9418V11.2H22.6636C25.606 11.2 28 13.6363 28 16.6307V22.5815C28 25.5698 25.612 28 22.6756 28H9.3364C6.3952 28 4 25.5637 4 22.5706V16.6172C4 13.6302 6.388 11.2 9.3244 11.2H15.0757Z'
      fill='currentColor'
    />
    <path
      d='M11.855 7.68027L15.3458 4.26533C15.5198 4.09586 15.755 4.00003 15.9998 4.00003C16.2458 4.00003 16.481 4.09586 16.655 4.26533L20.1446 7.68027C20.3234 7.85558 20.4146 8.08581 20.4146 8.31488C20.4146 8.54628 20.3234 8.77651 20.1422 8.95299C19.7798 9.3036 19.1954 9.30243 18.8354 8.95065L16.9238 7.07956L16.9237 11.2H15.0757L15.0758 7.07956L13.1642 8.95065C12.8042 9.30243 12.2198 9.3036 11.8574 8.95299C11.495 8.60121 11.495 8.03322 11.855 7.68027Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(UploadIcon);
export default ForwardRef;
