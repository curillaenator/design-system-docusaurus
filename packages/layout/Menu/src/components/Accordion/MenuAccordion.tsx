import React, { FC, useState } from 'react';
import cn from 'classnames';
import { BaseAccordion } from '@kit-base/accordion';
import { Button } from '@kit-xyz/button';
import { Badge } from '@kit-xyz/badge';
import CaretLeftThinIcon from '@kit-xyz/icon/src/assets/solid/CaretLeftThinIcon';

import { DEFAULT_OPEN_NODE_PROPS, DEFAULT_TEST_ID } from './constants';

import type { MenuAccordionProps } from './interfaces';

import styles from './accordion.module.scss';
import localStyles from './styles.module.scss';

import badge from '../../trackerTmpStyles/notificationBadge.module.scss';

interface OpenNodeProps extends MenuAccordionProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const OpenNode: FC<OpenNodeProps> = (props) => {
  const { notifications, dataTestId, openNodeProps, size = 's', isOpen, title, colorMode, setIsOpen } = props;

  return (
    <div data-testid={`${dataTestId}.Trigger`} className={localStyles.openNode}>
      <Button
        active={openNodeProps?.active || isOpen}
        {...{ ...DEFAULT_OPEN_NODE_PROPS, ...openNodeProps }}
        onClick={openNodeProps?.onClick}
        size={size}
        IconRight={
          notifications
            ? () => (
                <Badge
                  size='xs'
                  colorMode={colorMode}
                  shape='circular'
                  style={{ minWidth: 24 }}
                  appearance='primary'
                  className={badge.badge_light}
                >
                  {notifications}
                </Badge>
              )
            : undefined
        }
        colorMode={colorMode}
      >
        {title}
      </Button>

      <Button
        size='xs'
        appearance='primary-transparent'
        active={isOpen}
        colorMode={colorMode}
        className={cn(localStyles.accordionButton, {
          [localStyles.accordionButton_active]: isOpen,
        })}
        IconLeft={CaretLeftThinIcon}
        onClick={() => setIsOpen((prev) => !prev)}
      />
    </div>
  );
};

export const MenuAccordion: FC<MenuAccordionProps> = (props) => {
  const {
    dataTestId = DEFAULT_TEST_ID,
    // eslint-disable-next-line no-unused-vars
    openNodeProps,
    // eslint-disable-next-line no-unused-vars
    title,
    size = 's',
    appearance = 'default',
    colorMode,
    className,
    children,
    ...rest
  } = props;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <BaseAccordion
      {...rest}
      contentPaddings={false}
      dataTestId={dataTestId}
      isOpen={isOpen}
      className={cn(
        styles.accordionVariables,
        styles[`_color-${appearance}_${colorMode}`],
        styles[`_size_${size}`],
        className,
      )}
      openNode={<OpenNode {...props} isOpen={isOpen} setIsOpen={setIsOpen} />}
    >
      {children}
    </BaseAccordion>
  );
};
