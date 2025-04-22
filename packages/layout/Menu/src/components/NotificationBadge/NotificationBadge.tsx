import { Badge } from '@kit-xyz/badge';
import React, { useContext } from 'react';
import { MenuContext } from '../../context/MenuContext';

import tracker from '../../trackerTmpStyles/notificationBadge.module.scss';

export type NotificationBadgeProps = {
  notifications?: number | undefined;
  notificationType?: 'light' | 'dark' | undefined;
};

export const NotificationBadge = ({ notifications, notificationType }: NotificationBadgeProps) => {
  const { colorMode } = useContext(MenuContext);

  if (notifications === undefined || notifications === null) {
    return null;
  }

  return (
    <Badge
      size='xs'
      shape='circular'
      style={{ minWidth: '24px' }}
      colorMode={colorMode}
      appearance={notificationType === 'dark' ? 'tertiary-solid' : 'primary'}
      className={tracker[`badge_${notificationType || 'light'}`]}
    >
      {notifications}
    </Badge>
  );
};
