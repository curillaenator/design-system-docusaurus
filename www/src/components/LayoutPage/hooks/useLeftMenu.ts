import { useState, useCallback } from 'react';
import type { MenuProps } from '@kit-layout/menu';

import { DEMO_LEFT_MENU, DEMO_LOGO, DEMO_LEFT_MENU_USER } from './defaults';

type LeftMenuPayloadTypes = Object;

export const useLeftMenu = () => {
  const [leftMenu, setLeftMenu] = useState<MenuProps>(DEMO_LEFT_MENU);

  const dispatch = useCallback(
    (key: keyof MenuProps, payload: LeftMenuPayloadTypes) => setLeftMenu((prev) => ({ ...prev, [key]: payload })),
    [],
  );

  const toggleMenuLogo = useCallback(() => {
    if (leftMenu.logo) {
      dispatch('logo', undefined);
    } else {
      dispatch('logo', DEMO_LOGO);
    }
  }, [leftMenu.logo, dispatch]);

  const toggleMenuInput = useCallback(() => {
    if (leftMenu.input) {
      dispatch('input', undefined);
    } else {
      dispatch('input', {});
    }
  }, [leftMenu.input, dispatch]);

  const toggleMenuUser = useCallback(() => {
    if (leftMenu.user) {
      dispatch('user', undefined);
    } else {
      dispatch('user', DEMO_LEFT_MENU_USER);
    }
  }, [leftMenu.user, dispatch]);

  return {
    leftMenu,
    toggleMenuLogo,
    toggleMenuInput,
    toggleMenuUser,
  };
};

export type MenuTypeWithHandlers = Partial<ReturnType<typeof useLeftMenu>>;
