import React, { FC, useState, useCallback } from 'react';
import { SelectExtended, type ExtendedItemProps } from '@kit-xyz/select';
import { Paper } from '@kit-xyz/paper';
import { useViewportContext } from '@site/src/components/DocViewport';

import EyeOnIcon from '@kit-xyz/icon/src/assets/solid/EyeOnIcon';
import PlusIcon from '@kit-xyz/icon/src/assets/solid/PlusIcon';
import UserIcon2 from '@kit-xyz/icon/src/assets/solid/UserIcon2';
import DotIcon from '@kit-xyz/icon/src/assets/solid/DotIcon';

import sbTracker from '../assets/sbTracker.svg';

import styles from '@site/src/components/Card/display.module.scss';

type SelectLocalType = 'avatars' | 'badges';

const ITEMS: Record<SelectLocalType, ExtendedItemProps<string>[]> = {
  avatars: [
    {
      id: 'personal-space',
      caption: 'Персональное пространство',
      Icon: UserIcon2,
      closeOnClick: true,
    },

    {
      id: 'item1',
      caption: 'Bank Technologies',
      description: 'Компания',
      avatar: {
        initials: 'BT',
        appearance: 'positive',
      },
      closeOnClick: true,
    },

    {
      id: 'item2',
      caption: 'Works',
      description: 'Подразделение',
      avatar: {
        initials: 'WO',
        appearance: 'negative',
      },
      closeOnClick: true,
    },

    {
      id: 'item3',
      caption: 'Core Team',
      description: 'Команда',
      avatar: {
        initials: 'CT',
        appearance: 'informative',
      },
      closeOnClick: true,
    },

    {
      id: 'item4',
      caption: 'Feature 1',
      description: 'Команда',
      avatar: {
        initials: 'F1',
        appearance: 'attention',
      },
      closeOnClick: true,
    },

    {
      id: 'item5',
      caption: 'Task Tracker',
      description: 'Продукт',
      avatar: {
        initials: 'TT',
        appearance: 'primary',
        svg: sbTracker,
        alt: 'SBTr',
      },
      closeOnClick: true,
    },
  ],

  badges: [
    {
      id: 'in-process',
      caption: '',
      // description: 'Доступно из любого статуса',
      badge: {
        IconLeft: DotIcon,
        children: 'В процессе',
        appearance: 'attention',
      },
      closeOnClick: true,
    },

    {
      id: 'open',
      caption: '',
      description: 'Доступно из любого статуса',
      badge: {
        IconLeft: DotIcon,
        children: 'Открыто',
        appearance: 'tertiary',
      },
      closeOnClick: true,
    },

    {
      id: 'done',
      caption: '',
      badge: {
        IconLeft: DotIcon,
        children: 'Завершено',
        appearance: 'positive',
      },
      closeOnClick: true,
    },

    {
      id: 'todo',
      caption: '',
      badge: {
        IconLeft: DotIcon,
        children: 'Запланировано',
        appearance: 'primary',
      },
      closeOnClick: true,
    },

    {
      id: 'canceled',
      caption: '',
      badge: {
        IconLeft: DotIcon,
        children: 'Отменено',
        appearance: 'negative',
      },
      closeOnClick: true,
    },

    {
      id: 'info',
      caption: '',
      description: 'Доступно из статуса «Запланировано»',
      badge: {
        IconLeft: DotIcon,
        children: 'Информация',
        appearance: 'primary',
      },
      closeOnClick: true,
    },

    {
      id: 'paused',
      caption: '',
      description: 'Доступно из статуса «Отменено»',
      badge: {
        IconLeft: DotIcon,
        children: 'На паузе',
        appearance: 'primary',
      },
      closeOnClick: true,
    },
  ],
};

const BUTTONS: Record<SelectLocalType, ExtendedItemProps<string>[]> = {
  avatars: [
    {
      id: 'inter-projects',
      caption: 'Межпроектное взаимодействие',
      closeOnClick: true,
      onClick: () => alert('Межпроектное взаимодействие'),
    },

    {
      id: 'mission-imposible-presentation',
      caption: 'Подготовка к презентации продуктов линейки импортозамещения',
      closeOnClick: false,
      onClick: () => alert('Подготовка к презентации продуктов линейки импортозамещения'),
    },
  ],
  badges: [],
};

const ACTIONS: Record<SelectLocalType, ExtendedItemProps<string>[]> = {
  avatars: [
    {
      id: 'watch-spaces',
      caption: 'Смотреть все пространства',
      IconRight: EyeOnIcon,
      closeOnClick: true,
      onClick: () => alert('Смотреть все пространства'),
    },
    {
      id: 'create-space',
      caption: 'Создать новое пространство',
      IconRight: PlusIcon,
      closeOnClick: false,
      onClick: () => alert('Создать новое пространство, не закроет селект'),
    },
  ],
  badges: [
    {
      id: 'watch-process',
      caption: 'Смотреть процесс задачи',
      IconRight: EyeOnIcon,
      closeOnClick: true,
      onClick: () => alert('Смотреть процесс задачи'),
    },
    {
      id: 'create-status',
      caption: 'Создать новый статус',
      IconRight: PlusIcon,
      closeOnClick: false,
      onClick: () => alert('Создать новый статус, не закроет селект'),
    },
  ],
};

interface WrapperProps {
  selectType: SelectLocalType;
}

export const SelectExtendedWrapped: FC<WrapperProps> = ({ selectType = 'avatars' }) => {
  const { colorMode } = useViewportContext();

  const [value, handleValue] = useState<string | null>(ITEMS[selectType][0].id);
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
      <SelectExtended
        closeOnItemClick={false}
        items={ITEMS[selectType]}
        buttonItems={[BUTTONS[selectType], ACTIONS[selectType]]}
        value={value}
        onChange={onChange}
        colorMode={colorMode}
        maxHeight={9999}
        openNodeProps={{
          secondaryText: selectType === 'badges' ? 'Текущий статус' : undefined,
        }}
      />
    </Paper>
  );
};
