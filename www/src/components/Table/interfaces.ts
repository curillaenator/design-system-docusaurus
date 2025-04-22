import { ReactText } from 'react';

import { ColorModes } from '../DocViewport';

export interface CellResolverProps {
  cell: ReactText;
  index: number;
  row: ReactText[];
  colorMode?: ColorModes;
}

export interface TableProps {
  data?: ReactText[][];
}
