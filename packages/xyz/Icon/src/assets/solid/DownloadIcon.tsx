import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../../utils/getAttributesByProps';
import { IconProps } from '../../interfaces';

const DownloadIcon = (props: IconProps, ref: Ref<SVGSVGElement>) => (
  <svg
    {...getAttributesByProps(props)}
    width={32}
    height={32}
    viewBox='0 0 32 32'
    xmlns='http://www.w3.org/2000/svg'
    ref={ref}
  >
    <path
      d='M20.1462 17.2834L16.6554 20.8449C16.4814 21.0216 16.2462 21.1215 16.0002 21.1215C15.7554 21.1215 15.5202 21.0216 15.3462 20.8449L11.8554 17.2834C11.6766 17.1005 11.5854 16.8604 11.5854 16.6215C11.5854 16.3802 11.6766 16.1401 11.8578 15.956C12.2202 15.5904 12.8046 15.5916 13.1646 15.9585L15.0774 17.9086V10.3554H9.3256C6.3892 10.3554 4 12.8222 4 15.8527V21.8915C4 24.9295 6.3952 27.4 9.3376 27.4H22.6768C25.612 27.4 28 24.9344 28 21.9039V15.8651C28 12.8272 25.606 10.3554 22.6648 10.3554H16.9254V17.9086L18.837 15.9585C19.197 15.5916 19.7814 15.5904 20.1438 15.956C20.5062 16.3229 20.5062 16.9153 20.1462 17.2834Z'
      fill='currentColor'
    />
    <path
      d='M16.9254 10.36V5.53849C16.9254 5.02048 16.5114 4.59998 16.0002 4.59998C15.4902 4.59998 15.0774 5.02048 15.0774 5.53849V10.36H16.9254Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(DownloadIcon);
export default ForwardRef;
