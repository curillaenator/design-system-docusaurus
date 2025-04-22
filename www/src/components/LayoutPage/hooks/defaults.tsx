import React, { useContext } from 'react';
import { Button } from '@kit-xyz/button';
import type { MenuProps, MenuItemProps } from '@kit-layout/menu';
import PagesIcon from '@kit-xyz/icon/src/assets/solid/PagesIcon';
import UserIcon2 from '@kit-xyz/icon/src/assets/solid/UserIcon2';
import TrackerIcon from '@kit-xyz/icon/src/assets/solid/TrackerIcon';
import TasksIcon2 from '@kit-xyz/icon/src/assets/solid/TasksIcon2';
import FullscreenIcon from '@kit-xyz/icon/src/assets/solid/FullscreenIcon';
import PlusIcon from '@kit-xyz/icon/src/assets/solid/PlusIcon';
import CrossIcon from '@kit-xyz/icon/src/assets/solid/CrossIcon';

import type { LayoutConfigProps } from '../interfaces';
import LogoMax from '../assets/logoMax';
import LogoMin from '../assets/logoMin';
import avatar from '../assets/avatarTest.png';
import { LayoutContext } from '../context';

export const DEMO_LOGO: MenuProps['logo'] = {
  normal: LogoMax,
  minified: LogoMin,
};

export const DEMO_MENU: MenuItemProps[] = [
  // {
  //   id: 'desktop',
  //   children: 'Рабочий стол',
  //   IconLeft: HomeIcon,
  //   to: '/desktop',
  // },

  {
    id: 'pages',
    children: 'Страницы',
    IconLeft: PagesIcon,
    to: '/tracker',
    // elements: [
    //   {
    //     id: 'pages-all',
    //     children: 'Все',
    //     to: '/pages/all',
    //   },
    //   {
    //     id: 'pages-tracker',
    //     children: 'Works',
    //     to: '/pages/tracker',
    //   },
    //   {
    //     id: 'pages-xyz',
    //     children: 'XYZ',
    //     to: '/pages/xyz',
    //   },
    //   {
    //     id: 'pages-platfom-v',
    //     children: 'Platform V',
    //     to: '/pages/platfom-v',
    //   },
    // ],
  },

  {
    id: 'tasks',
    children: 'Задачи',
    IconLeft: TasksIcon2,
    to: '/configurator',
    // notifications: 802,
    // elements: [
    //   {
    //     id: 'tasks-all',
    //     children: 'Все',
    //     to: '/tasks/all',
    //   },
    //   {
    //     id: 'tasks-current-user',
    //     children: 'Мои',
    //     to: '/tasks/user',
    //   },
    //   {
    //     id: 'tasks-epic',
    //     children: 'Epic',
    //     to: '/tasks/epic',
    //   },
    //   {
    //     id: 'tasks-story',
    //     children: 'Story',
    //     to: '/tasks/story',
    //   },
    // ],
  },

  // {
  //   id: 'calendar',
  //   children: 'События',
  //   IconLeft: CalendarIcon,
  //   to: '/calendar',
  //   notifications: 4,
  //   elements: [
  //     {
  //       id: 'calendar-years',
  //       children: 'По годам',
  //       to: '/calendar/years',
  //     },
  //     {
  //       id: 'calendar-quads',
  //       children: 'По кварталам',
  //       to: '/calendar/quads',
  //     },
  //     {
  //       id: 'calendar-month',
  //       children: 'По месяцам',
  //       to: '/calendar/month',
  //     },
  //     {
  //       id: 'calendar-days',
  //       children: 'По дням',
  //       to: '/calendar/days',
  //     },
  //   ],
  // },

  // {
  //   id: 'collections',
  //   children: 'Коллекции',
  //   IconLeft: FolderIcon,
  //   to: '/collections',
  //   elements: [
  //     {
  //       id: 'collections-all',
  //       children: 'Все',
  //       to: '/collections/all',
  //     },
  //   ],
  // },

  // {
  //   id: 'users',
  //   children: 'Коллеги',
  //   IconLeft: UsersIcon,
  //   to: '/users',
  //   elements: [
  //     {
  //       id: 'users-all',
  //       children: 'Все',
  //       to: '/users/all',
  //     },
  //     {
  //       id: 'users-collegues',
  //       children: 'Коллеги',
  //       to: '/users/collegues',
  //     },
  //   ],
  // },

  // {
  //   id: 'settings',
  //   children: 'Настройки',
  //   IconLeft: UsersIcon,
  //   to: '/settings',
  // },
];

export const DEMO_LEFT_MENU_USER: MenuProps['user'] = {
  avatar: {
    src: avatar,
    initials: 'ДИ',
    username: 'Дмитрий Иванов',
    subline: 'Разработчик',
  },
};

export const DEMO_LEFT_MENU: MenuProps = {
  logo: DEMO_LOGO,
  // input: undefined,

  elements: DEMO_MENU,
  selectCurrent: {
    id: 'personal-space',
    // to: '/foo',
    caption: 'Персональное пространство',
    value: 'personal-space',
    Icon: UserIcon2,
    closeOnClick: true,
  },
  selectItems: [
    {
      id: 'personal-space',
      // to: '/foo',
      caption: 'Персональное пространство',
      value: 'personal-space',
      Icon: UserIcon2,
      closeOnClick: true,
    },

    {
      id: 'ui-kit',
      // to: '/bar',
      caption: 'UI Kit',
      value: 'ui-kit',
      Icon: TrackerIcon,
      closeOnClick: true,
    },
    {
      closeOnClick: false,
      id: 'non-selectable-add-space',
      caption: 'Создать пространтсво',
      value: 'non-selectable-add-space',
      onClick: () => alert('Вы пытаетесь создать пространство'),
      Icon: PlusIcon,
    },
  ],
  slotedFromHeaderLeft: [],
  slotedFromHeaderRight: [],

  notifications: {
    notifications: 1,
  },
  // messages: {
  //   notifications: 4,
  // },
  // user: DEMO_LEFT_MENU_USER,

  // settings: {
  //   to: '/configurator',
  // },
};

export const LAYOUT_CONFIG_DEFAULT: LayoutConfigProps = {
  contentPaddings: 'small',

  isHeader: false,
  isFooter: false,

  isModal: true,
  modalContent: () => (
    <div style={{ maxWidth: 1024 }}>
      <h3>Modal content</h3>

      <span style={{ color: 'var(--color-attention-700)' }}>
        Тут ожидаются дмнамически подкидываемые чилдрены из стора лейаута, которые мфе подкидывает предвариетльно перед
        открытием Modal
      </span>
      <br />
      <br />

      <span>{'Lorem ipsum dolor sit amet consectetur.'.repeat(200)}</span>
    </div>
  ),
  modalConfig: {
    scrollBody: false,
    hasFades: true,
    hasCloseButton: true,
    hasOverlay: true,
    size: 's',
  },

  leftSidebar: true,
  leftleftSidebarClosedWidth: '96',

  leftDrawer: false,
  leftDrawerClosedWidth: '96',

  rightSidebar: true,
  RightSidebarContent: () => {
    const { toggleRightSidebar, toggleRightSidebarFullOpen } = useContext(LayoutContext);

    return (
      <div style={{ minWidth: '304px' }}>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '32px',
          }}
        >
          <Button size='xs' IconLeft={FullscreenIcon} onClick={() => toggleRightSidebarFullOpen()} />
          <Button size='xs' IconLeft={CrossIcon} onClick={() => toggleRightSidebar()} />
        </div>

        <h3>Right sidebar content</h3>

        <span style={{ color: 'var(--color-attention-700)' }}>
          Тут ожидаются дмнамически подкидываемые чилдрены из стора лейаута, которые мфе подкидывает предвариетльно
          перед открытием сайдбара
        </span>
      </div>
    );
  },
  rightSidebarClosedWidth: '0',

  rightDrawer: true,
  RightDrawerContent: () => {
    const { toggleRightDrawer, toggleRightDrawerFullOpen } = useContext(LayoutContext);

    return (
      <>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '32px',
          }}
        >
          <Button size='xs' IconLeft={FullscreenIcon} onClick={() => toggleRightDrawerFullOpen()} />
          <Button size='xs' IconLeft={CrossIcon} onClick={() => toggleRightDrawer()} />
        </div>

        <h3>Right Drawer content</h3>

        <span style={{ color: 'var(--color-attention-700)' }}>
          Тут ожидаются дмнамически подкидываемые чилдрены из стора лейаута, которые мфе подкидывает предвариетльно
          перед открытием дровера
        </span>
      </>
    );
  },
  rightDrawerClosedWidth: '0',
};

//  const DEMO_FROM_LEFT_SLOTS: ListItemProps[] = [
//   {
//     id: 'left-slots-button-1',
//     children: 'что-то из левых слотов 1',
//     size: 's',
//     IconLeft: DocumentIcon,
//     onClick: (e) => console.log(e.currentTarget.id),
//   },
//   {
//     id: 'left-slots-button-2',
//     children: 'кнопка из левых слотов 2',
//     size: 's',
//     IconLeft: DocumentIcon,
//     // notifications: 3,
//     onClick: (e) => console.log(e.currentTarget.id),
//   },
// ];

//  const DEMO_FROM_RIGHT_SLOTS: ListItemProps[] = [
//   {
//     id: 'right-slots-button-1',
//     children: 'что-то из правых слотов 1',
//     size: 's',
//     IconLeft: DocumentIcon,
//     onClick: (e) => console.log(e.currentTarget.id),
//   },
// ];
