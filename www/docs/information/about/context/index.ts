import { createContext } from 'react';
import type { PaperProps } from '@kit-xyz/paper';

import type { Breakpoints } from '../interfaces';
import type { StoreType, ResizerObserversType } from '../components/ContextProvider';

interface InfoPageContextType {
  resizeInProcess?: boolean;
  setResizeInProcess?: (resizeInProcess: boolean) => void;

  width?: number;
  breakpoint?: Breakpoints;
  setBreakpoint?: (breakpoint: StoreType) => void;

  watchResizeRefs?: HTMLElement[];
  setWatchResizeRefs?: (inst: HTMLElement) => void;

  resizerObservers?: Record<string, ResizerObserversType>;
  setResizerObservers?: (inst: HTMLElement, resObs: ResizeObserver) => void;

  sectionsWidths?: Record<string, number>;
  setSectionsWidths?: (id: string, sectionWidth: number) => void;

  smoothed?: boolean;
  cardsBorderRadius?: PaperProps['borderRadius'];
}

export const InfoPageContext = createContext<InfoPageContextType>({});
