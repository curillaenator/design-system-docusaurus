import { useMemo } from 'react';
import cn from 'classnames';

import { IS_SAFARI } from '../constants';
import styles from '../styles/textarea.module.scss';
import { UseTextareaClasses } from '../interfaces';

export const useTextareaClasses: UseTextareaClasses = (config) => {
  const {
    className,
    iconLeft,
    iconRight,
    isLeftMetaText,
    isRightMetaText,
    focused,
    hovered,
    isScroll,
    resize,
    scrollClassName = '',
  } = config;

  return useMemo(() => {
    const textareaContentClasses = cn(
      styles.content,
      { [styles.content_focused]: focused },
      { [styles.content_hovered]: hovered },
    );

    const textareaFieldClasses = cn(
      scrollClassName,
      styles.field,
      { [styles.field_withPadding]: iconLeft || iconRight },
      { [styles.safaryTextDisabledColor]: IS_SAFARI },
    );

    const baseTextClasses = cn(styles.text, { [styles.text_withPadding]: iconLeft || iconRight });

    const baseTextBlockWrapperLeft = cn(styles.baseTextBlockWrapper, {
      [styles.baseTextBlockWrapper_withIcon]: iconLeft,
    });
    const baseTextBlockWrapperRight = cn(styles.baseTextBlockWrapper, {
      [styles.baseTextBlockWrapper_withIcon]: iconRight,
    });
    const metaIconText = cn(styles.metaIconText, {
      [styles.metaIconText_shortened]: isLeftMetaText && isRightMetaText,
    });

    const resizeClasses = cn(styles.resize, styles[`resize_${resize}`], { [styles.resize_withoutScroll]: !isScroll });

    return {
      root: cn(styles.container, className),
      textareaContentClasses,
      textareaFieldClasses,
      baseTextBlock: styles.baseTextBlock,
      text: baseTextClasses,
      stateHelper: styles.stateHelper,
      baseTextBlockWrapperLeft,
      baseTextBlockWrapperRight,
      baseIcons: styles.baseIconsStyles,
      metaBlock: styles.metaBlock,
      metaIconText,
      metaIconLeft: styles.metaIconLeft,
      metaIconRight: styles.metaIconRight,
      captionLeft: styles.metaTextLeft,
      captionRight: styles.metaTextRight,
      gripButton: resizeClasses,
    };
  }, [
    focused,
    hovered,
    iconLeft,
    iconRight,
    isLeftMetaText,
    isRightMetaText,
    isScroll,
    className,
    resize,
    scrollClassName,
  ]);
};
