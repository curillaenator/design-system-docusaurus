import React, { FC } from 'react';
import cn from 'classnames';
import { Paper } from '@kit-xyz/paper';
import { Button } from '@kit-xyz/button';
import CrossIcon from '@kit-xyz/icon/src/assets/solid/CrossIcon';

import { useNotificationProps } from './hooks/useNotificationProps';
import { DEFAULT_TEST_ID } from './constants';
import { NotificationProps } from './interfaces';
import styles from './styles.module.scss';

export const Notification: FC<NotificationProps> = (props) => {
  const {
    id,
    dataTestId = DEFAULT_TEST_ID,
    title,
    message,
    appearance = 'quaternary',
    Icon,
    className,
    button,
    colorMode,
    onClose,
    ...paperProps
  } = useNotificationProps(props);

  return (
    // @ts-ignore
    <Paper
      {...paperProps}
      dataTestId={dataTestId}
      padding={paperProps.padding || 'l'}
      borderRadius={paperProps.borderRadius || 's'}
      fullwidth
      className={className}
    >
      {Icon && (
        <Icon dataTestId={`${dataTestId}.Icon`} size='xl' color={colorMode === 'dark' ? undefined : appearance} />
      )}

      <div className={styles.content}>
        <div className={styles.titles}>
          <span data-testid={`${dataTestId}.Title`} className={cn(styles.text, styles.title)}>
            {title}
          </span>

          {message && (
            <span data-testid={`${dataTestId}.Message`} className={cn(styles.text, styles.message)}>
              {message}
            </span>
          )}
        </div>

        {button && (
          <div className={styles.buttons}>
            <Button id={`${id}-action-button`} dataTestId={`${dataTestId}.ActionButton`} size='xs' {...button}>
              Редактировать
            </Button>
          </div>
        )}
      </div>

      {onClose && (
        <CrossIcon
          id={`${id}-close-button`}
          dataTestId={`${dataTestId}.CloseButton`}
          size='xl'
          color={colorMode === 'dark' ? undefined : appearance}
          className={styles.close}
          onClick={() => onClose(id)}
        />
      )}
    </Paper>
  );
};
