import React from 'react';
import cn from 'classnames';

import { SystemNotificationBaseProps } from './interfaces';
import { VERSION } from './version';
import { DEFAULT_TEST_ID } from './constants';
import { useStyleCompensators } from './hooks/useStyleCompensators';
import styles from './styles/systemNotification.module.scss';

export const SystemNotification = <TButton, TIcon>(props: SystemNotificationBaseProps<TButton, TIcon>) => {
  const { dataTestId = DEFAULT_TEST_ID, className, text, textSecondary, components } = props;

  const { closeBtn: CloseButton, icon: Icon, actions } = components;

  const { textPadding, textSecondaryPadding, clsBtnWrapperPadding } = useStyleCompensators(
    text,
    textSecondary,
    Boolean(actions),
  );

  return (
    <div
      data-testid={dataTestId}
      data-analytics={DEFAULT_TEST_ID}
      data-version={VERSION}
      className={cn(className, styles.wrapper)}
    >
      <div className={styles.contentWrapper}>
        {Icon && <div className={styles.iconWrapper}>{Icon}</div>}
        <div className={styles.content}>
          <div className={cn(styles.textBlock)}>
            {text && <span className={cn(styles.heading, textPadding)}>{text}</span>}
            {textSecondary && <span className={cn(styles.subline, textSecondaryPadding)}>{textSecondary}</span>}
          </div>
          {actions && <div className={styles.btnContainer}>{actions}</div>}
        </div>
      </div>
      <div className={cn(styles.clsBtnWrapper, clsBtnWrapperPadding)}>{CloseButton}</div>
    </div>
  );
};
