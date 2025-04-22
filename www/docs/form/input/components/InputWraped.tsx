import React, { FC } from 'react';
import { Input, useLimitCounter, InputProps } from '@kit-xyz/input';
import { Paper } from '@kit-xyz/paper';
import { useViewportContext } from '@site/src/components/DocViewport';
import styles from '@site/src/components/Card/display.module.scss';

export const InputWrapped: FC<InputProps> = (props) => {
  const { value, onChange, onClearInput, endMetaText } = useLimitCounter(100);
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
      <Input
        {...props}
        label='Label'
        placeholder='Placeholder'
        value={value}
        onChange={onChange}
        onClearInput={onClearInput}
        startMetaText='additional'
        endMetaText={endMetaText}
        clearable
        colorMode={colorMode}
        // disabled
      />
    </Paper>
  );
};
