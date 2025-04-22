import React, { FC } from 'react';

import styles from './footer.module.scss';

export const Footer: FC = ({ children }) => (
  <footer className={styles.footer}>
    Footer
    {children}
  </footer>
);
