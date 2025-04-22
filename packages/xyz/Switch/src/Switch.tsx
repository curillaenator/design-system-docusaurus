import React, { forwardRef } from 'react';
import { Switch as BaseSwitch } from '@kit-base/switch';

import { useSwitchProps } from './hooks/useSwitchProps';
import { DEFAULT_TEST_ID } from './constants';
import { SwitchProps } from './interfaces';

export const Switch = forwardRef<HTMLInputElement, SwitchProps>((props, ref) => {
  const switchProps = useSwitchProps(props);
  return <BaseSwitch {...switchProps} dataTestId={props.dataTestId || DEFAULT_TEST_ID} ref={ref} />;
});
