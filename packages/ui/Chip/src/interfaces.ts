import { ReactText, HTMLAttributes, FC } from 'react';
import { PolymorphicComponentWithRef } from '@kit-base/common-types';

export interface ChipExternalProps extends HTMLAttributes<HTMLSpanElement> {
  /** тест id */
  dataTestId?: string;
  /** текст для chip */
  children?: ReactText | ReactText[];
  /** заблокирован */
  disabled?: boolean;
  /** обработчик по нажатию на кнопку закрыть */
  onClose?: () => void;
  /** дополнительный текст */
  textSecondary?: ReactText;
}

export interface ChipInternalProps {
  icon?: ReturnType<FC>;
  closeIcon: ReturnType<FC>;
}

export interface ChipProps extends ChipInternalProps, ChipExternalProps {}

export type ChipComponent = PolymorphicComponentWithRef<ChipProps, 'component', 'span'>;
