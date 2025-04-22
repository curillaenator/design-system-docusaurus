import { ChangeEvent, InputHTMLAttributes, ReactText } from 'react';

export interface BaseSwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /** тест id */
  dataTestId?: string;
  /** состояние switch - checked, по дефолту false */
  checked: boolean;
  /** обработчик для switch */
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  /** инверсия отображения */
  reversed?: boolean;
  /** отображение во всю ширину контейнера */
  fullwidth?: boolean;
  /** порядрок отображения лейблов */
  labelsReversed?: boolean;
  /** вариант отображения лейблов */
  labelsFullwidth?: boolean;
  /** состояние switch - disabled */
  disabled?: boolean;
  /** лейбл */
  label?: ReactText;
  /** дополнительный лейбл */
  labelSecondary?: ReactText;
}
