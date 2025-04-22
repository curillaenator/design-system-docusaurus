import React, { FC } from 'react';
import { Badge, BadgeProps } from '@kit-xyz/badge';
import { Paper } from '@kit-xyz/paper';
import { useViewportContext } from '@site/src/components/DocViewport';
import styles from '@site/src/components/Card/display.module.scss';

export const BadgeWrapped: FC<BadgeProps> = (props) => {
  const { title, appearance = 'primary-solid', ...rest } = props;
  const { colorMode } = useViewportContext();

  return (
    <Paper
      colorMode={colorMode}
      fullwidth
      appearance={!appearance.includes('-alt') ? 'solid-alt' : 'solid'}
      withBorder
      borderRadius='l'
      padding='xl'
      className={styles.paper}
    >
      <Badge {...rest} appearance={appearance} colorMode={colorMode} />
    </Paper>
  );
};
