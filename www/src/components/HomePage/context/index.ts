import { createContext } from 'react';
import type { PaperProps } from '@kit-xyz/paper';

interface MainPageContextType {
  activeTabId?: Record<string, boolean>;
  setActiveTabId?: (tabId?: string) => void;
  setHandClick?: (tabId?: string) => void;

  width?: number;
  setWidth?: (width: number) => void;
  smoothed?: boolean;
  cardsBorderRadius?: PaperProps['borderRadius'];
}

export const MainPageContext = createContext<MainPageContextType>({});
