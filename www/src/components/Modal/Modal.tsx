import React, { FC } from 'react';
import cn from 'classnames';
import { BaseModal, useRequiredBaseProps } from '@kit-base/modal';
import { Button } from '@kit-xyz/button';
import CrossIcon from '@kit-xyz/icon/src/assets/solid/CrossIcon';
import { useColorMode } from '@docusaurus/theme-common';

import { ModalProps } from './interfaces';
import styles from './styles.module.scss';

export const Modal: FC<ModalProps> = (props) => {
  const baseProps = useRequiredBaseProps(props);
  const { colorMode } = useColorMode();

  return (
    <BaseModal
      {...baseProps}
      dataTestId='docusaurus-modal'
      overlayClassName={styles.overlay}
      transitionClassName={styles.transition}
    >
      <div className={cn(styles.content, styles[`content_${colorMode}`])}>
        <Button
          size='xs'
          IconRight={CrossIcon}
          colorMode={colorMode}
          onClick={baseProps.onClose}
          className={styles.close}
        />

        {props.children}
      </div>
    </BaseModal>
  );
};
