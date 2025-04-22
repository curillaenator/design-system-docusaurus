import { useState, useCallback } from 'react';

import { LayoutStateType, ColorMode } from '../interfaces';

type PayloadTypes = boolean | string | number;

const INITIAL_STATE: LayoutStateType = {
  mode: 'light',
  smoothedCorners: false,
  inputValue: '',
  activeMenuItem: '',
  isConfigurator: true,
  isSidebarLeftOpen: true,
  isDrawerLeftOpen: false,

  isSidebarRightOpen: false,
  isSidebarRightFullOpen: false,

  isDrawerRightOpen: false,
  isDrawerRightFullOpen: false,

  isModalOpen: false,
};

export const useLayoutState = () => {
  // примитивный стейт тут для простоты демо, если ок, то заменить на что-то более подходящее (effector, потому что в он LayoutDefault?)
  const [state, setState] = useState(INITIAL_STATE);
  const dispatch = useCallback(
    (key: keyof LayoutStateType, payload: PayloadTypes) => setState((prev) => ({ ...prev, [key]: payload })),
    [],
  );

  const toggleSmoothCorners = useCallback(
    () => dispatch('smoothedCorners', !state.smoothedCorners),
    [state.smoothedCorners, dispatch],
  );

  const handleInputValue = useCallback((value: string) => dispatch('inputValue', value), [dispatch]);

  const setActiveListItem = useCallback((id: string) => dispatch('activeMenuItem', id), [dispatch]);

  const toggleIsConfigurator = useCallback(
    (isConfigurator?: boolean) => {
      if (isConfigurator !== undefined) {
        dispatch('isConfigurator', isConfigurator);
        return;
      }

      if (state.isConfigurator) {
        dispatch('isConfigurator', false);
      } else {
        dispatch('isConfigurator', true);
      }
    },
    [state.isConfigurator, dispatch],
  );

  const toggleLeftSidebar = useCallback(
    (isSidebarLeftOpen?: boolean) => {
      if (isSidebarLeftOpen !== undefined) {
        dispatch('isSidebarLeftOpen', isSidebarLeftOpen);
        return;
      }

      if (state.isSidebarLeftOpen) {
        dispatch('isSidebarLeftOpen', false);
      } else {
        dispatch('isSidebarLeftOpen', true);
      }
    },
    [state.isSidebarLeftOpen, dispatch],
  );

  const toggleLeftDrawer = useCallback(
    (newState?: boolean) => {
      if (newState !== undefined) {
        dispatch('isDrawerLeftOpen', newState);
        return;
      }

      if (state.isDrawerLeftOpen === true) {
        dispatch('isDrawerLeftOpen', false);
      } else {
        dispatch('isDrawerLeftOpen', true);
      }
    },
    [state.isDrawerLeftOpen, dispatch],
  );

  const toggleRightDrawer = useCallback(
    (newState?: boolean) => {
      if (newState !== undefined) {
        dispatch('isDrawerRightOpen', newState);
        return;
      }

      if (state.isDrawerRightOpen === true) {
        dispatch('isDrawerRightOpen', false);
      } else {
        dispatch('isDrawerRightOpen', true);
      }
    },
    [state.isDrawerRightOpen, dispatch],
  );

  const toggleRightDrawerFullOpen = useCallback(
    (newState?: boolean) => {
      if (newState !== undefined) {
        dispatch('isDrawerRightFullOpen', newState);
        return;
      }

      if (state.isDrawerRightFullOpen === true) {
        dispatch('isDrawerRightFullOpen', false);
      } else {
        dispatch('isDrawerRightFullOpen', true);
      }
    },
    [state.isDrawerRightFullOpen, dispatch],
  );

  const toggleRightSidebar = useCallback(() => {
    if (state.isSidebarRightOpen) {
      dispatch('isSidebarRightOpen', false);
    } else {
      dispatch('isSidebarRightOpen', true);
    }
  }, [state.isSidebarRightOpen, dispatch]);

  const toggleRightSidebarFullOpen = useCallback(() => {
    if (state.isSidebarRightFullOpen) {
      dispatch('isSidebarRightFullOpen', false);
    } else {
      dispatch('isSidebarRightFullOpen', true);
    }
  }, [state.isSidebarRightFullOpen, dispatch]);

  const toggleMode = useCallback(
    (mode?: ColorMode) => {
      if (mode !== undefined) {
        dispatch('mode', mode);
        return;
      }

      if (state.mode === 'light') {
        dispatch('mode', 'dark');
      } else {
        dispatch('mode', 'light');
      }
    },
    [state.mode, dispatch],
  );

  const toggleModalOpen = useCallback(
    (isModalOpen?: boolean) => {
      if (isModalOpen !== undefined) {
        dispatch('isModalOpen', isModalOpen);
        return;
      }

      dispatch('isModalOpen', !state.isModalOpen);
    },
    [state.isModalOpen, dispatch],
  );

  return {
    state,
    toggleIsConfigurator,
    toggleLeftSidebar,
    toggleRightSidebar,
    toggleRightSidebarFullOpen,
    toggleLeftDrawer,
    toggleRightDrawer,
    toggleRightDrawerFullOpen,
    toggleMode,
    setActiveListItem,
    toggleModalOpen,
    handleInputValue,
    toggleSmoothCorners,
  };
};

export type LayoutStateTypeWithHandlers = Partial<ReturnType<typeof useLayoutState>>;
