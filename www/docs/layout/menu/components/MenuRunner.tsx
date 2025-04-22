import React, { FC, useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import cn from 'classnames';
import MagnifyingGlassThinIcon from '@kit-xyz/icon/src/assets/solid/MagnifyingGlassThinIcon';

import { useViewportContext } from '../../../../src/components/DocViewport';
import { YourLogo } from '../assets/YourLogo';
import { YourLogoMinified } from '../assets/YourLogoMinified';
import avatarSrc from '../assets/avatar.png';

import { DEMO_MENU, DEMO_APPS_MENU, DEMO_SELECT_ITEMS, BUTTON_ITEMS } from './constants';
import styles from './styles.module.scss';

const AnimatedMenuContainer: FC<{ isOpen: boolean }> = ({ children, isOpen }) => (
  <aside
    className={cn(styles.aside, {
      [styles.aside_closed]: !isOpen,
    })}
  >
    {children}
  </aside>
);

export const MenuRunner: FC = () => {
  const { colorMode } = useViewportContext(); // your app color mode hook

  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string>('');

  const [selectedItemId, setSelectedItemId] = useState<string>(DEMO_SELECT_ITEMS[0].id);

  return (
    <div className={cn(styles.layout, styles[`layout_${colorMode}`])}>
      <BrowserOnly>
        {() => {
          const { Menu } = require('@kit-layout/menu'); // eslint-disable-line global-require, @typescript-eslint/no-var-requires

          return (
            <AnimatedMenuContainer isOpen={isOpen}>
              <Menu
                // setup
                menuContainerId='docusaurus-docs-demo-menu'
                screen='desktop'
                isOpen={isOpen}
                toggleOpen={() => setIsOpen((prev) => !prev)}
                // data
                logo={{
                  minified: YourLogoMinified,
                  normal: YourLogo,
                }}
                input={{
                  value: inputValue,
                  onChange: (e) => setInputValue(e.target.value),
                  onClearInput: () => setInputValue(''),
                  IconRight: MagnifyingGlassThinIcon,
                  placeholder: 'Поиск',
                }}
                select={{
                  value: selectedItemId,
                  onChange: (itemId) => setSelectedItemId(itemId),
                  items: DEMO_SELECT_ITEMS,
                  buttonItems: BUTTON_ITEMS,
                }}
                elements={DEMO_MENU}
                secondaryElements={DEMO_APPS_MENU}
                notifications={{
                  children: 'Уведомления',
                  onClick: () => alert('Вы клкнули на уведомления'),
                  to: '',
                  href: '',
                  notifications: 4,
                }}
                messages={{
                  children: 'Сообщения',
                  onClick: () => alert('Вы клкнули на сообщения'),
                  to: '',
                  href: '',
                  notifications: 8654,
                  notificationType: 'dark',
                }}
                avatar={{
                  src: avatarSrc,
                  username: 'Иванов Юрий Фёдорович',
                  subline: 'Fullstack разработчик',
                  notion: true,
                  onClick: () => alert('Вы клкнули на пользователя'),
                }}
              />
            </AnimatedMenuContainer>
          );
        }}
      </BrowserOnly>

      <main className={styles.main}>Main content</main>
    </div>
  );
};
