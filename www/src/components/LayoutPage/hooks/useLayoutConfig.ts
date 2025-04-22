import { useState, useCallback, useRef } from 'react';

import type { LayoutConfigProps } from '../interfaces';

import { LAYOUT_CONFIG_DEFAULT } from './defaults';

type ConfigPayloadTypes = boolean | string;
type ModalConfigPayloadTypes = boolean | LayoutConfigProps['modalConfig']['size'];

export const useLayoutConfig = (initialConfig: LayoutConfigProps = LAYOUT_CONFIG_DEFAULT) => {
  const [config, setConfig] = useState<LayoutConfigProps>(initialConfig);
  const dispatch = useCallback(
    (key: keyof LayoutConfigProps, payload: ConfigPayloadTypes) => setConfig((prev) => ({ ...prev, [key]: payload })),
    [],
  );

  // MODAL SETTINGS
  const dispatchModal = useCallback((key: keyof LayoutConfigProps['modalConfig'], payload: ModalConfigPayloadTypes) => {
    setConfig((prev) => ({ ...prev, modalConfig: { ...prev.modalConfig, [key]: payload } }));
  }, []);

  const toggleModalScrollbody = useCallback(() => {
    dispatchModal('scrollBody', !config.modalConfig.scrollBody);
  }, [config.modalConfig.scrollBody, dispatchModal]);

  const toggleModalOverlay = useCallback(() => {
    dispatchModal('hasOverlay', !config.modalConfig.hasOverlay);
  }, [config.modalConfig.hasOverlay, dispatchModal]);

  const toggleModalCloseButton = useCallback(() => {
    dispatchModal('hasCloseButton', !config.modalConfig.hasCloseButton);
  }, [config.modalConfig.hasCloseButton, dispatchModal]);

  // MODAL SETTINGS ENDS

  const setContentPaddings = useCallback(
    (paddings: LayoutConfigProps['contentPaddings']) => {
      dispatch('contentPaddings', paddings);
    },
    [dispatch],
  );

  /// / Start toggleLeftMenuOnOff
  const prevDrawerSidebarCfg = useRef<LayoutConfigProps>({
    leftDrawer: config.leftDrawer,
    leftSidebar: config.leftSidebar,
  });

  const toggleLeftMenuOnOff = useCallback(() => {
    setConfig((prev) => {
      const { leftDrawer, leftSidebar } = prev;

      if (leftDrawer || leftSidebar) {
        prevDrawerSidebarCfg.current.leftDrawer = leftDrawer;
        prevDrawerSidebarCfg.current.leftSidebar = leftSidebar;

        return {
          ...prev,
          leftDrawer: false,
          leftSidebar: false,
        };
      }

      return {
        ...prev,
        leftDrawer: prevDrawerSidebarCfg.current.leftDrawer,
        leftSidebar: prevDrawerSidebarCfg.current.leftSidebar,
      };
    });
  }, []);
  /// / end

  const toggleLeftMenuSidebarOrDrawer = useCallback(
    (leftMenuIs?: 'drawer' | 'sidebar') => {
      let menuShownAs = leftMenuIs;

      if (!leftMenuIs) {
        if (!config.leftDrawer && !!config.leftSidebar) menuShownAs = 'sidebar';
        if (!config.leftSidebar) menuShownAs = 'drawer';
      }

      if (menuShownAs === 'sidebar') {
        dispatch('leftDrawer', undefined);
        dispatch('leftSidebar', true);
      }

      if (menuShownAs === 'drawer') {
        dispatch('leftSidebar', undefined);
        dispatch('leftDrawer', true);
      }
    },
    [config.leftDrawer, config.leftSidebar, dispatch],
  );

  const toggleRightSidebarOnOff = useCallback(() => {
    dispatch('rightSidebar', !config.rightSidebar);
  }, [config.rightSidebar, dispatch]);

  const toggleRightDrawerOnOff = useCallback(() => {
    dispatch('rightDrawer', !config.rightDrawer);
  }, [config.rightDrawer, dispatch]);

  const setRightDrawerClosedWidth = useCallback(
    (width: LayoutConfigProps['rightDrawerClosedWidth']) => {
      dispatch('rightDrawerClosedWidth', width);
    },
    [dispatch],
  );

  const toggleFooter = useCallback(
    (isFooter?: boolean) => {
      if (isFooter !== undefined) {
        dispatch('isFooter', isFooter);
        return;
      }

      dispatch('isFooter', !config.isFooter);
    },
    [config.isFooter, dispatch],
  );

  const toggleHeader = useCallback(
    (isHeader?: boolean) => {
      if (isHeader !== undefined) {
        dispatch('isHeader', isHeader);
        return;
      }

      dispatch('isHeader', !config.isHeader);
    },
    [config.isHeader, dispatch],
  );

  const toggleModal = useCallback(() => {
    dispatch('isModal', !config.isModal);
  }, [config.isModal, dispatch]);

  return {
    config,
    setContentPaddings,
    toggleLeftMenuSidebarOrDrawer,
    toggleLeftMenuOnOff,
    toggleRightSidebarOnOff,
    toggleRightDrawerOnOff,
    setRightDrawerClosedWidth,
    toggleHeader,
    toggleFooter,
    toggleModal,
    toggleModalScrollbody,
    toggleModalOverlay,
    toggleModalCloseButton,
  };
};

export type LayoutConfigTypeWithHandlers = Partial<ReturnType<typeof useLayoutConfig>>;
