import { InputHTMLAttributes, ReactNode } from 'react';

type OmitedHTMLInputAttrs = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>;

export interface RadioProps extends OmitedHTMLInputAttrs {
  /** тест id */
  dataTestId?: string;
  /** уникальный id для каждого радио, нужен для работы связки label-input */
  id: string;
  /** лейбл */
  label?: string;
  /** дополнительный лейбл */
  labelAdditional?: ReactNode;
  /** положение glyph относительно текста, по умолчанию - false */
  reversed?: boolean;
  /** положение текстов отнгосительно друг друга, по умолчанию - false */
  labelsReversed?: boolean;
  /** занимаемое лейблами место */
  labelsFullwidth?: boolean;
  /** занимаемое радио место */
  fullwidth?: boolean;
  /** состояние disabled */
  disabled?: boolean;
  /** дополнительный className */
  className?: string;
}
