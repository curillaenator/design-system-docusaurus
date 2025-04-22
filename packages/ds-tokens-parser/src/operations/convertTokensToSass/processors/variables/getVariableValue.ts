import { SHADOW_RE } from './constants';
import { Primitive } from './types';

export const getVariableValue = (primitive: Primitive, variableName: string): string => {
  // отдельно по регулярке проверяются тени, так как в токенах тени имеют разные значения в свойсте type
  if (SHADOW_RE.test(primitive.value)) {
    return `var(${variableName}, ${primitive.value})`;
  }

  if (primitive.type === 'color') {
    // всем значениям с типом color добавляется var(), где значение токена уходит в фолбэк
    return `var(${variableName}, ${primitive.value})`;
  }

  return primitive.value;
};
