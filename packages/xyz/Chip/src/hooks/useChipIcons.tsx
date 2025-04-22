import React from 'react';
import CrossIcon from '@kit-xyz/icon/src/assets/solid/CrossIcon';

import type { UseChipIconsFn } from '../interfaces';

export const useChipIcons: UseChipIconsFn = (props) => {
  const { Icon, iconClassName, ...rest } = props;

  return {
    ...rest,
    icon: Icon ? <Icon className={iconClassName} size={rest.size} /> : undefined,
    closeIcon: <CrossIcon size='m' />,
  };
};
