/* eslint-disable react/no-unstable-nested-components */
import React, { FC, useContext } from 'react';
import { Button } from '@kit-xyz/button';
import BellIcon2 from '@kit-xyz/icon/src/assets/duotone/BellIcon2';
import MessageThinIcon from '@kit-xyz/icon/src/assets/duotone/MessageThinIcon';

import { MenuContext } from '../../context/MenuContext';
import { ButtonWithoutIconProps } from '../../types/ButtonWithIconProps';
import { NotificationBadge } from '../NotificationBadge/NotificationBadge';

import styles from './notifications.module.scss';
import tracker from '../../trackerTmpStyles/notifications.module.scss';

interface ButtonsSectionProps {
  notifications?: ButtonWithoutIconProps;
  messages?: ButtonWithoutIconProps;
}

export const NotificationsMessages: FC<ButtonsSectionProps> = (props) => {
  const { isOpen, screen, colorMode } = useContext(MenuContext);
  const { notifications, messages } = props;

  if (!notifications && !messages) return null;

  const isFullWidth = isOpen || screen === 'mobile' || screen === 'tablet';

  const {
    notifications: msgsNotifications,
    notificationType: msgsNotificationType,
    ...msgsButtonProps
  } = messages || {};

  const {
    notifications: ntfsNotifications,
    notificationType: ntfsNotificationType,
    ...ntfsButtonProps
  } = notifications || {};

  return (
    <div id='layout-menu-notification-messages-section' className={styles.container}>
      {!!messages && (
        <Button
          {...msgsButtonProps}
          fullWidth
          size='xs'
          colorMode={colorMode}
          appearance='primary-transparent'
          IconLeft={MessageThinIcon}
          children={isFullWidth ? messages.children : undefined} // eslint-disable-line react/no-children-prop
          notion={isFullWidth ? undefined : !!msgsNotifications}
          IconRight={
            isFullWidth
              ? () => <NotificationBadge notifications={msgsNotifications} notificationType={msgsNotificationType} />
              : undefined
          }
          labelsFullwidth
          labelsJustify='start'
          className={tracker.linkButton}
        />
      )}

      {!!notifications && (
        <Button
          {...ntfsButtonProps}
          fullWidth
          size='xs'
          appearance='primary-transparent'
          IconLeft={BellIcon2}
          children={isFullWidth ? notifications.children : undefined} // eslint-disable-line react/no-children-prop
          colorMode={colorMode}
          className={tracker.linkButton}
          notion={isFullWidth ? undefined : !!ntfsNotifications}
          IconRight={
            isFullWidth
              ? () => <NotificationBadge notifications={ntfsNotifications} notificationType={ntfsNotificationType} />
              : undefined
          }
          labelsFullwidth
          labelsJustify='start'
        />
      )}
    </div>
  );
};
