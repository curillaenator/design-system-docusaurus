import React, { FC } from 'react';
import { Hint, type HintProps } from '@kit-xyz/hint';
import { Paper } from '@kit-xyz/paper';
import { useViewportContext } from '@site/src/components/DocViewport';
import styles from '@site/src/components/Card/display.module.scss';

export const HintWrapped: FC<HintProps> = (props) => {
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
      <Hint {...props} colorMode={colorMode} />
    </Paper>
  );
};
