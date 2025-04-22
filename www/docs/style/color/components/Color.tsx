import React, { FC, CSSProperties } from 'react';
import cn from 'classnames';
import { useViewportContext } from '@site/src/components/DocViewport';

import styles from './color.module.scss';

interface ColorProps {
  colorName?: string;
  style?: CSSProperties;
}

export const Color: FC<ColorProps> = (props) => {
  const { style, colorName } = props;
  const { colorMode } = useViewportContext();

  return (
    <div
      className={cn(styles.colorValue, styles[colorMode], {
        [styles['_bordered-200']]: colorName === 'neutral-200',
        [styles['_bordered-600']]: colorName === 'neutral-600',
        [styles['_bordered-100']]: colorName !== 'neutral-100' && /.*-100$/.test(colorName),
      })}
      style={style}
    />
  );
};
