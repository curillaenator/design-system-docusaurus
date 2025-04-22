import React, { useState, useCallback, type ChangeEvent } from 'react';
import { Radio } from '@kit-xyz/radio';
import { Paper } from '@kit-xyz/paper';
import { useViewportContext } from '@site/src/components/DocViewport';
import styles from '@site/src/components/Card/display.module.scss';

type RadioGroupState = Record<string, boolean>;

const RESET_STATE: RadioGroupState = { one: false, two: false, three: false };

export const RadioGroup = () => {
  const { colorMode } = useViewportContext(); // в вашем случае свой менеджер режима

  const [checked, setChecked] = useState<RadioGroupState>({ one: true, two: false, three: false });

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setChecked({ ...RESET_STATE, [e.target.value]: true });
  }, []);

  return (
    <Paper
      colorMode={colorMode}
      fullwidth
      appearance='solid-alt'
      borderRadius='l'
      padding='xl'
      className={styles.paper}
      style={{ gap: '8px' }}
    >
      <Radio
        appearance='solid'
        id='radio-docs-group-radio-1'
        label='Radio'
        labelAdditional='1'
        name='radio-docs-group-1'
        value='one'
        checked={checked.one}
        onChange={onChange}
        colorMode={colorMode}
      />

      <Radio
        appearance='solid'
        id='radio-docs-group-radio-2'
        label='Radio'
        labelAdditional='2'
        value='two'
        name='radio-docs-group-1'
        checked={checked.two}
        onChange={onChange}
        colorMode={colorMode}
      />

      <Radio
        appearance='solid'
        id='radio-docs-group-radio-3'
        label='Radio'
        labelAdditional='3'
        value='three'
        name='radio-docs-group-1'
        checked={checked.three}
        onChange={onChange}
        colorMode={colorMode}
      />
    </Paper>
  );
};
