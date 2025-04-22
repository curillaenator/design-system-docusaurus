import React, { FC, useState, useCallback, type ChangeEvent, type SyntheticEvent } from 'react';
import cn from 'classnames';
import { Checkbox, type CheckboxProps } from '@kit-xyz/checkbox';
import { Accordion } from '@kit-xyz/accordion';
import CheckboxOffIcon from '@kit-xyz/icon/src/assets/solid/CheckboxOffIcon';
import CheckboxOnIcon from '@kit-xyz/icon/src/assets/solid/SquareFullIcon';
import CheckboxSemiOnIcon from '@kit-xyz/icon/src/assets/duotone/SquareFullIcon';

// внутренний стейт документации, у вас свой
import { useViewportContext } from '../../../../src/components/DocViewport';

import styles from './collapsible.module.scss';

export const GROUPED_EXAMPLE_ALL_OFF: Record<string, boolean> = {
  four: false,
  five: false,
  six: false,
};

export const GROUPED_EXAMPLE_ALL_ON: Record<string, boolean> = {
  four: true,
  five: true,
  six: true,
};

export const Collapsible: FC<CheckboxProps> = (props) => {
  const { colorMode } = useViewportContext(); // colorMode при необходимости у вас свой

  const [checked, setChecked] = useState<Record<string, boolean>>(GROUPED_EXAMPLE_ALL_OFF);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setChecked((prev) => ({ ...prev, [e.target.value]: !prev[e.target.value] }));
  }, []);

  const indeterminateState = Object.values(checked).some((v) => !!v);
  const allChecked = Object.values(checked).every((v) => !!v);

  const onOpenNodeLeftIconClick = useCallback(
    (e: SyntheticEvent<SVGElement | HTMLImageElement, Event>) => {
      e.preventDefault();
      e.stopPropagation();

      setChecked(() => {
        if (allChecked) return GROUPED_EXAMPLE_ALL_OFF;
        return GROUPED_EXAMPLE_ALL_ON;
      });
    },
    [allChecked],
  );

  const getOpenNodeIcon = () => {
    if (allChecked) return <CheckboxOnIcon size='xl' onClick={onOpenNodeLeftIconClick} />;
    if (indeterminateState) return <CheckboxSemiOnIcon size='xl' onClick={onOpenNodeLeftIconClick} />;
    return <CheckboxOffIcon size='xl' onClick={onOpenNodeLeftIconClick} />;
  };

  const getOpenNodeTitle = () => {
    if (allChecked) return 'Все элементы выбраны';
    if (indeterminateState) return 'Часть элементов выбрано';
    return 'Ничего не выбрано';
  };

  return (
    <div className={cn(styles.wrapper, styles[colorMode])}>
      <div className={styles.collapsible}>
        <Accordion
          colorMode={colorMode}
          size='xs'
          title={getOpenNodeTitle()}
          openNodeProps={{ IconLeft: () => getOpenNodeIcon() }}
        >
          <div className={styles.group}>
            <Checkbox
              {...props}
              id='checkbox-four'
              label='Checkbox'
              labelSecondary='Four'
              checked={checked.four}
              value='four'
              onChange={onChange}
              colorMode={colorMode}
            />

            <Checkbox
              {...props}
              id='checkbox-five'
              label='Checkbox'
              labelSecondary='Five'
              checked={checked.five}
              value='five'
              onChange={onChange}
              colorMode={colorMode}
            />

            <Checkbox
              {...props}
              id='checkbox-six'
              label='Checkbox'
              labelSecondary='Six'
              checked={checked.six}
              value='six'
              onChange={onChange}
              colorMode={colorMode}
            />
          </div>
        </Accordion>
      </div>
    </div>
  );
};
