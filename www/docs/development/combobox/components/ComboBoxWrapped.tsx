import React, { FC } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { Paper } from '@kit-xyz/paper';
import type { ComboboxProps } from '@kit-xyz/combobox';
import { useViewportContext } from '@site/src/components/DocViewport';
import styles from '@site/src/components/Card/display.module.scss';

export const ComboBoxWrapped: FC<ComboboxProps> = (props) => {
  const { colorMode } = useViewportContext() as { colorMode: 'light' | 'dark' | 'color' };

  return (
    <Paper
      colorMode={colorMode}
      fullwidth
      appearance='solid-alt'
      borderRadius='l'
      padding='xl'
      className={styles.paper}
    >
      <BrowserOnly>
        {() => {
          const { ComboBox } = require('@kit-xyz/combobox'); // eslint-disable-line global-require

          return (
            <ComboBox
              {...props}
              // menuPortalTarget={document.body}
              colorMode={colorMode}
              onChange={(data) => console.table(data)}
            />
          );
        }}
      </BrowserOnly>
    </Paper>
  );
};
