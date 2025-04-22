import { createContext } from 'react';

import type { LayoutStateTypeWithHandlers } from '../hooks/useLayoutState';
import type { LayoutConfigTypeWithHandlers } from '../hooks/useLayoutConfig';
import type { MenuTypeWithHandlers } from '../hooks/useLeftMenu';

type LayoutContextType = LayoutStateTypeWithHandlers & LayoutConfigTypeWithHandlers & MenuTypeWithHandlers;

export const LayoutContext = createContext<LayoutContextType>({});
