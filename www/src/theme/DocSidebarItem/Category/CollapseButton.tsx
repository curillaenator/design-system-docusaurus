import React, { FC, ComponentProps } from 'react';
// import { useColorMode } from '@docusaurus/theme-common';
import { translate } from '@docusaurus/Translate';
import CaretUpThinIcon from '@kit-xyz/icon/src/assets/solid/CaretUpThinIcon';
import CaretDownThinIcon from '@kit-xyz/icon/src/assets/solid/CaretDownThinIcon';

import styles from './styles.module.scss';

interface CollapseButtonProps {
  categoryLabel: string;
  onClick: ComponentProps<'button'>['onClick'];
  collapsed?: boolean;
  // isActive?: boolean;
}

export const CollapseButton: FC<CollapseButtonProps> = (props) => {
  const {
    categoryLabel,
    onClick,
    collapsed = true,
    // isActive
  } = props;

  // const { colorMode } = useColorMode();

  return (
    <button
      aria-label={translate(
        {
          id: 'theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel',
          message: "Toggle the collapsible sidebar category '{label}'",
          description: 'The ARIA label to toggle the collapsible sidebar category',
        },
        { label: categoryLabel },
      )}
      type='button'
      // className="clean-btn menu__caret"
      className={styles.button}
      onClick={onClick}
    >
      {!collapsed ? (
        <CaretUpThinIcon size='xl' color='primary' colorMode='dark' />
      ) : (
        <CaretDownThinIcon size='xl' color='primary' colorMode='dark' />
      )}
    </button>
  );
};
