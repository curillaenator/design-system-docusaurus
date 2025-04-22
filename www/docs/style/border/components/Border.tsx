import React, { FC } from 'react';
import cn from 'classnames';
import { useViewportContext } from '@site/src/components/DocViewport';

import styles from './border.module.scss';

interface BorderProps {
  width?: string;
  radius?: string;
  style?: string;
}

export const Border: FC<BorderProps> = (props) => {
  const { width = '2px', radius = '16px', style = 'solid' } = props;
  const { colorMode } = useViewportContext();

  return (
    <div
      className={cn(styles.border, styles[colorMode], {
        [styles._noBorder]: width === '0px',
      })}
      style={{
        borderWidth: width !== '0px' ? width : '2px',
        borderRadius: radius,
        borderStyle: style,
      }}
    />
  );
};
