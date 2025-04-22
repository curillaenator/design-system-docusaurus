import React from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

export const icons: Record<string, JSX.Element> = {
  light: (
    <svg
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn(styles.icon, styles.sun)}
    >
      <circle cx='16' cy='16' r='5' />
      <path d='M27 16H22' />
      <path d='M10 16H5' />
      <path d='M16 5L16 11' />
      <path d='M16 21L16 27' />
      <path d='M12.4862 19.5147L8.51562 23.4853' />
      <path d='M23.4862 8.51473L19.5156 12.4853' />
      <path d='M23.4862 23.4853L19.5156 19.5147' />
      <path d='M12.4862 12.4853L8.51562 8.51472' />
    </svg>
  ),

  dark: (
    <svg
      width='32'
      height='32'
      viewBox='0 0 32 32'
      xmlns='http://www.w3.org/2000/svg'
      className={cn(styles.icon, styles.moon)}
    >
      <path d='M22.5 8.20404L23.0007 9.06965C23.3097 8.8909 23.5 8.56101 23.5 8.20404C23.5 7.84707 23.3097 7.51718 23.0007 7.33844L22.5 8.20404ZM22.5 23.796L23.0007 24.6616C23.3097 24.4828 23.5 24.1529 23.5 23.796C23.5 23.439 23.3097 23.1091 23.0007 22.9304L22.5 23.796ZM19 16C19 13.0401 20.6069 10.4544 23.0007 9.06965L21.9993 7.33844C19.0129 9.06597 17 12.2973 17 16H19ZM23.0007 22.9304C20.6069 21.5456 19 18.9599 19 16H17C17 19.7027 19.0129 22.934 21.9993 24.6616L23.0007 22.9304ZM21.9993 22.9304C20.8236 23.6104 19.4588 24 18 24V26C19.8198 26 21.5288 25.513 23.0007 24.6616L21.9993 22.9304ZM18 24C13.5817 24 10 20.4183 10 16H8C8 21.5228 12.4772 26 18 26V24ZM10 16C10 11.5817 13.5817 8 18 8V6C12.4772 6 8 10.4772 8 16H10ZM18 8C19.4588 8 20.8236 8.38955 21.9993 9.06965L23.0007 7.33844C21.5288 6.48699 19.8198 6 18 6V8Z' />
    </svg>
  ),

  color: (
    <svg
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn(styles.icon, styles.star)}
    >
      <path
        d='M16 5L18.4697 12.6008H26.4616L19.996 17.2984L22.4656 24.8992L16 20.2016L9.53436 24.8992L12.004 17.2984L5.53838 12.6008H13.5303L16 5Z'
        strokeLinejoin='round'
      />
    </svg>
  ),
};
