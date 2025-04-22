import { ReactNode } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type SimpleComponentType = (...args: any) => any;

type ActionGeneric<TButton extends SimpleComponentType> = Omit<Parameters<TButton>[0], 'context'> & {
  key: string | number;
};

export type PlatformNotificationProps<
  TButton extends SimpleComponentType = SimpleComponentType,
  TIcon extends SimpleComponentType = SimpleComponentType,
  TContext = PlatformNotificationProps<SimpleComponentType, SimpleComponentType, null>,
> = {
  dataTestId?: string;
  className?: string;

  title?: string;
  description?: ReactNode;
  closeButton?: ReactNode;
  context?: Omit<TContext, 'components'>;

  isDividerVisibly?: boolean;
  components: {
    Button?: TButton;
    Icon?: TIcon;
  };

  icon?: Parameters<TIcon>[0];
  actions?: ActionGeneric<TButton>[];
};
