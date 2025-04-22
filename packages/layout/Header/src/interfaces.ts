import type { ReactNode } from 'react';

export interface LayoutHeaderProps {
  left?: {
    elements: ReactNode;
  };
  middle?: {
    elements: ReactNode;
  };
  right?: {
    elements: ReactNode;
  };

  className?: string;
}
