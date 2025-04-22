import React, { FC, useState } from 'react';
import cn from 'classnames';
import { BaseAccordion } from '@kit-base/accordion';

import { OpenNode } from './components/OpenNode';

import { DEFAULT_TEST_ID } from '../Accordion/constants';
import type { AccordionProps } from '../Accordion/interfaces';

import styles from '../Accordion/accordion.module.scss';
import localStyles from './styles.module.scss';

export const AccordionSection: FC<AccordionProps> = (props) => {
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

  return (
    <BaseAccordion
      {...rest}
      dataTestId={dataTestId}
      isOpen={isOpen}
      contentPaddings={false}
      contentClassName={localStyles.sectionContent}
      className={cn(
        styles.accordionVariables,
        styles[`_color-${appearance}_${colorMode}`],
        styles[`_size_${size}`],
        className,
      )}
      openNode={
        <OpenNode
          title={title}
          colorMode={colorMode}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          openNodeProps={openNodeProps}
        />
      }
    >
      {children}
    </BaseAccordion>
  );
};
