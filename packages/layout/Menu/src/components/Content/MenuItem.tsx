import React, { FC, useState } from 'react';
import cn from 'classnames';
import { Button, type ButtonProps } from '@kit-xyz/button';

import { MenuAccordion } from '../Accordion';
import { NotificationBadge } from '../NotificationBadge/NotificationBadge';

import styles from './menuitem.module.scss';
import tracker from '../../trackerTmpStyles/menuItem.module.scss';

export interface MenuItemProps extends Omit<ButtonProps, 'type'> {
  elements?: MenuItemProps[];
  notifications?: number;
  notificationType: 'dark' | 'light';
  minified?: boolean;
}

export const AccordionItem: FC<MenuItemProps> = (props) => {
  const {
    // eslint-disable-next-line no-unused-vars
    notificationType,
    ...rest
  } = props;

  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <Button
      {...rest}
      ref={(inst) => {
        if (!inst) return;
        if (inst.classList.contains('active')) {
          setIsActive(true);
        } else {
          setIsActive(false);
        }
      }}
      fullWidth
      active={isActive}
      appearance='secondary-transparent'
      className={cn(styles.accordionItem, tracker.menuItem)}
    />
  );
};

export const MenuItem: FC<MenuItemProps> = (props) => {
  const {
    id,
    children,
    size,
    IconLeft,
    colorMode,
    elements = [],
    onClick,
    notifications,
    notificationType = 'dark',
    minified,
    component,
    to,
    ...rest
  } = props;

  const [isActive, setIsActive] = useState<boolean>(false);

  if (minified) {
    return (
      <Button
        {...rest}
        id={id}
        ref={(inst: HTMLButtonElement) => {
          if (!inst) return;

          // active - добавляемый класснейм react-router-dom
          if (inst.classList.contains('active')) {
            setIsActive(true);
          } else {
            setIsActive(false);
          }
        }}
        active={isActive}
        component={component}
        to={to}
        type='button'
        size={size}
        fullWidth
        appearance='primary-transparent'
        IconLeft={IconLeft}
        colorMode={colorMode}
        onClick={onClick}
        IconRight={undefined}
        // eslint-disable-next-line react/no-children-prop
        children={undefined}
        notion={!!notifications}
        className={cn(tracker.linkButton, {
          [tracker.linkButton_active]: isActive,
        })}
      />
    );
  }

  if (elements.length) {
    return (
      <MenuAccordion
        triggerId={id}
        title={String(children)}
        colorMode={colorMode}
        size={size}
        contentClassName={styles.accordionContentCn}
        notifications={notifications}
        openNodeProps={{
          ...rest,
          IconLeft,
          onClick,
          fullWidth: true,
          size,
          component,
          to,
          active: isActive,
          className: cn(tracker.linkButton, {
            [tracker.linkButton_active]: isActive,
          }),

          // @ts-expect-error - конпка яавляется forwardRef компонентом
          ref: (inst: HTMLButtonElement) => {
            if (!inst) return;

            if (inst.classList.contains('active')) {
              setIsActive(true);
            } else {
              setIsActive(false);
            }
          },
        }}
      >
        {elements.map((subItem) => (
          <AccordionItem key={subItem.id} {...subItem} colorMode={colorMode} size={size} />
        ))}
      </MenuAccordion>
    );
  }

  return (
    <Button
      {...rest}
      id={id}
      ref={(inst: HTMLButtonElement) => {
        if (!inst) return;

        if (inst.classList.contains('active')) {
          setIsActive(true);
        } else {
          setIsActive(false);
        }
      }}
      active={isActive}
      size={size}
      type='button'
      component={component}
      to={to}
      fullWidth
      labelsFullwidth
      labelsJustify='between'
      appearance='primary-transparent'
      IconLeft={IconLeft}
      colorMode={colorMode}
      onClick={onClick}
      IconRight={() => <div className={styles.noCarret} />}
      // @ts-expect-error использован незаявленный типами интерфейс
      elementRight={<NotificationBadge notifications={notifications} notificationType={notificationType} />}
      className={cn(tracker.linkButton, {
        [tracker.linkButton_active]: isActive,
      })}
    >
      {children}
    </Button>
  );
};
