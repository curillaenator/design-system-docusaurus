import { PathParts, TokenDescriptionParsedNormalToken } from '../interfaces';
import { getContext } from '../service/context';

import { processVariableConfig } from './variables/processTokenValues';

const isProcessedAsVariable = (path: PathParts): boolean => {
  const externalSkip = getContext()?.cssvSkip?.some((group) => group === path.groupName);
  const internalSkip = 'sectionName' in path && path.sectionName && path.sectionName.includes('scale');

  return !externalSkip && !internalSkip;
};

/**
 * Добавление переменных для темы
 */
export const processedCssv = (description: TokenDescriptionParsedNormalToken): TokenDescriptionParsedNormalToken => {
  if (!isProcessedAsVariable(description.path)) {
    return description;
  }

  description.token = processVariableConfig(description.token, description.path);

  return description;
};
