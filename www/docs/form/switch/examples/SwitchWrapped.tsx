import React, { FC, useState } from 'react';
import { Switch as KitSwitch, SwitchProps } from '@kit-xyz/switch';
import { Paper } from '@kit-xyz/paper';
import { useViewportContext } from '@site/src/components/DocViewport';
import styles from '@site/src/components/Card/display.module.scss';

export const SwitchWrapped: FC<SwitchProps> = (props) => {
  const { colorMode } = useViewportContext();
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <Paper
      colorMode={colorMode}
      fullwidth
      appearance='solid-alt'
      borderRadius='l'
      padding='xl'
      className={styles.paper}
    >
      <KitSwitch {...props} colorMode={colorMode} checked={checked} onChange={() => setChecked((prev) => !prev)} />
    </Paper>
  );
};
