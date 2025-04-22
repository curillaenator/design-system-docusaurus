import React, { forwardRef, useState, useRef, useMemo, useImperativeHandle } from 'react';
import { useCounter } from '@kit-base/uikit-utils';

import { VERSION } from './version';
import {
  DEFAULT_TEST_ID,
  INPUT_FIELD_TEST_ID,
  LABEL_LEFT_TEST_ID,
  LABEL_RIGHT_TEST_ID,
  CAPTION_LEFT_TEST_ID,
  CAPTION_RIGHT_TEST_ID,
} from './constants';
import { useTextareaClasses } from './hooks/useTextareaClasses';
import { useOverlay } from './hooks/useOverlay';
import { useResize } from './hooks/useResize';
import { useAutosize } from './hooks/useAutosize';
import { TextareaProps, UseTextareaClassesArgs } from './interfaces';

/**
 * Textarea -  {@link https://uikit.pcbltools.ru/v4.1/?path=/docs/%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-inputs-textarea--textarea| ссылка на документацию.}
 *
 */

export const TextareaBase = forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
  const {
    dataTestId = DEFAULT_TEST_ID,
    value,
    onChange,
    placeholder,
    className,
    scrollClassName,
    isFocused,
    setIsFocused,
    onHover,
    labelLeft,
    labelRight,
    iconLeft,
    iconRight,
    captionLeft,
    captionRight,
    iconMetaLeft,
    iconMetaRight,
    gripIconNode,
    id,
    ariaLabelContent,
    maxLength,
    ...rest
  } = props;

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { usedLetters } = useCounter(value, maxLength);
  const captionLimit = maxLength ? `${usedLetters}/${maxLength}` : '';
  useImperativeHandle(ref, () => textareaRef?.current as HTMLTextAreaElement, []);
  const [isHover, setIsHover] = useState<boolean>(false);
  const resize = useAutosize(textareaRef, props);
  const { handleMouseDown } = useResize(textareaRef, resize);
  const onContentAreaClickHandle = (evt: React.MouseEvent<HTMLElement>) => {
    if (evt.target !== textareaRef.current) {
      textareaRef.current?.focus();
    }
  };

  const handleIsHovered = (isHovered: boolean) => {
    setIsHover(isHovered);

    if (onHover) {
      onHover(isHovered);
    }
  };

  const isMeta = captionLeft || captionRight || iconMetaLeft || iconMetaRight || captionLimit;

  const extraIds = {
    labelLeftId: labelLeft && id && `${id}-text-left`,
    labelRightId: labelRight && id && `${id}-text-right`,
    captionLeftId: captionLeft && id && `${id}-text-meta-left`,
    captionRightId: captionRight && id && `${id}-text-meta-right`,
    stateHelper: ariaLabelContent && id && `${id}-state-helper`,
  };

  const labelIds = `${extraIds.labelLeftId || ''} ${extraIds.labelRightId || ''} ${extraIds.captionLeftId || ''} ${
    extraIds.captionRightId || ''
  } ${extraIds.stateHelper || ''} `.trim();

  const isScroll = (textareaRef?.current?.scrollHeight || 0) > (textareaRef?.current?.clientHeight || 0);

  const classesConfig: UseTextareaClassesArgs = useMemo(
    () => ({
      className: className ?? '',
      scrollClassName,
      iconLeft: Boolean(iconLeft),
      iconRight: Boolean(iconRight),
      focused: isFocused,
      hovered: isHover,
      isLeftMetaText: captionLeft !== undefined && captionLeft.length > 0,
      isRightMetaText: captionRight !== undefined && captionRight.length > 0,
      isScroll,
      resize,
    }),
    [className, scrollClassName, iconLeft, iconRight, isFocused, isHover, captionLeft, captionRight, isScroll, resize],
  );

  const cls = useTextareaClasses(classesConfig);
  const textareaFieldWrapper = useOverlay(textareaRef);

  return (
    <div data-testid={dataTestId} data-analytics={DEFAULT_TEST_ID} data-version={VERSION} className={cls.root}>
      <div
        className={cls.textareaContentClasses}
        onMouseEnter={() => handleIsHovered(true)}
        onMouseLeave={() => handleIsHovered(false)}
        onClick={onContentAreaClickHandle}
      >
        {(iconLeft || labelLeft) && (
          <div className={cls.baseTextBlockWrapperLeft}>
            <div className={cls.baseTextBlock}>
              {iconLeft && <span className={cls.baseIcons}>{iconLeft}</span>}
              {labelLeft && (
                <span id={extraIds.labelLeftId} className={cls.text} data-testid={LABEL_LEFT_TEST_ID} title={labelLeft}>
                  {labelLeft}
                </span>
              )}
            </div>
          </div>
        )}
        <div className={textareaFieldWrapper}>
          <textarea
            onChange={onChange}
            value={value}
            className={cls.textareaFieldClasses}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            ref={textareaRef}
            data-testid={INPUT_FIELD_TEST_ID}
            aria-labelledby={labelIds || undefined}
            maxLength={maxLength}
            {...rest}
          />
          {!!gripIconNode && resize !== 'none' && (
            <button
              type='button'
              className={cls.gripButton}
              onMouseDown={handleMouseDown}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            >
              {gripIconNode}
            </button>
          )}
          {extraIds.stateHelper && (
            <span className={cls.stateHelper} id={extraIds.stateHelper}>
              {ariaLabelContent}
            </span>
          )}
        </div>

        {(iconRight || labelRight) && (
          <div className={cls.baseTextBlockWrapperRight}>
            <div className={cls.baseTextBlock}>
              {labelRight && (
                <span id={extraIds.labelRightId} className={cls.text} data-testid={LABEL_RIGHT_TEST_ID}>
                  {labelRight}
                </span>
              )}

              {iconRight && <span className={cls.baseIcons}>{iconRight}</span>}
            </div>
          </div>
        )}
      </div>
      {isMeta && (
        <div className={cls.metaBlock}>
          <div className={cls.metaIconText}>
            {iconMetaLeft && <span className={cls.metaIconLeft}>{iconMetaLeft}</span>}

            {captionLeft && (
              <span
                id={extraIds.captionLeftId}
                className={cls.captionLeft}
                data-testid={CAPTION_LEFT_TEST_ID}
                title={captionLeft}
              >
                {captionLeft}
              </span>
            )}
          </div>
          <div className={cls.metaIconText}>
            {(captionRight || captionLimit) && (
              <span
                id={extraIds.captionRightId}
                className={cls.captionRight}
                data-testid={CAPTION_RIGHT_TEST_ID}
                title={captionRight || captionLimit}
              >
                {captionRight || captionLimit}
              </span>
            )}

            {iconMetaRight && <span className={cls.metaIconRight}>{iconMetaRight}</span>}
          </div>
        </div>
      )}
    </div>
  );
});
