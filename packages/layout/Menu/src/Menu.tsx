import React, { forwardRef, useMemo } from 'react';

import { SubMenu, Header, FastAccess, NotificationsMessages, User, Content, Settings } from './components';
import { useSubmenu } from './hooks/useSubmenu';
import { MenuCombinedProps } from './interfaces';
import { MenuWrapper } from './components/MenuWrapper/MenuWrapper';
import { MenuCommonProps, MenuContext } from './context/MenuContext';

const Menu = forwardRef<HTMLDivElement, MenuCombinedProps>((props, ref) => {
  const {
    screen = 'desktop',
    menuContainerId = 'default-layout-menu-container',
    logo,
    avatar,
    settings,
    notifications,
    messages,
    colorMode = 'light',
    isOpen,
    className,
    elements,
    secondaryElements,

    input,
    select,

    toggleOpen,
  } = props;

  const { setSubmenuElements, ...submenuProps } = useSubmenu(!!isOpen);

  const isMenuDrawer = screen === 'mobile' || screen === 'tablet';

  const contextProps: MenuCommonProps = useMemo(
    () => ({
      colorMode,
      isOpen,
      screen,
      toggleOpen,
    }),
    [colorMode, isOpen, screen, toggleOpen],
  );
  const isSubmenuShown = !isMenuDrawer && !!submenuProps.hoveredMenuItem?.elements?.length;

  return (
    <MenuContext.Provider value={contextProps}>
      <MenuWrapper isSubmenuShown={isSubmenuShown} menuContainerId={menuContainerId} className={className} ref={ref}>
        {!!logo && <Header logo={logo} />}

        <FastAccess select={select} input={input} />

        <Content
          elements={elements}
          linkedApps={secondaryElements}
          resetSubmenuElements={submenuProps.resetSubmenuElements}
          setSubmenuElements={setSubmenuElements}
        />

        <NotificationsMessages notifications={notifications} messages={messages} />

        {!!avatar && <User {...avatar} />}

        {!!settings && <Settings {...settings} />}

        {!isMenuDrawer && !isOpen && <SubMenu {...submenuProps} />}
      </MenuWrapper>
    </MenuContext.Provider>
  );
});

Menu.displayName = 'Menu';

export { Menu };
