import React, { FC, Fragment } from 'react';
import { Dropable, useClickHandler } from '@kit-base/dropable';
import SelectThinSmall from '@kit-xyz/icon/src/assets/solid/SelectThinSmall';

import { useDropdownProps } from './useDropdownProps';
import { ToolbarButton } from '../ToolbarButton';

import type { DropdownProps, DropdownIdProp, ItemProps } from './interfaces';

import styles from './dropdown.module.scss';

const DropdownItem: FC<ItemProps<DropdownIdProp>> = (props) => {
  const { id, closeOnClick, onClick, active, disabled, Icon, caption } = props;
  const { clickHandler } = useClickHandler(() => onClick?.(props), closeOnClick);

  return (
    <ToolbarButton id={String(id)} active={active} disabled={disabled} onClick={clickHandler}>
      {Icon && <Icon />}
      {caption}
    </ToolbarButton>
  );
};

export const Dropdown = <T extends DropdownIdProp>(props: DropdownProps<T>) => {
  const {
    id,
    disabled,
    items = [],
    selectedItem,
    onChange,
    isActive,
    openNodeLabel,
    openNodeIcon: Icon,
    ...rest
  } = useDropdownProps(props);

  return (
    <Dropable
      {...rest}
      offset={[0, 8]}
      disabled={disabled}
      openNode={
        <ToolbarButton id={!!id ? `${id}-opennode` : undefined} active={isActive} disabled={disabled}>
          {Icon && <Icon />}
          <span className={styles.triggerCaption}>{openNodeLabel}</span>
          <SelectThinSmall size='xl' />
        </ToolbarButton>
      }
    >
      {items.map((group, i) => (
        <Fragment key={group.map((el) => el.id).join('_')}>
          {!!group.length && i > 0 && <div className={styles.divider} />}

          {!!group.length &&
            group.map((item) => (
              <DropdownItem
                {...item}
                key={item.id}
                active={item.id === selectedItem?.id}
                disabled={disabled}
                onClick={() => {
                  item.onClick?.(item);
                  onChange(item.id);
                }}
              />
            ))}
        </Fragment>
      ))}
    </Dropable>
  );
};
