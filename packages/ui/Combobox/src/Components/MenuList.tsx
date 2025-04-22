import React from 'react';
import cn from 'classnames';
import { components } from 'react-select';

import type { ComboBoxComponents } from '../interfaces';

import styles from './menulist.module.scss';

// menuListScrollClassName нужен, чтобы из темного компонента получить стили скролла
const MenuList: ComboBoxComponents['MenuList'] = ({ children, ...props }) => {
  const { selectProps, innerProps } = props;

  return (
    <components.MenuList
      {...props}
      innerProps={{
        ...innerProps,
        // @ts-ignore
        'data-testid': `${selectProps.dataTestId}.Menu.MenuList`,
      }}
      className={cn(props.className, styles.menuList, selectProps.menuListScrollClassName)}
    >
      {children}
    </components.MenuList>
  );
};

export { MenuList };
