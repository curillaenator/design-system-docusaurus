import { PathParts } from '../../interfaces';

import { getNotateGroupName, getNotateSchemaName, getNotateTokenName } from './utils/notate';

export const getVariableName = (path: PathParts, forcedVarName?: string): string => {
  const notableGroup = getNotateGroupName(path.groupName);

  if (path.groupName === 'typography') {
    const variableKey = forcedVarName || getNotateSchemaName(path.tokenName);

    return `--${notableGroup}_${variableKey}`;
  }
  if (path.schemeName === undefined) {
    const variableKey = forcedVarName || getNotateTokenName(path.tokenName);

    return `--${notableGroup}_${variableKey}`;
  }

  const notableColorSchema = getNotateSchemaName(path.schemeName);
  const notableTokenKey = forcedVarName || getNotateTokenName(path.tokenName);

  return `--${notableGroup}_${notableColorSchema}_${notableTokenKey}`;
};
