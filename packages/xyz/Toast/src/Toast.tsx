import React, { FC } from 'react';
import {
  toast as baseToast,
  ToastContainer as BaseToastContainer,
  type ToastId,
  type ToastContainerProps,
} from '@kit-base/toast';

import { Content } from './components/Content';
import { DEFAULT_TEST_ID } from './constants';
import { ToastProps } from './interfaces';
import styles from './toast.module.scss';

const ToastContainer: FC<ToastContainerProps> = (props) => (
  <BaseToastContainer {...props} className={styles.toastVariables} />
);

const toast = (props: ToastProps): ToastId => {
  const {
    dataTestId = DEFAULT_TEST_ID,
    Icon,
    message,
    appearance = 'solid',
    colorMode = 'light',
    className,
    // customContent,
    onCloseButton,
    ...rest
  } = props;

  return baseToast(
    () => (
      <Content
        className={className}
        colorMode={colorMode}
        appearance={appearance}
        dataTestId={dataTestId}
        Icon={Icon}
        message={message}
        onCloseButton={onCloseButton}
      />
    ),
    {
      ...rest,
      hideProgressBar: true,
      draggable: false,
    },
  );
};

export { toast, ToastContainer };
