import React from 'react';
import { Icon } from '@kit-xyz/icon';

import { UseDividerIconsFn } from '../interfaces';

export const useDividerIcons: UseDividerIconsFn = (props) => {
  const { iconLeftName, iconRightName, ...rest } = props;
  return {
    ...rest,
    iconLeft: iconLeftName ? <Icon name={iconLeftName} size={rest.iconSize} /> : undefined,
    iconRight: iconRightName ? <Icon name={iconRightName} size={rest.iconSize} /> : undefined,
  };
};
