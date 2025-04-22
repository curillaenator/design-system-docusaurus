import React, { useRef, Fragment } from 'react';
import cn from 'classnames';
import { Transition } from '@headlessui/react';
import { usePreventEvent } from '@kit-base/uikit-utils';

import { BaseModalProps } from '../interfaces';
import { overlayTransitions } from '../styles/styles';
import styles from '../styles/styles.module.scss';

export const Overlay = (props: BaseModalProps) => {
  const { dataTestId, disableBackgroundClick, onClose, overlayClassName, scrollBody } = props;

  const overlayRef = useRef<HTMLDivElement>(null);

  usePreventEvent([overlayRef], 'touchmove');

  return (
    <Transition.Child as={Fragment} {...overlayTransitions}>
      <div
        ref={overlayRef}
        data-testid={scrollBody ? undefined : `${dataTestId}.Overlay`}
        onClick={disableBackgroundClick ? undefined : onClose}
        className={cn(styles.overlay, overlayClassName, {
          [styles.overlay_noPointerEvents]: disableBackgroundClick,
        })}
      />
    </Transition.Child>
  );
};
