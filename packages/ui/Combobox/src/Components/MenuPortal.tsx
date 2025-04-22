import React from 'react';
import { components } from 'react-select';

import type { ComboBoxComponents } from '../interfaces';

export const MenuPortal: ComboBoxComponents['MenuPortal'] = ({ children, ...props }) => {
  const { selectProps, innerProps } = props;
  const { dataTestId } = selectProps;

  return (
    <components.MenuPortal
      {...props}
      innerProps={{
        ...innerProps,
        className: selectProps.className,
        style: { zIndex: 1600 },
        // @ts-ignore
        'data-testid': `${dataTestId}.MenuPortal`,
      }}
    >
      {children}
    </components.MenuPortal>
  );
};
