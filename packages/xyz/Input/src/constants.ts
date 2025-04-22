import type { IconSize } from '@kit-xyz/icon';

import type { InputSize } from './presets/Default/interfaces';

export const DEFAULT_TEST_ID = 'XYZKit.Input';

export const STATE_LABEL_ASSOC: Record<string, string> = {
  success: 'Успешно',
  error: 'Ошибка',
};

export const INPUT_ICONS_SIZES_ASSOC: Record<InputSize, IconSize> = {
  s: 'xl',
};
