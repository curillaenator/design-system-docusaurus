import React, { FC } from 'react';

import { useBaseTabsProps } from './hooks/useBaseTabsProps';
import { VERSION } from './version';
import { DEFAULT_TEST_ID } from './constants';
import { BaseTabsProps } from './interfaces';

export const BaseTabs: FC<BaseTabsProps> = (props) => {
  const {
    dataTestId = DEFAULT_TEST_ID,
    navContainerRef,
    items,
    currentItemId,
    className,
    itemNode: ItemNode,
    onContainerKeyDown,
    onChange,
    children,
    ...rest
  } = useBaseTabsProps(props);

  return (
    <nav
      {...rest}
      ref={navContainerRef}
      role='tablist'
      tabIndex={0}
      data-testid={dataTestId}
      data-analytics={DEFAULT_TEST_ID}
      data-version={VERSION}
      onKeyDown={onContainerKeyDown}
      className={className}
    >
      {children}

      {items.map((item) => (
        <ItemNode
          {...item}
          key={item.id}
          dataTestId={dataTestId}
          active={currentItemId === item.id}
          onClick={onChange}
        />
      ))}
    </nav>
  );
};
