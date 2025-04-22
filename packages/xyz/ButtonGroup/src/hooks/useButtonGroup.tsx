import React from 'react';
import cn from 'classnames';
import { Button } from '@kit-xyz/button';
import { Select } from '@kit-xyz/select';

import type { ButtonGroupProps, GroupItem } from '../interfaces';
import styles from '../styles.module.scss';

const renderComponent = (itemProps: GroupItem, props: ButtonGroupProps) => {
  const { id, size = 'xs', appearance = 'primary-solid', colorMode = 'light' } = props;

  if ('value' in itemProps && 'onChange' in itemProps) {
    return (
      <Select
        {...itemProps}
        // @ts-expect-error types
        value={itemProps.value}
        appendToId={id}
        key={itemProps.id || itemProps.placeholder || JSON.stringify(itemProps)}
        colorMode={colorMode}
        openNodeProps={{
          // @ts-expect-error types
          ...itemProps.openNodeProps,
          shape: 'square',
          appearance,
          size,
        }}
      />
    );
  }

  return (
    <Button
      {...itemProps}
      key={itemProps.id || JSON.stringify(itemProps.children)}
      shape='square'
      size={size}
      appearance={appearance}
      colorMode={colorMode}
    />
  );
};

export const useButtonGroup = (props: ButtonGroupProps) => {
  const {
    group,
    size = 'xs,',
    shape = 'rounded',
    appearance = 'primary-solid',
    colorMode = 'light',
    withBorder = false,
    className,
    ...rest
  } = props;

  return {
    ...rest,

    group: group.map((itemProps) => renderComponent(itemProps, props)),

    className: cn(
      styles.buttonGroup,
      styles[`_color-${appearance}_${colorMode}`],
      styles[`_size_${size}`],
      styles[`_shape_${shape}`],
      className,
      {
        [styles._withBorder]: withBorder,
      },
    ),
  };
};
