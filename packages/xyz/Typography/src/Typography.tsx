/* eslint-disable react/prop-types, @typescript-eslint/ban-ts-comment */
import React, { forwardRef } from 'react';
import { Typography as BaseTypography } from '@kit-base/typography';

import { useTypographyClasses } from './hooks/useTypographyClasses';
import { TypographyComponent } from './interfaces';

// @ts-ignore tracker repo type mismatch
const Typography: TypographyComponent = forwardRef((props, ref) => {
  // eslint-disable-next-line no-unused-vars
  const { lineHeight, fontWeight, fontFamily, appearance, as, ...restProps } = props;

  const resultClassName = useTypographyClasses(props);
  return (
    <BaseTypography {...restProps} as={as as React.ElementType} className={resultClassName} ref={ref}>
      {props.children}
    </BaseTypography>
  );
});

Typography.displayName = 'Typography';

export { Typography };
