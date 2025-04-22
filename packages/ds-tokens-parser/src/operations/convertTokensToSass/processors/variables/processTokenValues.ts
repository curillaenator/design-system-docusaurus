import { PathParts } from '../../interfaces';
import { getContext } from '../../service/context';
import { NormalToken } from '../../../../types/tokens';

import { getCssVariable } from './getCssVariable';

export const processVariableConfig = (value: NormalToken, path: PathParts): NormalToken => {
  const context = getContext();

  const variable = getCssVariable(
    {
      type: value.type,
      value: value.value,
      varName: value.varName,
    },
    path,
  );

  if (variable.value?.includes('var(--') && 'themeName' in path && path.themeName) {
    context.cssvCollector.addVariable(
      path.groupName,
      `${path!.themeName}.${variable.variableName}`,
      variable.fallbackValue,
    );
  }

  value.value = variable.value;

  return value;
};
