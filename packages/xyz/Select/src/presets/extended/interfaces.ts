import type { SelectBaseProps, OmitedBaseDropableProps } from '../default/interfaces';
import type { ExtendedItemProps } from '../../components/item/interfaces';
import { SelectIdProp } from '../../components/item/interfaces';

export type ButtonItem<T extends SelectIdProp> = Omit<ExtendedItemProps<T>, 'isUnselectable'>;

export interface SelectExtendedProps<T extends SelectIdProp>
  extends SelectBaseProps<T, ExtendedItemProps<T>>,
    OmitedBaseDropableProps {
  buttonItems?: ButtonItem<any>[][];
  hideSelected?: boolean;
}
