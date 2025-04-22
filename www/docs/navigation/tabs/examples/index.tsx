import React from 'react';
import type { TabsItemProps } from '@kit-xyz/tabs';
import JSON from '@kit-xyz/theme/src/dist/XYZ.json';
import { makeColorValues } from '@site/shared/docsUtils';
import GridIcon from '@kit-xyz/icon/src/assets/duotone/GridIcon';
import TasksIcon from '@kit-xyz/icon/src/assets/duotone/TasksIcon';
import DocumentIcon from '@kit-xyz/icon/src/assets/duotone/DocumentIcon';
import CalendarIcon from '@kit-xyz/icon/src/assets/duotone/CalendarIcon';

import { CardColorValue } from '../../../../src/components/ExamplesGrid';

// THEME

const { color } = JSON.values.style;

export const COLORS = Object.entries({
  'Accent-1-700': 'transparent',
  'Neutral-700': 'transparent',
  'Neutral-600': 'var(--color-neutral-500)',
  'Neutral-200': 'var(--color-neutral-300)',
  'Neutral-100': 'transparent',
}).map(([name, border]) => {
  const colorValue = color[name.toLowerCase()] ? color[name.toLowerCase()].value : '#ff0000';

  return {
    title: name,
    subtitles: makeColorValues(colorValue),
    children: <CardColorValue color={colorValue} borderColor={border} />,
  };
});

// FORMS

export const TABS: TabsItemProps[] = [
  { id: 'table', Icon: DocumentIcon },
  { id: 'cards', Icon: GridIcon },
  { id: 'schedule', Icon: TasksIcon },
  { id: 'timeline', Icon: CalendarIcon },
];

export const TITLED_TABS: TabsItemProps[] = [
  { id: 'table-sa', title: 'Table-sa', Icon: DocumentIcon },
  { id: 'cards-sa', title: 'Cards-sa', Icon: GridIcon },
  { id: 'schedule-sa', title: 'Schedule-sa', Icon: TasksIcon },
  { id: 'timeline-sa', title: 'Timeline (with long name)', Icon: CalendarIcon },
];
