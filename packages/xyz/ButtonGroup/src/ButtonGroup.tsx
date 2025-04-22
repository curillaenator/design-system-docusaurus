import React, { FC } from 'react';

import { useButtonGroup } from './hooks/useButtonGroup';
import type { ButtonGroupProps } from './interfaces';

export const ButtonGroup: FC<ButtonGroupProps> = (props) => {
  const { id, group, className } = useButtonGroup(props);

  return (
    <div id={id}>
      <div className={className} data-role='groupButton'>
        {group.map((ButtonComponent) => ButtonComponent)}
      </div>
    </div>
  );
};
