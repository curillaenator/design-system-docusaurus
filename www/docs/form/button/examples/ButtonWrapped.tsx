import React, { FC } from 'react';
import { Button, type ButtonProps } from '@kit-xyz/button';
import { Paper } from '@kit-xyz/paper';
import { useViewportContext } from '@site/src/components/DocViewport';
import styles from '@site/src/components/Card/display.module.scss';

type ButtonWrappedProps = ButtonProps & { to?: string };

export const ButtonWrapped: FC<ButtonWrappedProps> = (props) => {
  const { title, appearance = 'primary-solid', to, ...rest } = props;
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
      <Button {...rest} href={to} component={to ? 'a' : 'button'} appearance={appearance} colorMode={colorMode} />
    </Paper>
  );
};
