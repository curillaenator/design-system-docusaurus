import type { IconComponent } from '@kit-xyz/icon';
import type { ButtonProps } from '@kit-xyz/button';
import type { PaperProps } from '@kit-xyz/paper';

export interface NotificationProps extends Omit<PaperProps, 'appearance' | 'component'> {
  id: string;
  title: string;
  message?: string;
  Icon?: IconComponent;
  onClose?: (notificationId: string) => void;
  button?: ButtonProps;
  appearance?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'quaternary'
    | 'informative'
    | 'positive'
    | 'attention'
    | 'negative';
}
