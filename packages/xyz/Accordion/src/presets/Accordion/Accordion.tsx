import React, { FC, useState } from 'react';
import cn from 'classnames';
import { BaseAccordion } from '@kit-base/accordion';
import { Button } from '@kit-xyz/button';
import CaretUpThinIcon from '@kit-xyz/icon/src/assets/solid/CaretUpThinIcon';
import CaretDownThinIcon from '@kit-xyz/icon/src/assets/solid/CaretDownThinIcon';

import { DEFAULT_TEST_ID, DEFAULT_OPEN_NODE_PROPS } from './constants';
import type { AccordionProps } from './interfaces';
import styles from './accordion.module.scss';

export const Accordion: FC<AccordionProps> = (props) => {
  const {
    dataTestId = DEFAULT_TEST_ID,
    openByDefault = false,
    openNodeProps,
    title,
    size = 's',
    appearance = 'default',
    colorMode = 'light',
    className,
    children,
    ...rest
  } = props;

  const [isOpen, setIsOpen] = useState<boolean>(openByDefault);

  const Icon = isOpen ? CaretUpThinIcon : CaretDownThinIcon;

  return (
    <BaseAccordion
      {...rest}
      dataTestId={dataTestId}
      isOpen={isOpen}
      className={cn(
        styles.accordionVariables,
        styles[`_color-${appearance}_${colorMode}`],
        styles[`_size_${size}`],
        className,
      )}
      openNode={
        <Button
          active={openNodeProps?.active || isOpen}
          {...{ ...DEFAULT_OPEN_NODE_PROPS, ...openNodeProps }}
          onClick={(e) => {
            if (!isOpen) setIsOpen(true);
            if (openNodeProps?.onClick) openNodeProps.onClick(e);
          }}
          size={size}
          IconRight={() => (
            <Icon
              size='xl'
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsOpen((prev) => !prev);
              }}
            />
          )}
          colorMode={colorMode}
        >
          {title}
        </Button>
      }
    >
      {children}
    </BaseAccordion>
  );
};
