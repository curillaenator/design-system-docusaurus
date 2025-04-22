import type { ReactNode } from 'react';
import type { DropableProps } from '@kit-base/dropable';
import type { PaperProps } from '@kit-xyz/paper';

import { GeneratedTooltipProps } from './tokenInterfaces';

type OmitedDropableProps = Omit<
  DropableProps,
  'placement' | 'offset' | 'className' | 'openNode' | 'openNodeClassName' | 'matchWidth' | 'minWidth' | 'maxHeight'
>;

export type Placements =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'
  | 'left-top'
  | 'left-center'
  | 'left-bottom'
  | 'right-top'
  | 'right-center'
  | 'right-bottom';

export interface HintProps extends Omit<GeneratedTooltipProps, 'appearance'>, OmitedDropableProps {
  id?: string;
  /** расположение тултипа */
  placement?: Placements;
  /** контент для тултипа */
  content?: ReactNode;
  /** режим отображения */
  colorMode?: 'light' | 'dark' | 'color';
  /** форсированный цвет, колор мод игнорирутеся */
  color?: PaperProps['color'];
  /** тень тултипа */
  dropShadow?: PaperProps['dropShadow'];
  /** альтернативный режим рендренга радиусов углов подложки */
  smoothedCorners?: boolean;
}
