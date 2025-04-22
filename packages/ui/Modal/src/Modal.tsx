import React, { FC, Fragment, useState, useMemo, PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';
import cn from 'classnames';
import { Transition } from '@headlessui/react';
import { usePortal, useDisabledScroll } from '@kit-base/uikit-utils';

import { ModalContext } from './context';
import { useCloseOnEscape } from './hooks/useCloseOnEscape';
import { Overlay } from './components/Overlay';
import { VERSION } from './version';
import { BaseModalProps } from './interfaces';
import { contentTransitions } from './styles/styles';
import styles from './styles/styles.module.scss';

export const Modal: FC<PropsWithChildren<BaseModalProps>> = (props) => {
  const {
    dataTestId,
    open,
    portalId,
    onClose,
    disableBackgroundClick,
    scrollBody,
    scrollClassName,
    transitionClassName,
    children,
    version = VERSION,
    onAnimationProgress,
  } = props;

  useDisabledScroll(document, window, undefined, open);
  useCloseOnEscape(props);

  const portal = usePortal(portalId);
  const [isAnimationCompleted, setIsAnimationCompleted] = useState<boolean>(false);
  const contextValue = useMemo(() => ({ isAnimationCompleted }), [isAnimationCompleted]);

  return ReactDOM.createPortal(
    // @ts-ignore игнор для феба, проблема с несоответсвием типов, разобраться на какой стороне пофиксить
    <ModalContext.Provider value={contextValue}>
      <Transition
        data-testid={dataTestId}
        data-analytics={dataTestId}
        data-version={version}
        show={open}
        unmount={false}
        as='div'
        className={cn(styles.transition, transitionClassName)}
      >
        <Overlay {...props} />

        <Transition.Child
          {...contentTransitions}
          // @ts-ignore игнор для феба, проблема с несоответсвием типов, разобраться на какой стороне пофиксить
          unmount={false}
          data-testid={scrollBody ? `${dataTestId}.Overlay` : undefined}
          as={scrollBody ? 'div' : Fragment}
          // @ts-ignore игнор для феба, проблема с несоответсвием типов, разобраться на какой стороне пофиксить
          className={scrollBody ? cn(styles.scrollbody, scrollClassName) : undefined}
          onClick={scrollBody && !disableBackgroundClick ? onClose : undefined}
          afterEnter={() => {
            onAnimationProgress && onAnimationProgress(true);
            setIsAnimationCompleted(true);
          }}
          afterLeave={() => {
            onAnimationProgress && onAnimationProgress(false);
            setIsAnimationCompleted(false);
          }}
        >
          {children}
        </Transition.Child>
      </Transition>
    </ModalContext.Provider>,
    portal,
  );
};
