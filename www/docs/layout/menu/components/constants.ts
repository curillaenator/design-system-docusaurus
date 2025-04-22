import React from 'react';
import CalendarThinIcon from '@kit-xyz/icon/src/assets/solid/CalendarThinIcon';
import HomeThinIcon from '@kit-xyz/icon/src/assets/solid/HomeThinIcon';
import UsersThinIcon from '@kit-xyz/icon/src/assets/solid/UsersThinIcon';
import SpacesThinIcon from '@kit-xyz/icon/src/assets/solid/SpacesThinIcon';
import CubeThinIcon from '@kit-xyz/icon/src/assets/solid/CubeThinIcon';
import EyeOnIcon from '@kit-xyz/icon/src/assets/solid/EyeOnIcon';
import PlusIcon from '@kit-xyz/icon/src/assets/solid/PlusIcon';
import UserIcon2 from '@kit-xyz/icon/src/assets/solid/UserIcon2';

import type { MenuItemProps } from '@kit-layout/menu';
import type { ExtendedItemProps as SelectItemProps } from '@kit-xyz/select';

import { GitverseIcon } from '../assets/GitverseIcon';
import { TrakerIcon } from '../assets/TrakerIcon';
import { PaperIcon } from '../assets/PaperIcon';

import sbTracker from '../assets/sbTracker.svg';

export const DEMO_SELECT_ITEMS: SelectItemProps<string>[] = [
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
];

export const BUTTON_ITEMS: SelectItemProps<string>[][] = [
  [
    {
      id: 'inter-projects',
      value: 'inter-projects',
      caption: 'Межпроектное взаимодействие',
      closeOnClick: true,
      onClick: () => alert('Межпроектное взаимодействие'),
    },
    {
      id: 'mission-imposible-presentation',
      value: 'mission-imposible-presentation',
      caption: 'Подготовка к презентации продуктов линейки импортозамещения',
      closeOnClick: false,
      onClick: () => alert('Подготовка к презентации продуктов линейки импортозамещения'),
    },
  ],
  [
    {
      id: 'watch-spaces',
      value: 'watch-spaces',
      caption: 'Смотреть все пространства',
      IconRight: EyeOnIcon,
      closeOnClick: true,
      onClick: () => alert('Смотреть все пространства'),
    },
    {
      id: 'create-space',
      value: 'create-space',
      caption: 'Создать новое пространство',
      IconRight: PlusIcon,
      closeOnClick: false,
      onClick: () => alert('Создать новое пространство'),
    },
  ],
];

export const DEMO_MENU: MenuItemProps[] = [
  {
    id: 'desktop',
    children: 'Рабочий стол',
    IconLeft: HomeThinIcon,
    notificationType: 'light',
  },

  {
    id: 'spaces',
    children: 'Пространства',
    IconLeft: SpacesThinIcon,
    notificationType: 'light',
    to: '/docs/layout/menu',
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      e.stopPropagation();
    },
    notifications: 245,
    elements: [
      {
        id: 'spaces-1',
        children: 'Пространство 1',
        notificationType: 'light',
      },
      {
        id: 'spaces-2',
        children: 'Пространство 2',
        notificationType: 'light',
        to: '/docs/layout/menu',
        onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          e.preventDefault();
          e.stopPropagation();
        },
      },
      {
        id: 'spaces-3',
        children: 'Пространство 3',
        notificationType: 'light',
      },
      {
        id: 'spaces-all',
        children: 'Все',
        notificationType: 'light',
      },
    ],
  },

  {
    id: 'collections',
    children: 'Коллекции',
    IconLeft: CubeThinIcon,
    notificationType: 'light',
    // to: '/collections',
    elements: [
      {
        id: 'collections-all',
        notificationType: 'light',
        children: 'Все',
        // to: '/collections/all',
      },
    ],
  },

  {
    id: 'contacts',
    children: 'Контакты',
    IconLeft: UsersThinIcon,
    notificationType: 'light',
    // to: '/users',
    elements: [
      {
        id: 'contacts-all',
        children: 'Все',
        notificationType: 'light',
        // to: '/users/all',
      },
      {
        id: 'contacts-collegues',
        children: 'Коллеги',
        notificationType: 'light',
        // to: '/users/collegues',
      },
    ],
  },

  {
    id: 'calendar',
    children: 'Мероприятия',
    IconLeft: CalendarThinIcon,
    notifications: 5673,
    notificationType: 'dark',
    elements: [
      {
        id: 'calendar-years',
        children: 'По годам',
        notificationType: 'light',
        // to: '/calendar/years',
      },
      {
        id: 'calendar-quads',
        children: 'По кварталам',
        notificationType: 'light',
        // to: '/calendar/quads',
      },
      {
        id: 'calendar-month',
        children: 'По месяцам',
        notificationType: 'light',
        // to: '/calendar/month',
      },
      {
        id: 'calendar-days',
        children: 'По дням',
        notificationType: 'light',
        // to: '/calendar/days',
      },
    ],
  },
];

export const DEMO_APPS_MENU: MenuItemProps[] = [
  {
    id: 'apps-menu-tracker',
    children: 'Tracker',
    IconLeft: TrakerIcon,
    notifications: 4,
    notificationType: 'light',
    elements: [
      {
        id: 'apps-menu-tracker-1',
        children: 'Элемент 1',
        notificationType: 'light',
      },
      {
        id: 'apps-menu-tracker-2',
        children: 'Элемент 2',
        notificationType: 'dark',
      },
    ],
  },
  {
    id: 'apps-menu-gitverse',
    children: 'Gitverse',
    IconLeft: GitverseIcon,
    notifications: 6,
    notificationType: 'light',
    elements: [...new Array(6)].map((_, i) => ({
      id: `apps-menu-paper-${i + 1}`,
      children: `Элемент ${i + 1}`,
      notificationType: 'light',
    })),
  },
  {
    id: 'apps-menu-paper',
    children: 'Paper',
    IconLeft: PaperIcon,
    notifications: 2468,
    notificationType: 'light',
    elements: [
      {
        id: 'apps-menu-paper-1',
        children: 'Элемент 1',
        notificationType: 'light',
      },
      {
        id: 'apps-menu-paper-2',
        children: 'Элемент 2',
        notificationType: 'dark',
      },
    ],
  },
];
