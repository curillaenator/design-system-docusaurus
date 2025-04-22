import React, { FC } from 'react';
import cn from 'classnames';
import { Button } from '@kit-xyz/button';
import CaretUpThinIcon from '@kit-xyz/icon/src/assets/solid/CaretUpThinIcon';
import CaretDownThinIcon from '@kit-xyz/icon/src/assets/solid/CaretDownThinIcon';

import type { AccordionProps } from '../../Accordion/interfaces';

import styles from './opennode.module.scss';

interface OpenNodeProps {
  title: AccordionProps['title'];
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  openNodeProps: AccordionProps['openNodeProps'];
  colorMode: AccordionProps['colorMode'];
}

export const OpenNode: FC<OpenNodeProps> = (props) => {
  const { isOpen, setIsOpen, openNodeProps, colorMode, title } = props;

  const Icon = isOpen ? CaretUpThinIcon : CaretDownThinIcon;

  return (
    <div
      className={cn(styles.openNode, {
        [styles.openNode_active]: isOpen,
      })}
      onClick={(e) => {
        if (!isOpen) setIsOpen(true);
        // @ts-expect-error openNodeProps.onClick принимает евент кнопки, не div, но тут не принципиально
        if (openNodeProps?.onClick) openNodeProps.onClick(e);
      }}
    >
      <span className={styles.title}>{title}</span>

      <Button
        active={openNodeProps?.active || isOpen}
        appearance='primary-transparent'
        {...openNodeProps}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsOpen((prev) => !prev);
        }}
        size='xs'
        IconRight={() => <Icon size='xl' />}
        colorMode={colorMode}
      />
    </div>
  );
};
