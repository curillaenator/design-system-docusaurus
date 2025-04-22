import { CSSProperties } from 'react';
import type { Anchors, RelationType } from '@kit-xyz/arrows';

export const CONTAINER_ID = 'tasks-and-statuses-diagram';

export interface StatusProps {
  id: string;
  title?: string;
  appearance?: 'default' | 'primary' | 'disabled' | 'dummy';
  customAnchor?: {
    id: string;
    style?: CSSProperties;
    relations?: RelationType[];
  };
}

const LINE_STYLE: RelationType['style'] = {
  endShape: {
    arrow: {
      arrowLength: 5,
      arrowThickness: 5,
    },
  },
};

export const TASKS_STATUSES: StatusProps[] = [
  {
    id: 'status-new',
    title: 'New',
    // customAnchor: {
    //   id: 'status-new-custom',
    //   style: {
    //     position: 'absolute',
    //     top: '50%',
    //     left: '-64px',
    //     width: '4px',
    //     height: '4px',
    //     backgroundColor: 'red',
    //     transform: 'translateY(-50%)',
    //   },
    //   relations: [
    //     {
    //       targetId: 'status-new-left-edge',
    //       sourceAnchor: 'right',
    //       targetAnchor: 'left',
    //       style: {
    //         ...LINE_STYLE,
    //         endMarker: true,
    //       },
    //     },
    //   ],
    // },
  },
  {
    id: 'status-dummy-2',
    appearance: 'dummy',
  },
  {
    id: 'status-canceled',
    title: 'Canceled',
    appearance: 'disabled',
  },
  {
    id: 'status-all',
    title: 'All',
    appearance: 'disabled',
  },
  {
    id: 'status-open',
    title: 'Open',
  },
  {
    id: 'status-need-info',
    title: 'Need info',
  },
  {
    id: 'status-reopened',
    title: 'Reopened',
  },
  {
    id: 'status-dummy-8',
    appearance: 'dummy',
  },
  {
    id: 'status-in-progress',
    title: 'In progress',
    appearance: 'primary',
  },
  {
    id: 'status-research',
    title: 'Research',
  },
  {
    id: 'status-dummy-11',
    appearance: 'dummy',
  },
  {
    id: 'status-dummy-12',
    appearance: 'dummy',
  },
  {
    id: 'status-under-review',
    title: 'Under review',
  },
  {
    id: 'status-dummy-14',
    appearance: 'dummy',
  },
  {
    id: 'status-done',
    title: 'Done',
    appearance: 'primary',
  },
  {
    id: 'status-dummy-16',
    appearance: 'dummy',
  },
];

export const ANCHORS: Record<string, Anchors[]> = {
  'status-new': [
    {
      position: 'bottom-edge',
      relations: [
        {
          targetId: 'status-open-top-edge',
          sourceAnchor: 'bottom',
          targetAnchor: 'top',
          style: {
            ...LINE_STYLE,
            startMarker: true,
          },
        },
      ],
    },
    {
      position: 'bottom-edge-right',
      relations: [
        {
          targetId: 'status-new-bottom-right-right',
          sourceAnchor: 'bottom',
          targetAnchor: 'left',
          style: {
            ...LINE_STYLE,
            endMarker: false,
            startMarker: true,
          },
        },
      ],
    },
    {
      position: 'bottom-right-right',
      relations: [
        {
          targetId: 'status-reopened-top-left-left',
          sourceAnchor: 'right',
          targetAnchor: 'left',
          style: {
            ...LINE_STYLE,
            endMarker: false,
          },
        },
      ],
    },
  ],

  'status-canceled': [
    {
      position: 'right-edge',
    },
    {
      position: 'bottom-edge',
    },
  ],

  'status-all': [
    {
      position: 'left-edge',
      relations: [
        {
          targetId: 'status-canceled-right-edge',
          sourceAnchor: 'left',
          targetAnchor: 'right',
          style: {
            ...LINE_STYLE,
          },
        },
      ],
    },
  ],

  'status-open': [
    {
      position: 'top-edge',
    },
    {
      position: 'right-edge',
    },
    {
      position: 'bottom-edge',
      relations: [
        {
          targetId: 'status-in-progress-top-edge',
          sourceAnchor: 'bottom',
          targetAnchor: 'top',
          style: {
            ...LINE_STYLE,
            endMarker: true,
            startMarker: true,
          },
        },
      ],
    },
  ],

  'status-need-info': [
    {
      position: 'left-edge',
      relations: [
        {
          targetId: 'status-open-right-edge',
          sourceAnchor: 'left',
          targetAnchor: 'right',
          style: {
            ...LINE_STYLE,
            endMarker: true,
          },
        },
      ],
    },
    {
      position: 'right-edge',
    },
    {
      position: 'bottom-edge',
    },
    {
      position: 'bottom-edge-left',
      relations: [
        {
          targetId: 'status-need-info-bottom-left-left',
          sourceAnchor: 'bottom',
          targetAnchor: 'right',
          style: {
            ...LINE_STYLE,
            endMarker: false,
            startMarker: true,
          },
        },
      ],
    },
    {
      position: 'bottom-left-left',
      relations: [
        {
          targetId: 'status-in-progress-top-right-right',
          sourceAnchor: 'left',
          targetAnchor: 'right',
          style: {
            ...LINE_STYLE,
            endMarker: false,
          },
        },
      ],
    },
  ],

  'status-reopened': [
    {
      position: 'top-edge',
      relations: [
        {
          targetId: 'status-canceled-bottom-edge',
          sourceAnchor: 'top',
          targetAnchor: 'bottom',
          style: {
            ...LINE_STYLE,
            endMarker: true,
            startMarker: true,
          },
        },
      ],
    },
    {
      position: 'top-edge-left',
    },
    {
      position: 'top-left-left',
      relations: [
        {
          targetId: 'status-reopened-top-edge-left',
          sourceAnchor: 'right',
          targetAnchor: 'top',
          style: {
            ...LINE_STYLE,
          },
        },
      ],
    },
    {
      position: 'left-edge',
      relations: [
        {
          targetId: 'status-need-info-right-edge',
          sourceAnchor: 'left',
          targetAnchor: 'right',
          style: {
            ...LINE_STYLE,
          },
        },
      ],
    },
    {
      position: 'bottom-edge',
      relations: [
        {
          targetId: 'status-done-top-edge',
          sourceAnchor: 'bottom',
          targetAnchor: 'top',
          style: {
            ...LINE_STYLE,
          },
        },
      ],
    },
    {
      position: 'bl-edge-x-1',
      relations: [
        {
          targetId: 'status-dummy-11-bl-edge-x-1',
          sourceAnchor: 'bottom',
          targetAnchor: 'top',
          style: {
            ...LINE_STYLE,
            endMarker: false,
            strokeDasharray: '5,5',
          },
        },
      ],
    },
  ],

  'status-in-progress': [
    {
      position: 'top-edge',
    },
    {
      position: 'top-edge-right',
    },
    {
      position: 'top-right-right',
      relations: [
        {
          targetId: 'status-in-progress-top-edge-right',
          sourceAnchor: 'left',
          targetAnchor: 'top',
          style: {
            ...LINE_STYLE,
          },
        },
      ],
    },
    {
      position: 'right-edge',
    },
    {
      position: 'bottom-edge',
      relations: [
        {
          targetId: 'status-under-review-top-edge',
          sourceAnchor: 'bottom',
          targetAnchor: 'top',
          style: {
            ...LINE_STYLE,
            startMarker: true,
            endMarker: true,
          },
        },
      ],
    },
    {
      position: 'bottom-edge-right',
    },
    {
      position: 'bottom-right-right',
      relations: [
        {
          targetId: 'status-in-progress-bottom-edge-right',
          sourceAnchor: 'left',
          targetAnchor: 'bottom',
          style: {
            ...LINE_STYLE,
            strokeDasharray: '5,5',
          },
        },
      ],
    },
  ],

  'status-research': [
    {
      position: 'top-edge',
      relations: [
        {
          targetId: 'status-need-info-bottom-edge',
          sourceAnchor: 'top',
          targetAnchor: 'bottom',
          style: {
            ...LINE_STYLE,
          },
        },
      ],
    },
    {
      position: 'left-edge',
      relations: [
        {
          targetId: 'status-in-progress-right-edge',
          sourceAnchor: 'left',
          targetAnchor: 'right',
          style: {
            ...LINE_STYLE,
          },
        },
      ],
    },
    {
      position: 'right-edge',
      relations: [
        {
          targetId: 'status-dummy-11-middle-left-left',
          sourceAnchor: 'right',
          targetAnchor: 'left',
          style: {
            ...LINE_STYLE,
            endMarker: false,
          },
        },
      ],
    },
    {
      position: 'bottom-edge',
    },
  ],

  'status-under-review': [
    {
      position: 'top-edge',
    },
    {
      position: 'right-edge',
    },
  ],

  'status-done': [
    {
      position: 'top-edge',
    },
    {
      position: 'top-edge-left',
    },
    {
      position: 'left-edge',
    },
  ],

  'status-dummy-11': [
    {
      position: 'bl-edge-x-1',
      relations: [
        {
          targetId: 'status-dummy-11-bl-x-0',
          sourceAnchor: 'bottom',
          targetAnchor: 'right',
          style: {
            ...LINE_STYLE,
            endMarker: false,
            strokeDasharray: '5,5',
          },
        },
      ],
    },
    {
      position: 'bl-x-0',
      relations: [
        {
          targetId: 'status-in-progress-bottom-right-right',
          sourceAnchor: 'left',
          targetAnchor: 'right',
          style: {
            ...LINE_STYLE,
            endMarker: false,
            strokeDasharray: '5,5',
          },
        },
      ],
    },
    {
      position: 'middle-left-left',
      relations: [
        {
          targetId: 'status-dummy-11-middle-bottom-left',
          sourceAnchor: 'right',
          targetAnchor: 'top',
          style: {
            ...LINE_STYLE,
            endMarker: false,
          },
        },
      ],
    },
    {
      position: 'middle-bottom-left',
      relations: [
        {
          targetId: 'status-done-top-edge-left',
          sourceAnchor: 'bottom',
          targetAnchor: 'top',
          style: {
            ...LINE_STYLE,
          },
        },
      ],
    },
  ],

  'status-dummy-14': [
    {
      position: 'middle',
      relations: [
        {
          targetId: 'status-research-bottom-edge',
          sourceAnchor: 'middle',
          targetAnchor: 'bottom',
          style: {
            ...LINE_STYLE,
          },
        },
        {
          targetId: 'status-under-review-right-edge',
          sourceAnchor: 'middle',
          targetAnchor: 'right',
          style: {
            ...LINE_STYLE,
            endMarker: false,
          },
        },
        {
          targetId: 'status-done-left-edge',
          sourceAnchor: 'middle',
          targetAnchor: 'left',
          style: {
            ...LINE_STYLE,
          },
        },
      ],
    },
  ],
};
