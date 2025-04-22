import { createContext } from 'react';

import type { DocsHeaderProps } from '../components/DocsHeader';

interface ContextType extends Partial<DocsHeaderProps> {
  selectedVersion?: string;
  setSelectedVersion?: (newVersion: string) => void;
  setHeaderContext?: (docsMeta: DocsHeaderProps) => void;
}

export const DocItemContext = createContext<ContextType>({});
