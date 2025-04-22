import React, { FC, useState, useMemo, PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';
import cn from 'classnames';
import { Transition } from '@headlessui/react';
import { usePortal } from '@kit-base/uikit-utils';

import { ModalContext } from './context';
import { useCloseOnEscape } from './hooks/useCloseOnEscape';
import { Overlay } from './components/Overlay';
import { VERSION } from './version';
import { BaseDrawerProps } from './interfaces';
// import { contentTransitions } from './styles/styles';
import styles from './styles/styles.module.scss';

export const BaseDrawer: FC<PropsWithChildren<BaseDrawerProps>> = (props) => {
  const {
    dataTestId,
    open,
    portalId,
    transitionClassName,
    contentClassName,
    children,
    version = VERSION,
    placement = 'left',
    disableOverlay = false,
    onAnimationProgress,
  } = props;

  useCloseOnEscape(props);

  const portal = usePortal(portalId);
  const [isAnimationCompleted, setIsAnimationCompleted] = useState<boolean>(false);
  const contextValue = useMemo(() => ({ isAnimationCompleted }), [isAnimationCompleted]);

  return ReactDOM.createPortal(
    <ModalContext.Provider value={contextValue}>
      {!disableOverlay && (
        <Transition
          data-testid={dataTestId}
          data-analytics={dataTestId}
          data-version={version}
          appear
          show={open}
          unmount
          as='div'
          className={cn(styles.overlayTransition, transitionClassName)}
          afterEnter={() => {
            onAnimationProgress && onAnimationProgress(true);
            setIsAnimationCompleted(true);
          }}
          afterLeave={() => {
            onAnimationProgress && onAnimationProgress(false);
            setIsAnimationCompleted(false);
          }}
        >
          <Overlay {...props} />
        </Transition>
      )}

      <div
        className={cn(styles.content, styles[`content_${placement}`], contentClassName, transitionClassName, {
          [styles.content_closed]: !open,
        })}
      >
        {children}
      </div>
    </ModalContext.Provider>,
    portal,
  );
};
