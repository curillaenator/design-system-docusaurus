import type { InputProps, BaseInputProps } from '@kit-xyz/input';
import type { SelectIdProp } from '@kit-xyz/select';

import { SelectItemProps, SelectButtonItemProps } from '../../types/MenuSelect';

export interface MenuInputProps
  extends Pick<
      InputProps,
      | 'label'
      | 'IconLeft'
      | 'IconRight'
      | 'onClearInput'
      | 'startMetaText'
      | 'endMetaText'
      | 'dataTestId'
      | 'id'
      | 'placeholder'
    >,
    BaseInputProps {}

export interface MenuSelectProps {
  onChange: (itemId: SelectIdProp) => void;
  value: string;
  items: SelectItemProps[];
  buttonItems?: SelectButtonItemProps[][];
}

export interface FastAccessProps {
  input?: MenuInputProps;
  select?: MenuSelectProps;
}
