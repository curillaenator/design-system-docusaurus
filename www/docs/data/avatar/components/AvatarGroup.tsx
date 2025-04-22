import React, { FC } from 'react';
import { Avatar, AvatarImage, type AvatarProps, type AvatarImageProps } from '@kit-xyz/avatar';
import { Paper } from '@kit-xyz/paper';
import { useViewportContext } from '@site/src/components/DocViewport';
import styles from '@site/src/components/Card/display.module.scss';

import avatar1 from '../assets/avatar1.jpg';

import localStyles from './avatar.module.scss';

const GROUP_MOCK: AvatarImageProps[] = [
  {
    initials: 'AA',
    src: avatar1,
  },
  {
    initials: 'BB',
    src: avatar1,
  },
  {
    initials: 'CC',
    src: avatar1,
  },
  {
    initials: 'DD',
    src: avatar1,
  },
];

export const AvatarGroup: FC<AvatarProps> = () => {
  const { colorMode } = useViewportContext();

  return (
    <Paper
      colorMode={colorMode}
      fullwidth
      appearance='solid-alt'
      borderRadius='l'
      padding='xl'
      className={styles.paper}
    >
      <div className={localStyles.group}>
        {GROUP_MOCK.map(({ src, initials }) => (
          <div key={initials} style={{ width: 24 }}>
            <Avatar size='m' shape='circular'>
              <AvatarImage
                src={src}
                initials={initials}
                // withBorder
                className={styles.group}
              />
            </Avatar>
          </div>
        ))}
      </div>
    </Paper>
  );
};
