import type { MouseEvent, AriaAttributes, ReactNode } from 'react';

export interface NodeProps {
  id: string;
  dataTestId?: string;
  active?: boolean;
  ariaControlsId?: string;
  title?: string;
  disabled?: boolean;
  onClick?: (id: string, event?: MouseEvent<HTMLButtonElement>) => void;
}

export interface BaseTabsProps extends AriaAttributes {
  itemNode: React.ElementType<NodeProps>;
  currentItemId: string | null;
  items: NodeProps[];
  onChange: (id: string, event?: MouseEvent<HTMLButtonElement>) => void;
  dataTestId?: string;
  className?: string;
  scrollable?: boolean;
  children: ReactNode;
}
