import React, { FC } from 'react';
import cn from 'classnames';
import { IconProps } from '@kit-xyz/icon';
import HomeIcon from '@kit-xyz/icon/src/assets/solid/HomeIcon';

import { useViewportContext } from '../../../../src/components/DocViewport';
import styles from '../styles.module.scss';

export const IconWrapped: FC<IconProps & { border?: boolean }> = ({ border, ...props }) => {
  const { colorMode } = useViewportContext();

  return (
    <div className={cn(styles.wrapper, styles[colorMode])}>
      <div className={cn(border && styles.border, border && styles[`border_${colorMode}`])}>
        <HomeIcon color='primary' colorMode={colorMode} {...props} />
      </div>
    </div>
  );
};
