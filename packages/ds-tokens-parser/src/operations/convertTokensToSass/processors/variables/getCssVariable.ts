import { PathParts } from '../../interfaces';
import { getContext } from '../../service/context';

import { Primitive, CssV } from './types';
import { getVariableName } from './getVariableName';
import { getVariableValue } from './getVariableValue';

export const getCssVariable = (primitive: Primitive, path: PathParts): CssV => {
  const { value, varName } = primitive;

  const result: CssV = {
    value,
    variableName: null,
    fallbackValue: value,
  };

  if (getContext()?.cssvSkip?.includes(path.groupName)) {
    return result;
  }

  result.variableName = getVariableName(path, varName);

  result.value = getVariableValue(primitive, result.variableName);

  return result;
};
