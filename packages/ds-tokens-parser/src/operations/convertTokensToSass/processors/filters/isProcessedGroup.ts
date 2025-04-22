import { getContext } from '../../service/context';
import { TokenDescriptionAbstract } from '../../interfaces';

/**
 * Берем из конфигурационного файла только нужные разделы. Они указываются при запуске скрипта в поле groups
 */
export const isProcessedGroup = <T>(token: TokenDescriptionAbstract<T>): boolean => {
  const context = getContext();

  return context.groups.includes(token.path.groupName);
};
