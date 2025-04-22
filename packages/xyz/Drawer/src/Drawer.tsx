import React, { FC } from 'react';
import cn from 'classnames';
import { BaseDrawer, useRequiredBaseProps } from '@kit-base/drawer';

import { DEFAULT_TEST_ID } from './constants';
import { VERSION } from './version';
import { DrawerProps } from './interfaces';
import styles from './drawer.module.scss';

export const Drawer: FC<DrawerProps> = (props) => {
  const {
    dataTestId = DEFAULT_TEST_ID,
    children,
    colorMode = 'light',
    placement = 'left',
    contentClassName,
    size = 'xl',
    appearance = 'default',
  } = props;

  const baseProps = useRequiredBaseProps(props);

  return (
    <BaseDrawer
      {...baseProps}
      dataTestId={dataTestId}
      placement={placement}
      version={VERSION}
      overlayClassName={cn(styles.overlay, styles[`overlay_${colorMode}`])}
      scrollClassName={styles.scroll}
      transitionClassName={cn(styles.variables, styles[`_size_${size}`], styles[`_color-${appearance}_${colorMode}`])}
      contentClassName={cn(styles.content, contentClassName)}
    >
      {children}
    </BaseDrawer>
  );
};
