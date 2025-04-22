import cn from 'classnames';
import { useKeyboardNavigation } from '@kit-base/uikit-utils';

import { BaseTabsProps } from '../interfaces';
import styles from '../styles.module.scss';

export const useBaseTabsProps = (props: BaseTabsProps) => {
  const { items = [], currentItemId, scrollable, className, ...rest } = props;

  const { navContainerRef, onContainerKeyDown } = useKeyboardNavigation(
    items.length,
    items.findIndex(({ id }) => id === currentItemId),
    { scrollable },
  );

  return {
    ...rest,
    items,
    currentItemId,
    navContainerRef,
    className: cn(styles.tabs, className),
    onContainerKeyDown,
  };
};
