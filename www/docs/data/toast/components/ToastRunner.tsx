import React, { FC, useRef } from 'react';
import { Button } from '@kit-xyz/button';
import { toast, type ToastProps, closeToast } from '@kit-xyz/toast';
import { Paper } from '@kit-xyz/paper';
import { useViewportContext } from '@site/src/components/DocViewport';
import styles from '@site/src/components/Card/display.module.scss';

export const ToastRunner: FC<ToastProps & { title: string }> = (props) => {
  const { title, ...toastProps } = props;

  const { colorMode } = useViewportContext();

  const toastId = useRef<string | number>(null);

  const openToast = () => {
    toastId.current = toast(toastProps);
  };

  return (
    <Paper
      colorMode={colorMode}
      fullwidth
      appearance='solid-alt'
      borderRadius='l'
      padding='xl'
      className={styles.paper}
      style={{ gap: '16px' }}
    >
      <Button size='xs' colorMode={colorMode} onClick={() => openToast()}>
        {props.title}
      </Button>

      <Button size='xs' colorMode={colorMode} onClick={() => closeToast(toastId.current)}>
        {`Close ${props.title.toLowerCase()}`}
      </Button>
    </Paper>
  );
};
