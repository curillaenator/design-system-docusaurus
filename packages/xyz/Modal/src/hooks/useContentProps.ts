import { useRef, useEffect, useImperativeHandle, ForwardedRef } from 'react';
import cn from 'classnames';
import { useModalAccessibility } from '@kit-base/modal';

import { ModalProps } from '../interfaces';
import styles from '../styles/styles.module.scss';

export const useContentProps = (props: ModalProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { scrollBody, hasCloseButton, children, open, colorMode = 'light', ...rest } = props;

  const containerRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => containerRef?.current as HTMLDivElement);

  const { updateContentInstance } = useModalAccessibility({ hasCloseButton, ignore: !open });

  useEffect(() => updateContentInstance(containerRef?.current), [children, updateContentInstance]);

  return {
    ...rest,
    containerRef,
    open,
    children,
    scrollBody,
    hasCloseButton,
    colorMode,
    containerCn: cn(styles.container, {
      [styles.container_withoutButton]: !hasCloseButton,
      [styles.container_scrollable]: scrollBody,
    }),
    contentCn: cn(styles.content, {
      [styles.content_scrollable]: !scrollBody,
      // [styles[`content_scrollable_${colorMode}`]]: !scrollBody,
    }),
  };
};
