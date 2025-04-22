import type { InputProps, BaseInputProps } from '@kit-xyz/input';

export interface MenuInput extends Pick<InputProps, 'label' | 'IconLeft' | 'IconRight' | 'onClearInput' | 'startMetaText' | 'endMetaText' | 'dataTestId' | 'id'>, BaseInputProps {}
