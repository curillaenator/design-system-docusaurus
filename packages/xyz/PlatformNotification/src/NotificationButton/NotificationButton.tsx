import React from 'react';
import { Button } from '@kit-xyz/button';

import { NotificationButtonProps } from '../interfaces';
import { actionColorMap } from '../styles/colorMaps';

import styles from './button.module.scss';

export const NotificationButton = ({ appearance = 'primary', ...rest }: NotificationButtonProps) => {
  const notificationAppearance = rest.context?.appearance || 'primary';
  const finalAppearance = actionColorMap[appearance][notificationAppearance];

  return (
    <Button
      {...rest}
      size='l'
      appearance={finalAppearance}
      className={finalAppearance === 'primary' ? styles.forcedPrimaryColor : ''}
    />
  );
};
