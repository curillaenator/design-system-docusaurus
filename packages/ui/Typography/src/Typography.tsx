/* eslint-disable react/prop-types, @typescript-eslint/ban-ts-comment */
import React, { forwardRef } from 'react';
import cn from 'classnames';

import { VERSION } from './version';
import { DEFAULT_TEST_ID } from './constants';
import { TypographyComponent } from './interfaces';
import baseStyles from './styles/typography.module.scss';

// @ts-ignore tracker repo type mismatch
const Typography: TypographyComponent = forwardRef((props, ref) => {
  const {
    className,
    children,
    dataTestId = DEFAULT_TEST_ID,
    title,
    lang = 'ru',
    as: Component = 'p' as React.ElementType,
    ...rest
  } = props;

  const theClassName = cn(baseStyles.text, className);

  return (
    <Component
      data-testid={dataTestId}
      data-analytics={DEFAULT_TEST_ID}
      data-version={VERSION}
      lang={lang}
      title={title}
      className={theClassName}
      ref={ref}
      {...rest}
    >
      {children}
    </Component>
  );
});

Typography.displayName = 'Typography';

export { Typography };
