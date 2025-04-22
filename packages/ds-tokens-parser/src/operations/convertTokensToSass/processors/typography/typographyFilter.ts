import { TokenDescriptionOriginal } from '../../interfaces';

export const typographyFilter = (description: TokenDescriptionOriginal): boolean =>
  description.token.type === 'typography';
