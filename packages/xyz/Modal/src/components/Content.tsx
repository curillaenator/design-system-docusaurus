import React, { forwardRef } from 'react';
import cn from 'classnames';
import { Button } from '@kit-xyz/button';
import CrossIcon from '@kit-xyz/icon/src/assets/solid/CrossIcon';

import { useContentProps } from '../hooks/useContentProps';
import { DEFAULT_TEST_ID } from '../constants';
import { VERSION } from '../version';
import { ModalProps } from '../interfaces';
import styles from '../styles/styles.module.scss';

export const Content = forwardRef<HTMLDivElement, ModalProps>((props, ref) => {
  const {
    dataTestId = DEFAULT_TEST_ID,
    portalId,
    open,
    scrollBody,
    disableBackgroundClick,
    children,
    hasCloseButton,
    onClose,
    hasFades = true,
    containerRef,
    containerCn,
    contentCn,
    colorMode,
    hasOverlay,
    ...rest
  } = useContentProps(props, ref);

  return (
    <div
      {...rest}
      ref={containerRef}
      data-testid={`${dataTestId}.Container`}
      data-analytics={DEFAULT_TEST_ID}
      data-version={VERSION}
      className={containerCn}
      onClick={(e) => e.stopPropagation()}
      role='dialog'
      aria-modal
    >
      {hasCloseButton && (
        <div className={styles.close}>
          <button type='button' className={styles.close_tablet} onClick={onClose} tabIndex={-1} />

          <Button
            dataTestId={`${dataTestId}.Container.CloseButton`}
            type='button'
            IconLeft={CrossIcon}
            size='xs'
            appearance='primary-solid'
            withBorder
            onClick={onClose}
            aria-label='Закрыть диалоговое окно'
            className={styles.close_web}
            colorMode={colorMode}
          />
        </div>
      )}

      {!scrollBody && hasFades && <div className={cn(styles.fade, styles.fade_top)} />}

      {!scrollBody && hasFades && <div className={cn(styles.fade, styles.fade_bottom)} />}

      <div data-testid={`${dataTestId}.Container.Content`} className={contentCn}>
        {children}
      </div>
    </div>
  );
});
