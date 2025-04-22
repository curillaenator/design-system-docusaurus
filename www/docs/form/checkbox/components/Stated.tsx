import React, { FC, useState, useCallback } from 'react';
import { Checkbox, type CheckboxProps } from '@kit-xyz/checkbox';
import { Paper } from '@kit-xyz/paper';
import { useViewportContext } from '@site/src/components/DocViewport';
import paperStyles from '@site/src/components/Card/display.module.scss';

export const StatedCheckbox: FC<CheckboxProps & { forceChecked?: boolean }> = (props) => {
  const { colorMode } = useViewportContext(); // colorMode при необходимости у вас свой

  const {
    id,
    state,
    disabled,
    appearance,
    IconRight,
    checked: exampleChecked,
    forceChecked,
    skeleton,
    ...rest
  } = props;

  const [checked, setChecked] = useState<boolean>(true);
  const onChange = useCallback(() => setChecked((prev) => !prev), []);

  return (
    <Paper
      colorMode={colorMode}
      fullwidth
      appearance='solid-alt'
      borderRadius='l'
      padding='xl'
      className={paperStyles.paper}
    >
      <Checkbox
        {...rest}
        id={id}
        state={state}
        disabled={disabled}
        appearance={appearance}
        IconRight={IconRight}
        skeleton={skeleton}
        label='Checkbox'
        labelSecondary='42'
        checked={forceChecked ? exampleChecked : checked}
        onChange={forceChecked ? () => {} : onChange}
        colorMode={colorMode}
      />
    </Paper>
  );
};
