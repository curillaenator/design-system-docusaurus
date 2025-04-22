import React, { FC } from 'react';
import { Paper, type PaperProps } from '@kit-xyz/paper';
import { Notification, type NotificationProps } from '@kit-xyz/notification';
import { useViewportContext } from '@site/src/components/DocViewport';
import styles from '@site/src/components/Card/display.module.scss';

export const NotificationWrapped: FC<NotificationProps & { display?: PaperProps['appearance'] }> = (props) => {
  const { display = 'solid-alt', ...notificationProps } = props;
  const { colorMode } = useViewportContext();

  return (
    <Paper
      colorMode={colorMode}
      fullwidth
      smoothedCorners
      appearance={display}
      borderRadius='l'
      padding='xl'
      className={styles.wrapper}
    >
      <Notification {...notificationProps} colorMode={colorMode} />
    </Paper>
  );
};
