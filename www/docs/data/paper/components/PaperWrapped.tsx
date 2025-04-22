import React, { FC, useState } from 'react';
import { Paper, PaperProps } from '@kit-xyz/paper';
import { Switch } from '@kit-xyz/switch';
import { useViewportContext } from '@site/src/components/DocViewport';
import styles from '@site/src/components/Card/display.module.scss';

export const PaperWrapped: FC<PaperProps> = (props) => {
  const { smoothedCorners, dropShadow, borderWidth } = props;

  const { colorMode } = useViewportContext();

  const [smoothed, setSmoothed] = useState<boolean>(true);
  const [isDropShadow, setIsDropShadow] = useState<boolean>(false);
  const [border, setBorder] = useState<boolean>(true);

  const unstated = smoothedCorners !== undefined;

  return (
    <Paper
      colorMode={colorMode}
      fullwidth
      appearance='solid-alt'
      borderRadius='l'
      padding='xl'
      className={styles.paper}
      style={{ gap: '16px' }}
    >
      <Paper
        {...props}
        colorMode={colorMode}
        smoothedCorners={unstated ? smoothedCorners : smoothed}
        dropShadow={unstated ? dropShadow : isDropShadow}
        borderWidth={unstated ? borderWidth : 's'}
        withBorder={unstated ? props.withBorder : border}
      />

      {!unstated && (
        <>
          <Switch
            checked={smoothed}
            onChange={() => setSmoothed((prev) => !prev)}
            label='Smoothed'
            className={styles.smoothedSwitch}
          />

          <Switch
            checked={isDropShadow}
            onChange={() => setIsDropShadow((prev) => !prev)}
            label='Drop shadow'
            className={styles.smoothedSwitch}
          />

          <Switch
            checked={border}
            onChange={() => setBorder((prev) => !prev)}
            label='Border'
            className={styles.smoothedSwitch}
          />
        </>
      )}
    </Paper>
  );
};
