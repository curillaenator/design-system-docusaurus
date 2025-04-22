import React, { FC, useState, useCallback, type ChangeEvent } from 'react';
import cn from 'classnames';
import { Checkbox, type CheckboxProps } from '@kit-xyz/checkbox';
import LabelIcon from '@kit-xyz/icon/src/assets/duotone/GridIcon';
import IndeterminateIcon from '@kit-xyz/icon/src/assets/duotone/SquareSemiIcon';

// внутренний стейт документации, у вас свой
import { useViewportContext } from '../../../../src/components/DocViewport';

import styles from './indeterminate.module.scss';

export const GROUPED_EXAMPLE_ALL_OFF: Record<string, boolean> = {
  one: false,
  two: false,
  three: false,
};

export const GROUPED_EXAMPLE_ALL_ON: Record<string, boolean> = {
  one: true,
  two: true,
  three: true,
};

export const Indeterminate: FC<CheckboxProps> = (props) => {
  const { colorMode } = useViewportContext(); // colorMode при необходимости у вас свой

  const [checked, setChecked] = useState<Record<string, boolean>>(GROUPED_EXAMPLE_ALL_OFF);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setChecked((prev) => ({ ...prev, [e.target.value]: !prev[e.target.value] }));
  }, []);

  const indeterminateState = Object.values(checked).some((v) => !!v);
  const allChecked = Object.values(checked).every((v) => !!v);

  const onIndeterminateChange = useCallback(() => {
    setChecked(() => {
      if (allChecked) return GROUPED_EXAMPLE_ALL_OFF;
      return GROUPED_EXAMPLE_ALL_ON;
    });
  }, [allChecked]);

  return (
    <div className={cn(styles.wrapper, styles[colorMode])}>
      <div className={styles.indeterminated}>
        <Checkbox
          label='Group checkbox'
          id='checkbox-grouped-indeterminate'
          checked={indeterminateState}
          onChange={onIndeterminateChange}
          indeterminate={allChecked ? false : indeterminateState}
          IconRight={LabelIcon}
          IconIndeterminate={IndeterminateIcon}
          colorMode={colorMode}
        />

        <div className={styles.group}>
          <Checkbox
            {...props}
            id='checkbox-one'
            label='Checkbox'
            labelSecondary='One'
            checked={checked.one}
            value='one'
            onChange={onChange}
            colorMode={colorMode}
          />

          <Checkbox
            {...props}
            id='checkbox-two'
            label='Checkbox'
            labelSecondary='Two'
            checked={checked.two}
            value='two'
            onChange={onChange}
            colorMode={colorMode}
          />

          <Checkbox
            {...props}
            id='checkbox-three'
            label='Checkbox'
            labelSecondary='Three'
            checked={checked.three}
            value='three'
            onChange={onChange}
            colorMode={colorMode}
          />
        </div>
      </div>
    </div>
  );
};
