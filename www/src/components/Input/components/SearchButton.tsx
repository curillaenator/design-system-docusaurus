import React, { forwardRef, ButtonHTMLAttributes } from 'react';

import styles from './searchbtn.module.scss';

interface SearchButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const SearchButton = forwardRef<HTMLButtonElement, SearchButtonProps>((props, ref) => (
  <button ref={ref} {...props} className={styles.button} type='button'>
    <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M11 21L7 25' strokeWidth='2' strokeLinecap='round' />
      <circle cx='17' cy='15' r='8' strokeWidth='2' />
    </svg>
  </button>
));
