import React, { FC } from 'react';
import { Radio as KitRadio, RadioProps } from '@kit-xyz/radio';
import { Paper } from '@kit-xyz/paper';
import { useViewportContext } from '@site/src/components/DocViewport';
import styles from '@site/src/components/Card/display.module.scss';

export const RadioWrapped: FC<RadioProps> = (props) => {
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
      <KitRadio {...props} colorMode={colorMode} />
    </Paper>
  );
};
