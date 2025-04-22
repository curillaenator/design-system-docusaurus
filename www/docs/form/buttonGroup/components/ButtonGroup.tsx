import React, { FC, useState, useCallback, useMemo } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { Paper } from '@kit-xyz/paper';
import type { GroupItem } from '@kit-xyz/button-group';

import { useViewportContext } from '@site/src/components/DocViewport';

import { SELECT_ITEMS } from './constants';
import styles from '@site/src/components/Card/display.module.scss';

export const ButtonGroupWrapped: FC = () => {
  const { colorMode } = useViewportContext();

  const [value, onChange] = useState<string | null>(null);
  const handleValue = useCallback((itemId: string) => onChange(itemId), []);

  const [value2, onChange2] = useState<string | null>(null);
  const handleValue2 = useCallback((itemId: string) => onChange2(itemId), []);

  const group: GroupItem[] = useMemo(
    () => [
      {
        id: 'button-group-select-1',
        items: SELECT_ITEMS,
        value,
        onChange: handleValue,
        placeholder: 'Select',
      },
      {
        id: 'button-group-select-2',
        items: SELECT_ITEMS,
        value: value2,
        onChange: handleValue2,
        placeholder: 'Select2',
      },
      {
        id: 'button-group-button-2',
        children: 'Button',
        onClick: () => alert('This is button'),
        active: true,
      },
    ],
    [value, value2, handleValue, handleValue2],
  );

  return (
    <Paper
      colorMode={colorMode}
      fullwidth
      appearance='solid-alt'
      withBorder
      borderRadius='l'
      padding='xl'
      className={styles.paper}
    >
      <BrowserOnly>
        {() => {
          const { ButtonGroup } = require('@kit-xyz/button-group'); // eslint-disable-line global-require

          return (
            <ButtonGroup
              id='button-group-1'
              group={group}
              size='xs'
              appearance='primary-solid'
              withBorder
              colorMode={colorMode}
            />
          );
        }}
      </BrowserOnly>
    </Paper>
  );
};
