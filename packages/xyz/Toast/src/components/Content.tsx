import React, { FC } from 'react';
import cn from 'classnames';
import CrossIcon from '@kit-xyz/icon/src/assets/solid/CrossIcon';

import { useToastProps } from '../hooks/useToastProps';
import { VERSION } from '../version';
import { ToastContentProps } from '../interfaces';
import { DEFAULT_TEST_ID } from '../constants';

import styles from './content.module.scss';

export const Content: FC<ToastContentProps> = (props) => {
  const { dataTestId, message, Icon, className, onCloseButton } = useToastProps(props);

  return (
    <div
      data-testid={dataTestId}
      data-version={VERSION}
      data-analytics={DEFAULT_TEST_ID}
      className={cn(styles.toast, className)}
    >
      {!!Icon && <Icon size='m' />}

      <div className={styles.content}>
        <p className={styles.text}>{message}</p>
      </div>

      {onCloseButton && <CrossIcon onClick={onCloseButton} size='m' />}
    </div>
  );
};
