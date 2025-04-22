import { TextareaProps } from './interfaces';

export const mapStateToLabel: Record<NonNullable<TextareaProps['state']>, string> = {
  pending: 'Ожидание',
  success: 'Успешно',
  warning: 'Предупреждение',
  error: 'Ошибка',
};
