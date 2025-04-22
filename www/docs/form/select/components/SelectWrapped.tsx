import React, { FC, useState, useCallback } from 'react';
import { Select, type SelectProps } from '@kit-xyz/select';
import { Paper } from '@kit-xyz/paper';
import { useViewportContext } from '@site/src/components/DocViewport';

import BellIcon from '@kit-xyz/icon/src/assets/solid/BellIcon';
import CalendarIcon from '@kit-xyz/icon/src/assets/solid/CalendarIcon';

import type { ItemProps } from '@kit-xyz/select';
import styles from '@site/src/components/Card/display.module.scss';

const BASE_ITEMS: ItemProps<string>[] = [
  {
    id: 'item1',
    value: 'item1',
    caption: 'Caption',
    Icon: BellIcon,
  },
  {
    id: 'item2',
    value: 'item2',
    caption: 'Элемент 2',
    Icon: CalendarIcon,
  },
  {
    id: 'item3',
    value: 'item3',
    caption: 'Элемент 3',
    Icon: BellIcon,
  },
  {
    id: 'item4',
    value: 'item4',
    caption: 'Элемент 4',
    Icon: BellIcon,
  },
  {
    id: 'item5',
    value: 'item5',
    caption: '',
    Icon: BellIcon,
  },
  {
    id: 'item6',
    value: 'item6',
    caption: 'Элемент 6',
    Icon: BellIcon,
  },
  {
    id: 'item7',
    value: 'item7',
    caption: 'Элемент 7',
    Icon: BellIcon,
  },
];

export const SelectWrapped: FC<SelectProps<string>> = ({ placement }) => {
  const { colorMode } = useViewportContext();

  const [value, handleValue] = useState<string | null>(null);
  const onChange = useCallback((itemId: string) => handleValue(itemId), []);

  return (
    <Paper
      colorMode={colorMode}
      fullwidth
      appearance='solid-alt'
      borderRadius='l'
      padding='xl'
      className={styles.paper}
    >
      <Select
        value={value}
        onChange={onChange}
        icon={CalendarIcon}
        colorMode={colorMode}
        items={BASE_ITEMS}
        placeholder='Выбирите элемент'
        placement={placement}
        minWidth={400}
        maxHeight={300}
      />
    </Paper>
  );
};
