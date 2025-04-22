import React, { FC } from 'react';
import cn from 'classnames';
import { Transition } from '@headlessui/react';

import { usePrerenderedContent } from './hooks/usePrerenderedContent';
import { VERSION } from './version';
import { DEFAULT_TEST_ID } from './constants';
import { accordionTransitions } from './styles/styles';
import type { BaseAccordionProps } from './interfaces';
import styles from './styles/accordion.module.scss';

export const BaseAccordion: FC<BaseAccordionProps> = (props) => {
  const {
    children,
    dataTestId = DEFAULT_TEST_ID,
    openNode,
    isOpen = false,
    contentPaddings = true,
    className,
    contentClassName,
  } = props;

  const { containerRef, contentRef, render } = usePrerenderedContent(props);

  return (
    <div
      ref={containerRef}
      data-testid={dataTestId}
      data-analytics={DEFAULT_TEST_ID}
      data-version={VERSION}
      className={cn(styles.accordion, className)}
    >
      {openNode}

      <Transition
        data-testid={`${dataTestId}.Content`}
        appear={false}
        show={isOpen}
        unmount={false}
        as='div'
        className={styles.transition}
        {...accordionTransitions}
      >
        <div
          className={cn(styles.content, contentClassName, {
            [styles.content_withPaddings]: contentPaddings,
          })}
        >
          {children}
        </div>
      </Transition>

      {/** пререндер контента чтобы получить его высоту */}
      {render && (
        <div
          ref={contentRef}
          className={cn(styles.prerenderedContent, styles.content, contentClassName, {
            [styles.content_withPaddings]: contentPaddings,
          })}
        >
          {children}
        </div>
      )}
    </div>
  );
};
