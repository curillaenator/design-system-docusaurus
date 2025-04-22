import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../../utils/getAttributesByProps';
import { IconProps } from '../../interfaces';

const LoginIcon = (props: IconProps, ref: Ref<SVGSVGElement>) => (
  <svg
    {...getAttributesByProps(props)}
    width={32}
    height={32}
    viewBox='0 0 32 32'
    xmlns='http://www.w3.org/2000/svg'
    ref={ref}
  >
    <path
      d='M15.8652 4C12.8272 4 10.3554 6.394 10.3554 9.3352V15.0746H17.9086L15.9584 13.163C15.5916 12.803 15.5904 12.2186 15.956 11.8562C16.3229 11.4938 16.9152 11.4938 17.2833 11.8538L20.8448 15.3446C21.0216 15.5186 21.1215 15.7538 21.1215 15.9998C21.1215 16.2446 21.0216 16.4798 20.8448 16.6538L17.2833 20.1446C17.1005 20.3234 16.8604 20.4146 16.6215 20.4146C16.3802 20.4146 16.1401 20.3234 15.956 20.1422C15.5904 19.7798 15.5916 19.1954 15.9584 18.8354L17.9086 16.9226H10.3554V22.6744C10.3554 25.6108 12.8222 28 15.8528 28H21.8915C24.9295 28 27.4 25.6048 27.4 22.6624V9.3232C27.4 6.388 24.9345 4 21.9039 4H15.8652Z'
      fill='currentColor'
    />
    <path
      d='M10.36 15.0745H5.53849C5.02048 15.0745 4.59998 15.4885 4.59998 15.9997C4.59998 16.5097 5.02048 16.9225 5.53849 16.9225H10.36V15.0745Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(LoginIcon);
export default ForwardRef;
