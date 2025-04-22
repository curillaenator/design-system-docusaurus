import { useCallback, useState, useRef, useEffect } from 'react';
import cn from 'classnames';

import type { TabsProps } from '../interfaces';
import styles from '../tabs.module.scss';

export const useTabs = (props: TabsProps) => {
  const {
    size = 's',
    appearance = 'solid',
    colorMode = 'light',
    className,
    items,
    currentItemId,
    smoothAnimation = false,
    ...rest
  } = props;

  const [togglerParams, setTogglerParams] = useState<string>('0_0');

  const itemWidthRef = useRef<Record<string, number>>({});
  const collectEachTabW = useCallback((tabId: string, tabW: number) => {
    const tabWidth = itemWidthRef.current[tabId];

    if (!tabWidth || tabWidth !== tabW) {
      itemWidthRef.current[tabId] = tabW;
    }
  }, []);

  useEffect(() => {
    const activeI = items.findIndex((item) => item.id === currentItemId);
    const widthsMap = Object.values(itemWidthRef.current);

    const togglerPosX = widthsMap.reduce((acc, value, i) => {
      if (i < activeI) return acc + value + 4; // 4 - захардкоженный гап Х
      return acc;
    }, 0);

    setTogglerParams(`${itemWidthRef.current[currentItemId || '']}_${togglerPosX}`);
  }, [items, currentItemId]);

  const [togglerW, togglerPosX] = togglerParams.split('_').map((v) => +v);

  return {
    currentItemId,
    items,
    togglerW,
    togglerPosX,
    smoothAnimation,
    collectEachTabW,
    colorMode,
    className: cn(
      styles[`_color-${appearance}_${colorMode}`],
      styles[`_size_${size}`],
      styles[`_shape_rounded`],
      className,
      {
        [styles.smoothAnimation]: smoothAnimation,
      },
    ),
    ...rest,
  };
};
