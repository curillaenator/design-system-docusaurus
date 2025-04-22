import React from 'react';
import { components } from 'react-select';
import cn from 'classnames';

import { menuHasScroll } from '../helpers';
import type { ComboBoxComponents } from '../interfaces';

import styles from './menu.module.scss';

export const Menu: ComboBoxComponents['Menu'] = ({ children, ...props }) => {
  const { selectProps, innerProps } = props;
  const { dataTestId, maxMenuHeight, options = [] } = selectProps;

  return (
    <components.Menu
      {...props}
      innerProps={{
        ...innerProps,
        // @ts-ignore
        'data-testid': `${dataTestId}.Menu`,
      }}
      className={cn(styles.menu, {
        [styles.menu_scrollable]: menuHasScroll(options, maxMenuHeight),
      })}
    >
      {children}
    </components.Menu>
  );
};
