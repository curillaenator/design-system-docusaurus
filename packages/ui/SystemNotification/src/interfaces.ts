import { ReactElement } from 'react';

export interface SystemNotificationBaseProps<TButton, TIcon> {
  dataTestId?: string;
  text?: string;
  textSecondary?: string;
  components: {
    closeBtn: ReactElement<TButton>;
    actions?: ReactElement<TButton>[];
    icon?: ReactElement<TIcon>;
  };
  className?: string;
}
