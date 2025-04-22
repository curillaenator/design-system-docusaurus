import { useState, useCallback, useRef } from 'react';

import { TABS, DURATION } from '../sections/navigation.schema';

const INITIAL_STATE: Record<string, boolean> = Object.fromEntries(TABS.map((tab) => [tab.id, false]));

export const useMainPageNavigation = () => {
  const [activeTabId, dispatchActiveTabId] = useState(INITIAL_STATE);

  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const handClick = useRef<boolean>(false);

  const handleActiveTabId = useCallback((tabId?: string) => {
    if (!tabId) {
      dispatchActiveTabId(INITIAL_STATE);
      return;
    }

    if (tabId === 'products-tech-section-expanded') {
      dispatchActiveTabId({ ...INITIAL_STATE, 'products-tech-section': true });
      return;
    }

    dispatchActiveTabId({ ...INITIAL_STATE, [tabId]: true });
  }, []);

  // дебаунс для того чтобы при быстрых скролах смягчить автопереключение табов
  const setActiveTabId = useCallback(
    (tabId?: string) => {
      if (handClick.current) return;

      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => handleActiveTabId(tabId), 300);
    },
    [handleActiveTabId],
  );

  // при клике на таб вручную евенты интерсекшн обсерверов игнорируются в течении длительности анимации скролла
  const setHandClick = useCallback((tabId?: string) => {
    handClick.current = true;

    if (tabId) {
      dispatchActiveTabId({ ...INITIAL_STATE, [tabId]: true });
    }

    setTimeout(() => {
      handClick.current = false;

      if (tabId) {
        dispatchActiveTabId({ ...INITIAL_STATE, [tabId]: true });
      }
    }, DURATION);
  }, []);

  return {
    activeTabId,
    setActiveTabId,
    setHandClick,
  };
};
