import React, { forwardRef } from 'react';
import { BaseInput } from '@kit-base/input';
import { Skeleton } from '@kit-xyz/skeleton';

import { DEFAULT_TEST_ID } from '../../constants';
import { VERSION } from '../../version';

import { SKELETON_SHAPE_ASSOC, SKELETON_SIZE_ASSOC } from './constants';
import { useInputProps } from './hooks/useInputProps';
import type { InputProps } from './interfaces';

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { skeleton, colorMode, size, shape, ...inputProps } = useInputProps(props);

  if (skeleton)
    return (
      <Skeleton
        colorMode={colorMode}
        style={{
          width: `${skeleton}`,
          height: SKELETON_SIZE_ASSOC[size],
          borderRadius: SKELETON_SHAPE_ASSOC[size][shape],
          flexShrink: 1,
        }}
      />
    );

  return (
    <BaseInput {...inputProps} ref={ref} dataTestId={inputProps.dataTestId || DEFAULT_TEST_ID} version={VERSION} />
  );
});

Input.displayName = 'Input';

export { Input };
