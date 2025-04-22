import React, { forwardRef } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';
import { SubTitleProps } from './interfaces';

export const SubTitle = forwardRef<HTMLParagraphElement, SubTitleProps>((props, ref) => {
  const { children, className } = props;

  return (
    <div ref={ref} className={cn(styles.subTitle, className)}>
      {children}
    </div>
  );
});
