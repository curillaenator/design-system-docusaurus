import React, { forwardRef } from 'react';
import { PlatformNotification as BasePlatformNotification } from '@kit-base/platformNotification';
import { Button } from '@kit-xyz/button';

import { DEFAULT_TEST_ID } from './constants';
import { NotificationProps } from './interfaces';
import { useClassName } from './hooks/useClassName';
import { NotificationButton } from './NotificationButton/NotificationButton';
import { closeButtonColorMap } from './styles/colorMaps';
import { NotificationIcon } from './NotificationIcon/NotificationIcon';

export const PlatformNotification = forwardRef<HTMLDivElement, NotificationProps>((props) => {
  const { appearance = 'primary', size = 'default', ...rest } = props;
  const classes = useClassName(appearance, size);

  return (
    <BasePlatformNotification
      {...rest}
      dataTestId={DEFAULT_TEST_ID}
      className={classes}
      isDividerVisibly={size !== 'compact'}
      context={props}
      components={{
        Button: NotificationButton,
        Icon: NotificationIcon,
      }}
      closeButton={
        props.closeButton && (
          <Button type='button' iconLeftName='math-x' size='l' appearance={closeButtonColorMap[appearance]} />
        )
      }
    />
  );
});
