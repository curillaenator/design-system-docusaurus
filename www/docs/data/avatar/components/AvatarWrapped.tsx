import React, { FC } from 'react';
import {
  Avatar,
  type AvatarProps,
  AvatarImage,
  AvatarCaption,
  type AvatarCaptionProps,
  type AvatarImageProps,
} from '@kit-xyz/avatar';
import { Paper } from '@kit-xyz/paper';
import { useViewportContext } from '@site/src/components/DocViewport';
import styles from '@site/src/components/Card/display.module.scss';

export const AvatarWrapped: FC<AvatarProps & AvatarCaptionProps & AvatarImageProps> = (props) => {
  const { colorMode } = useViewportContext();

  const { src, title, initials, username, subline, withBorder = false } = props;

  return (
    <Paper
      colorMode={colorMode}
      fullwidth
      appearance='solid-alt'
      borderRadius='l'
      padding='xl'
      className={styles.paper}
    >
      <Avatar {...props} colorMode={colorMode} fullwidth={false}>
        <AvatarImage initials={initials} src={src} title={title} withBorder={withBorder} />
        {username && <AvatarCaption username={username} subline={subline} />}
      </Avatar>
    </Paper>
  );
};
