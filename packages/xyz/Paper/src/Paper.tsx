/* eslint-disable react/prop-types, @typescript-eslint/ban-ts-comment */
import React, { forwardRef, useImperativeHandle, type ElementType } from 'react';
import { Corners } from '@kit-base/shape';

import { usePaperProps } from './hooks/usePaperProps';
import { VERSION } from './version';
import { DEFAULT_TEST_ID, RADIUSES_ASSOC, BDWS_ASSOC } from './constants';
import type { PaperComponent } from './interfaces';

// @ts-ignore tracker repo type mismatch
export const Paper: PaperComponent = forwardRef((props, ref) => {
  const { component, children } = props;

  const {
    dataTestId = DEFAULT_TEST_ID,
    cornersRef,
    renderSmoothed,
    borderRadius,
    borderWidth,
    shapeClassName,
    wrapperClassName,
    withBorder,
    ...rest
  } = usePaperProps(props);

  useImperativeHandle(ref, () => cornersRef.current);

  const Component = component ?? ('div' as ElementType);

  return (
    // @ts-ignore
    <Component
      {...rest}
      ref={cornersRef}
      data-testid={dataTestId}
      data-analytics={DEFAULT_TEST_ID}
      data-version={VERSION}
      className={wrapperClassName}
    >
      {renderSmoothed && (
        <Corners
          borderRadius={RADIUSES_ASSOC[borderRadius]}
          stroke={withBorder ? BDWS_ASSOC[borderWidth] : undefined}
          className={shapeClassName}
        />
      )}

      {children}
    </Component>
  );
});

Paper.displayName = 'Paper';
