import React, { FC, CSSProperties } from 'react';

import styles from './gradient.module.scss';

interface GradientValueProps {
  style?: CSSProperties;
}

export const GradientValue: FC<GradientValueProps> = (props) => (
  <div className={styles.colorValue} style={props.style} />
);
