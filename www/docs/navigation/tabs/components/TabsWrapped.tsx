import React, { FC, useCallback, useState } from 'react';
import { Tabs, type TabsProps } from '@kit-xyz/tabs';
import { Paper } from '@kit-xyz/paper';
import { useViewportContext } from '@site/src/components/DocViewport';
import styles from '@site/src/components/Card/display.module.scss';

export const TabsWrapped: FC<TabsProps & { activeEl: string }> = (props) => {
  const { activeEl = 'table', ...tabsProps } = props;

  const [active, setActive] = useState<string>(activeEl);
  const handleChangeActive = useCallback((id: string) => setActive(id), []);
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
      <Tabs {...tabsProps} currentItemId={active} onChange={handleChangeActive} colorMode={colorMode} />
    </Paper>
  );
};
