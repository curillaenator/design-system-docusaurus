import { TokenDescriptionAbstract } from '../../interfaces';

export const normalizeTypographySectionNames = <T>(
  description: TokenDescriptionAbstract<T>,
): TokenDescriptionAbstract<T> => {
  if (description.path.groupName === 'typography') {
    if ('sectionName' in description.path && description.path.sectionName) {
      description.path.sectionName = description.path.sectionName.replace('text-', '');
    }
    if ('themeName' in description.path && description.path.themeName) {
      description.path.themeName = description.path.themeName.replace('text-', '');
    }
  }

  return description;
};
