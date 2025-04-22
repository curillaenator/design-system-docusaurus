import React, { forwardRef } from 'react';
import cn from 'classnames';

import { useInputProps } from './hooks/useInputProps';
import { VERSION } from './version';
import { DEFAULT_TEST_ID } from './constants';
import { InputProps } from './interfaces';
import styles from './input.module.scss';

const BaseInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    dataTestId = DEFAULT_TEST_ID,
    value,
    upperNode,
    lowerNode,
    status,
    disabled = false,
    nodeLeft,
    nodeRight,
    actionLeft,
    actionRight,
    active,
    setActive = () => {},
    inputRef,
    isOverlay,
    handleScroll,
    wrapperRef,
    className,
    contentClassName,
    inputClassName,
    version,
    placeholder,
    PlaceholderComponent,
    onContainerClick,
    ...rest
  } = useInputProps(props, ref);

  return (
    <div
      data-testid={`${dataTestId}.Container`}
      data-analytics={DEFAULT_TEST_ID}
      data-version={version || VERSION}
      data-focused={active}
      onClick={() => {
        inputRef.current?.focus();
        if (onContainerClick) onContainerClick();
      }}
      onBlur={() => setActive(false)}
      onFocus={() => setActive(true)}
      className={cn(styles.container, className, {
        [styles.container_disabled]: disabled,
        [styles.container_withHover]: !disabled && !active,
        '--isFocused': active,
      })}
    >
      {upperNode}

      <div
        ref={wrapperRef}
        data-testid={`${dataTestId}.Container.Content`}
        className={cn(styles.content, contentClassName)}
      >
        {nodeLeft}
        {actionLeft}

        <div className={styles.overlayWrapper}>
          <input
            {...rest}
            ref={inputRef}
            value={value}
            data-testid={dataTestId}
            disabled={disabled}
            onScroll={handleScroll}
            className={cn(styles.input, inputClassName, {
              [styles.input_paddingLeft]: !nodeLeft && !actionLeft,
              [styles.input_paddingRight]: !nodeRight && !actionRight,
            })}
            tabIndex={0}
            autoComplete={rest.autoComplete || 'off'}
            placeholder={PlaceholderComponent ? undefined : placeholder}
          />

          {/* <div className={styles.placeholder}>
            <span className={styles.placeholder_text}>{placeholder}</span>
          </div> */}

          {!!placeholder && !!PlaceholderComponent && (
            <PlaceholderComponent
              active={active}
              text={placeholder}
              visible={!value && !!placeholder}
              className={cn({
                [styles.input_paddingLeft]: !nodeLeft && !actionLeft,
                [styles.input_paddingRight]: !nodeRight && !actionRight,
              })}
            />
          )}

          {status && <div className={styles.accessibilityStatus}>{status}</div>}

          {isOverlay.left && <div className={cn(styles.overlay)} />}
          {isOverlay.right && <div className={cn(styles.overlay, styles.overlay_right)} />}
        </div>

        {actionRight}
        {nodeRight}
      </div>

      {lowerNode}
    </div>
  );
});

BaseInput.displayName = 'BaseInput';

export { BaseInput };
