import { AriaAttributes, ReactNode } from 'react';
import { OmitedBaseModalProps } from '@kit-base/modal';

export interface ModalProps extends OmitedBaseModalProps, AriaAttributes {
  /** children */
  children: ReactNode;
}
