import React, { FC, useContext } from 'react';
import { Avatar, AvatarCaption, AvatarImage, type AvatarProps as BaseAvatarProps } from '@kit-xyz/avatar';

import styles from './user.module.scss';
import { MenuContext } from '../../context/MenuContext';

export interface AvatarProps extends Pick<BaseAvatarProps, 'onClick' | 'src' | 'username' | 'notion' | 'subline'> {}

export const User: FC<AvatarProps> = (props) => {
  const { isOpen, screen } = useContext(MenuContext);

  const { src, onClick, username, subline, notion } = props;

  const isFullWidth = isOpen || screen === 'mobile' || screen === 'tablet';

  return (
    <div id='layout-menu-user-section' className={styles.container}>
      <Avatar
        size='l'
        fullwidth
        shape='circular'
        colorMode='dark'
        onClick={onClick}
        as='button'
        className={styles.avatar}
      >
        {isFullWidth && <AvatarCaption username={username} subline={subline} />}

        <AvatarImage src={src} alt={username} withBorder notion={notion} notionPlacement='top-right' />
      </Avatar>
    </div>
  );
};
