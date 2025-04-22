import { ChipProps as BaseChipProps, ChipExternalProps } from '@kit-base/chip';
import { ReactText } from 'react';
import { Icons } from '@kit-xyz/icon';

import { GeneratedChipProps } from './tokenInterfaces';

export type ChipSize = GeneratedChipProps['size'];
export type ChipShape = GeneratedChipProps['shape'];
export type ChipVariant = GeneratedChipProps['variant'];
export type ChipAppearance = GeneratedChipProps['appearance'];

export interface ChipProps extends ChipExternalProps {
  /** цветовая схема, по умолчанию - primary */
  appearance?: ChipAppearance;
  /** иконка */
  Icon?: Icons;
  /** дополнительные стили для иконки */
  iconClassName?: string;
  /** размер, default - 2xl */
  size?: ChipSize;
  /** скругление Chip, по дефолту rounded */
  shape?: ChipShape;
  /** вариант, по умолчанию - elevated */
  variant?: ChipVariant;
  /** дополнительный текст */
  textSecondary?: ReactText;
}

export type UseChipIconsFn = {
  (props: ChipProps): BaseChipProps;
};
