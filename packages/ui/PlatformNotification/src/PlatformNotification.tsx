import React from 'react';
import cn from 'classnames';
import { Icon as BaseIcon } from '@kit-base/icon';
import { Button as BaseButton } from '@kit-base/button';

import { PlatformNotificationProps, SimpleComponentType } from './interfaces';
import styles from './styles/notification.module.scss';

export const PlatformNotification = <TButton extends SimpleComponentType, TIcon extends SimpleComponentType>(
  props: PlatformNotificationProps<TButton, TIcon, PlatformNotificationProps>,
) => {
  const {
    dataTestId,
    title,
    description,
    closeButton,
    actions,
    icon,
    className,
    components,
    context,
    isDividerVisibly = true,
  } = props;
  const { Icon = BaseIcon, Button = BaseButton } = components;
  const isNeedDivider = closeButton && actions && isDividerVisibly;

  return (
    <section className={`${styles.notification} ${className}`} data-test-id={dataTestId}>
      <div className={cn(styles.mainSection, !description && styles.mainSectionCentered)}>
        {icon && <Icon {...icon} className={styles.icon} />}
        <div className={styles.infoSection}>
          <div className={styles.textSection}>
            {title && <span className={description ? styles.title : styles.subTitle}>{title}</span>}
            {description && <p className={styles.description}>{description}</p>}
          </div>
          <div className={styles.actionsSection}>
            {actions?.map((actionProps) => (
              <Button {...actionProps} context={context} />
            ))}
          </div>
        </div>
      </div>
      {closeButton && (
        <div className={cn(styles.closeButtonSection, isNeedDivider && styles.closeButtonSectionWithDivider)}>
          {closeButton}
        </div>
      )}
    </section>
  );
};
