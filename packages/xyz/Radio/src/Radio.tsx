import React, { forwardRef } from 'react';
import { BaseRadio } from '@kit-base/radio';
import { Skeleton } from '@kit-xyz/skeleton';

import { DEFAULT_TEST_ID, SKELETON_SHAPE_ASSOC, SKELETON_SIZE_ASSOC } from './constants';
import { RadioProps } from './interfaces';
import { useRadioProps } from './hooks/useRadioProps';

export const Radio = forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
  const { className, skeleton, size, colorMode, ...rest } = useRadioProps(props);

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

  return <BaseRadio {...rest} dataTestId={props.dataTestId || DEFAULT_TEST_ID} ref={ref} className={className} />;
});
