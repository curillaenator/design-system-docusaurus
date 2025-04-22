import React, { FC } from 'react';
import cn from 'classnames';
import { BaseModal, useRequiredBaseProps } from '@kit-base/modal';

import { DEFAULT_TEST_ID } from './constants';
import { VERSION } from './version';
import { Content } from './components/Content';
import { ModalProps } from './interfaces';
import styles from './styles/styles.module.scss';

export const Modal: FC<ModalProps> = ({onAnimationProgress, ...props}) => {
  const { dataTestId = DEFAULT_TEST_ID, size = 's', colorMode = 'light', hasOverlay = true } = props;
  const baseProps = useRequiredBaseProps(props);

  return (
    <BaseModal
      {...baseProps}
      dataTestId={dataTestId}
      version={VERSION}
      onAnimationProgress={onAnimationProgress}
      overlayClassName={cn({ [styles.transparentOverlay]: !hasOverlay })}
      scrollClassName={styles[`scroll_${colorMode}`]}
      transitionClassName={cn(styles.variables, styles[`_size_${size}`], styles[`_color-default_${colorMode}`])}
    >
      <Content {...props} dataTestId={dataTestId} />
    </BaseModal>
  );
};
