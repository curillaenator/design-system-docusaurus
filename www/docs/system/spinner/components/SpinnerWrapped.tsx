import React, { FC } from 'react';
import { Paper, type PaperProps } from '@kit-xyz/paper';
import { Spinner, type SpinnerProps } from '@kit-xyz/spinner';
import { useViewportContext } from '@site/src/components/DocViewport';
import styles from '@site/src/components/Card/display.module.scss';

export const SpinnerWrapped: FC<SpinnerProps & { display?: PaperProps['appearance'] }> = (props) => {
  const { display = 'solid-alt', ...spinnerProps } = props;
  const { colorMode } = useViewportContext();

  return (
    <Paper
      colorMode={colorMode}
      fullwidth
      smoothedCorners
      appearance={display}
      borderRadius='l'
      padding='xl'
      className={styles.paper}
    >
      <Spinner {...spinnerProps} colorMode={colorMode} />
    </Paper>
  );
};
