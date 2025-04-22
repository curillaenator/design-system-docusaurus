import React, { FC } from 'react';
import cn from 'classnames';
import { Corners } from '@kit-base/shape';

import styles from './color.module.scss';

interface ColorProps {
  color: string;
  smoothed?: boolean;
  borderColor?: string;
}

export const Color: FC<ColorProps> = (props) => {
  const { color, smoothed = false, borderColor = 'transparent' } = props;

  return (
    <div
      className={cn(styles.colorValue, smoothed ? styles.colorValue_smoothed : styles.colorValue_default)}
      style={{
        // @ts-expect-error не дает инжектить cssv на уровне типов
        '--shp-bgc': color,
        '--shp-bdc': borderColor,
        backgroundColor: color,
        boxShadow: `inset 0 0 0 2px ${borderColor}`,
      }}
    >
      {smoothed && <Corners borderRadius={16} stroke={borderColor !== 'transparent' ? 2 : 0} />}
    </div>
  );
};
