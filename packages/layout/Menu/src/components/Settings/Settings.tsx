import React, { FC, useContext } from 'react';
import { Button, type ButtonProps } from '@kit-xyz/button';
import SettingsIcon from '@kit-xyz/icon/src/assets/duotone/Settings';

import styles from './settings.module.scss';
import { MenuContext } from '../../context/MenuContext';

export const Settings: FC<ButtonProps> = (props) => {
  const { ...rest } = props;
  const { isOpen } = useContext(MenuContext);

  return (
    <div id='layout-menu-settings-section' className={styles.container}>
      <Button
        {...rest}
        colorMode='color'
        appearance='primary-transparent'
        IconLeft={SettingsIcon}
        size='xs'
        // eslint-disable-next-line react/no-children-prop
        children={isOpen ? props.children : undefined}
        fullWidth
        justify='start'
      />
    </div>
  );
};
