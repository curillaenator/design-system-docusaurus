import { DropableProps } from '@kit-base/dropable';

import { Placements } from './interfaces';

export const DEFAULT_TEST_ID = 'XYZKit.Hint';

export const OFFSET_X = 0;
export const OFFSET_Y = 6;
export const OFFSET_Y_WITH_ARROW = 8;

export const PLACEMENTS_ASSOC: Record<Placements, DropableProps['placement']> = {
  'top-left': 'top-end',
  'top-center': 'top',
  'top-right': 'top-start',
  'bottom-left': 'bottom-end',
  'bottom-center': 'bottom',
  'bottom-right': 'bottom-start',
  'left-top': 'left-end',
  'left-center': 'left',
  'left-bottom': 'left-start',
  'right-top': 'right-end',
  'right-center': 'right',
  'right-bottom': 'right-start',
};

export const POPPER_OPTIONS: DropableProps['popperOptions'] = {
  modifiers: [
    {
      name: 'flip',
      enabled: false,
    },
    {
      name: 'preventOverflow',
      options: { mainAxis: false },
    },
  ],
};

export const CORNER_RE = /.*-(left|right|top|bottom)$/;
