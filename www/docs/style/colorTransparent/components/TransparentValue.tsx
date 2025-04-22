import React, { FC, CSSProperties } from 'react';
import cn from 'classnames';
import { useViewportContext } from '@site/src/components/DocViewport';

import styles from './transparent.module.scss';

interface TransparentValueProps {
  bordered?: boolean;
  style?: CSSProperties;
  mode?: 'light' | 'dark' | 'color';
}

export const TransparentValue: FC<TransparentValueProps> = (props) => {
  const { bordered, style, mode } = props;
  const { colorMode } = useViewportContext();

  return (
    <div
      className={cn(styles.colorValue, styles[mode || colorMode], {
        [styles._bordered]: bordered,
      })}
      style={style}
    />
  );
};
