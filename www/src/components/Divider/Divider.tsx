import React, { FC } from 'react';

import { DividerProps } from './interfaces';
import styles from './styles.module.scss';

export const Divider: FC<DividerProps> = () => <div className={styles.divider} />;
