import { ChangeEvent, ReactText, InputHTMLAttributes, ReactNode } from 'react';

export interface CheckboxBaseProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /** состояние чекбокса */
  checked: boolean;
  /** обработчик для чекбокса */
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  /** значение */
  value?: ReactText;
  /** тест id */
  dataTestId?: string;
  /** текст чекбокса */
  label?: ReactNode;
  /** дополнительный лейбл */
  labelSecondary?: string;
  /** состояние чекбокса disabled */
  disabled?: boolean;
  /** расположение глифа и текста */
  reversed?: boolean;
  /** расположение текстов относительно друг друга */
  labelsReversed?: boolean;
  /** занимаемое чебоксом место */
  fullwidth?: boolean;
  /** занимаемое текстами место */
  LabelsFullwidth?: boolean;
  /** проп влияет на наличие ховера у чекбокса, по дефолту true */
  interactive?: boolean;
  /** форма глифа чекбокса */
  glyphShape?: 'square' | 'rounded' | 'circular';
  /** доп иконка внутри глифа */
  iconGlyph?: ReactNode;
  /** иконка лейбла */
  iconRight?: ReactNode;
  /** состояние полувыбора */
  indeterminate?: boolean;
  /** иконка для состояния полувыбора */
  iconIndeterminate: ReactNode;
}
