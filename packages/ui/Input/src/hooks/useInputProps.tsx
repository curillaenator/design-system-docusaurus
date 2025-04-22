import { RefObject, useImperativeHandle, ForwardedRef } from 'react';

import { InputProps, IsOverlay } from '../interfaces';

import { useInputScroll } from './useInputScroll';

interface ExtendedInputProps extends InputProps {
  inputRef: RefObject<HTMLInputElement>;
  isOverlay: IsOverlay;
  handleScroll: () => void;
}

export const useInputProps = (props: InputProps, ref: ForwardedRef<HTMLInputElement>): ExtendedInputProps => {
  const { uncontrolled, value, onChange, ...rest } = props;

  // управление скроллом (оверлеями скролла)
  const { inputRef, isOverlay, handleScroll } = useInputScroll(value);
  useImperativeHandle(ref, () => inputRef?.current as HTMLInputElement);

  // Управлнеие вводимым текстом
  const controls = uncontrolled ? {} : { value, onChange };

  return {
    ...rest,
    ...controls,
    inputRef,
    isOverlay,
    handleScroll,
  };
};
