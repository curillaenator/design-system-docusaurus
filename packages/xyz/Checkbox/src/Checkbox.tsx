import React, { forwardRef } from 'react';
import { BaseCheckbox } from '@kit-base/checkbox';
import { Skeleton } from '@kit-xyz/skeleton';

import { useCheckboxProps } from './hooks/useCheckboxProps';
import { DEFAULT_TEST_ID, SKELETON_SHAPE_ASSOC, SKELETON_SIZE_ASSOC } from './constants';
import { CheckboxProps } from './interfaces';

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const { size, colorMode, skeleton, className, ...rest } = useCheckboxProps(props);

  if (skeleton)
    return (
      <Skeleton
        colorMode={colorMode}
        style={{
          width: `${skeleton}`,
          height: SKELETON_SIZE_ASSOC[size],
          borderRadius: SKELETON_SHAPE_ASSOC[size],
        }}
      />
    );

  return <BaseCheckbox ref={ref} {...rest} dataTestId={props.dataTestId || DEFAULT_TEST_ID} className={className} />;
});
