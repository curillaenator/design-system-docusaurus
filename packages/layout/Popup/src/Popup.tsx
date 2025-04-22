import React, { FC } from 'react';
import {
  toast as baseToast,
  ToastContainer as BasePopupContainer,
  type ToastId,
  type ToastContainerProps as PopupContainerProps,
} from '@kit-base/toast';

import { PopupProps } from './interfaces';
import styles from './popup.module.scss';

const DEFAULT_POPUP_CONTAINER_ID = 'layout-popup-container';

const PopupContainer: FC<PopupContainerProps> = (props) => (
  <BasePopupContainer {...props} className={styles.variables} />
);

const popup = (props: PopupProps): ToastId => {
  const { Content, ...rest } = props;

  // @ts-expect-error react-tostify трубетет вызова для того, чтобы в контенте можно было вызывать хуки
  return baseToast(<Content />, {
    ...rest,
    containerId: DEFAULT_POPUP_CONTAINER_ID,
    hideProgressBar: true,
    draggable: false,
    autoClose: false,
    closeOnClick: false,
    position: 'bottom-right',
  });
};

export { popup, PopupContainer, DEFAULT_POPUP_CONTAINER_ID };
