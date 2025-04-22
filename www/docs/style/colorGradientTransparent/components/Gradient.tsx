import React, { FC, CSSProperties } from 'react';
import cn from 'classnames';

import styles from './gradient.module.scss';

interface GradientValueProps {
  style?: CSSProperties;
}

export const Gradient: FC<GradientValueProps> = (props) => (
  <div className={cn(styles.colorValue)} style={props.style} />
);
