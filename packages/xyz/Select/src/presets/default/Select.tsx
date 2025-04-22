import React from 'react';
import { Dropable } from '@kit-base/dropable';
import { Button } from '@kit-xyz/button';
import SelectThinSmall from '@kit-xyz/icon/src/assets/solid/SelectThinSmall';

import { Item } from '../../components';
import { SelectIdProp } from '../../components/item/interfaces';
import { useSelectProps } from './hooks/useSelectProps';

import { DEFAULT_TEST_ID } from '../../constants';
import type { SelectProps } from './interfaces';

export const Select = <T extends SelectIdProp>(props: SelectProps<T>) => {
  const {
    id,
    dataTestId,
    disabled,
    openNodeProps,
    items = [],
    everyItemHasIcon,
    selectedItem,
    onChange,
    isActive,
    openNodeLabel,
    openNodeIcon,
    fullWidth,
    colorMode,
    minified,
    triggerRef,
    ...rest
  } = useSelectProps(props);

  return (
    <Dropable
      {...rest}
      offset={[0, 8]}
      dataTestId={dataTestId || DEFAULT_TEST_ID}
      disabled={disabled}
      openNode={
        <Button
          id={id}
          ref={triggerRef}
          active={isActive}
          tabIndex={0}
          type='button'
          data-testid={dataTestId || DEFAULT_TEST_ID}
          disabled={disabled}
          fullWidth={fullWidth}
          colorMode={colorMode}
          IconLeft={openNodeIcon}
          IconRight={minified ? undefined : () => <SelectThinSmall size='xl' />}
          {...openNodeProps}
        >
          {minified ? undefined : openNodeLabel}
        </Button>
      }
    >
      {items.map((item) => (
        <Item
          {...item}
          // disabled={selectedItem?.id === item.id}
          Icon={everyItemHasIcon ? item.Icon : undefined}
          active={selectedItem?.id === item.id}
          key={item.id}
          colorMode={colorMode}
          onClick={() => {
            if (!item.isUnselectable) onChange(item.id);
            if (item.onClick) item.onClick(item);
          }}
        />
      ))}
    </Dropable>
  );
};
