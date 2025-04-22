import type { BadgeProps } from '@kit-xyz/badge';
import type { Anchors, RelationType } from '@kit-xyz/arrows';

interface ArchitectureCardProps {
  id: string;
  title?: string;
  subtitle?: string;
  badges?: BadgeProps[];
  type?: 'dummy' | 'normal' | 'dimmed';
}

export const SECTION_ID = 'service-architecture-schema';

const LINE_STYLE: RelationType['style'] = {
  endShape: {
    arrow: {
      arrowLength: 5,
      arrowThickness: 5,
    },
  },
};

export type LayoutType = '4cols' | '2cols' | '1col';

export const ARCHITECTURE_SCHEMAS: Record<LayoutType, ArchitectureCardProps[]> = {
  '4cols': [
    {
      id: 'architecture-base-components',
      title: 'Базовые компоненты',
      subtitle: 'Структура и функционал без темизации',
    },
    {
      id: 'architecture-dummy-2',
      type: 'dummy',
    },
    {
      id: 'architecture-dummy-3',
      type: 'dummy',
    },
    {
      id: 'architecture-local-styles',
      title: 'Локальные стили',
      subtitle: 'Имплементация компонентов под конкретную задачу',
      type: 'dimmed',
    },
    {
      id: 'architecture-example',
      title: 'Example',
      subtitle: 'Пример темизации проекта',
      badges: [
        {
          children: '4.1',
          appearance: 'tertiary-solid',
        },
      ],
    },
    {
      id: 'architecture-whatzclass',
      title: 'Xyz Класс',
      subtitle: 'Школьное образование',
      badges: [
        {
          children: '3.0',
          appearance: 'secondary-solid',
        },
        {
          children: '4.0',
          appearance: 'secondary-solid',
        },
      ],
    },
    {
      id: 'architecture-edutoria',
      title: 'Edutoria',
      subtitle: 'Дополнительное образование',
      badges: [
        {
          children: '4.1',
          appearance: 'secondary-solid',
        },
      ],
    },
    {
      id: 'architecture-school-21',
      title: 'Школа 21',
      subtitle: 'Дополнительное образование',
      badges: [
        {
          children: '3.0',
          appearance: 'secondary-solid',
        },
      ],
    },
    {
      id: 'architecture-dummy-8',
      type: 'dummy',
    },
    {
      id: 'architecture-whatz-accelerator',
      title: 'Xyz Акселлератор',
      type: 'dimmed',
    },
    {
      id: 'architecture-whatz-b2b',
      title: 'Xyz B2B',
      type: 'dimmed',
    },
    {
      id: 'architecture-whatz-b2c',
      title: 'Xyz B2C',
      type: 'dimmed',
    },
  ],
  '2cols': [
    {
      id: 'architecture-base-components',
      title: 'Базовые компоненты',
      subtitle: 'Структура и функционал без темизации',
    },
    {
      id: 'architecture-local-styles',
      title: 'Локальные стили',
      subtitle: 'Имплементация компонентов под конкретную задачу',
      type: 'dimmed',
    },
    {
      id: 'architecture-example',
      title: 'Example',
      subtitle: 'Пример темизации проекта',
      badges: [
        {
          children: '4.1',
          appearance: 'tertiary-solid',
        },
      ],
    },
    {
      id: 'architecture-whatzclass',
      title: 'Xyz Класс',
      subtitle: 'Школьное образование',
      badges: [
        {
          children: '3.0',
          appearance: 'secondary-solid',
        },
        {
          children: '4.0',
          appearance: 'secondary-solid',
        },
      ],
    },
    {
      id: 'architecture-dummy-5',
      type: 'dummy',
    },
    {
      id: 'architecture-whatz-accelerator',
      title: 'Xyz Акселлератор',
      type: 'dimmed',
    },
    {
      id: 'architecture-edutoria',
      title: 'Edutoria',
      subtitle: 'Дополнительное образование',
      badges: [
        {
          children: '4.1',
          appearance: 'secondary-solid',
        },
      ],
    },
    {
      id: 'architecture-school-21',
      title: 'Школа 21',
      subtitle: 'Дополнительное образование',
      badges: [
        {
          children: '3.0',
          appearance: 'secondary-solid',
        },
      ],
    },
    {
      id: 'architecture-whatz-b2b',
      title: 'Xyz B2B',
      type: 'dimmed',
    },
    {
      id: 'architecture-whatz-b2c',
      title: 'Xyz B2C',
      type: 'dimmed',
    },
  ],
  '1col': [
    {
      id: 'architecture-local-styles',
      title: 'Локальные стили',
      subtitle: 'Имплементация компонентов под конкретную задачу',
      type: 'dimmed',
    },
    {
      id: 'architecture-base-components',
      title: 'Базовые компоненты',
      subtitle: 'Структура и функционал без темизации',
    },
    {
      id: 'architecture-example',
      title: 'Example',
      subtitle: 'Пример темизации проекта',
      badges: [
        {
          children: '4.1',
          appearance: 'tertiary-solid',
        },
      ],
    },
    {
      id: 'architecture-whatzclass',
      title: 'Xyz Класс',
      subtitle: 'Школьное образование',
      badges: [
        {
          children: '3.0',
          appearance: 'secondary-solid',
        },
        {
          children: '4.0',
          appearance: 'secondary-solid',
        },
      ],
    },
    {
      id: 'architecture-whatz-accelerator',
      title: 'Xyz Акселлератор',
      type: 'dimmed',
    },
    {
      id: 'architecture-edutoria',
      title: 'Edutoria',
      subtitle: 'Дополнительное образование',
      badges: [
        {
          children: '4.1',
          appearance: 'secondary-solid',
        },
      ],
    },
    {
      id: 'architecture-whatz-b2b',
      title: 'Xyz B2B',
      type: 'dimmed',
    },
    {
      id: 'architecture-school-21',
      title: 'Школа 21',
      subtitle: 'Дополнительное образование',
      badges: [
        {
          children: '3.0',
          appearance: 'secondary-solid',
        },
      ],
    },
    {
      id: 'architecture-whatz-b2c',
      title: 'Xyz B2C',
      type: 'dimmed',
    },
  ],
};

export const ANCHORS_SCHEMAS: Record<LayoutType, Record<string, Anchors[]>> = {
  '4cols': {
    'architecture-base-components': [
      {
        position: 'bottom-edge',
        relations: [
          {
            targetId: 'architecture-base-components-bottom',
            sourceAnchor: 'bottom',
            targetAnchor: 'middle',
            style: {
              ...LINE_STYLE,
              endMarker: false,
            },
          },
        ],
      },
      {
        position: 'bottom',
        relations: [
          {
            targetId: 'architecture-example-top-edge',
            sourceAnchor: 'middle',
            targetAnchor: 'top',
            style: {
              ...LINE_STYLE,
            },
          },
          {
            targetId: 'architecture-school-21-top-left',
            sourceAnchor: 'middle',
            targetAnchor: 'left',
            style: {
              ...LINE_STYLE,
              endMarker: false,
            },
          },
        ],
      },
    ],

    'architecture-example': [
      {
        position: 'top-edge',
      },
    ],

    'architecture-whatzclass': [
      {
        position: 'top',
        relations: [
          {
            targetId: 'architecture-whatzclass-top-edge',
            sourceAnchor: 'middle',
            targetAnchor: 'top',
            style: {
              ...LINE_STYLE,
            },
          },
        ],
      },
      {
        position: 'top-edge',
      },
      {
        position: 'top-left',
        relations: [
          {
            targetId: 'architecture-whatz-accelerator-top-edge-left',
            sourceAnchor: 'middle',
            targetAnchor: 'top',
            style: {
              ...LINE_STYLE,
              strokeDasharray: '5,5',
            },
          },
        ],
      },
    ],

    'architecture-edutoria': [
      {
        position: 'top',
        relations: [
          {
            targetId: 'architecture-edutoria-top-edge',
            sourceAnchor: 'middle',
            targetAnchor: 'top',
            style: {
              ...LINE_STYLE,
            },
          },
        ],
      },
      {
        position: 'top-edge',
      },
      {
        position: 'top-left',
        relations: [
          {
            targetId: 'architecture-whatz-b2b-top-edge-left',
            sourceAnchor: 'middle',
            targetAnchor: 'top',
            style: {
              ...LINE_STYLE,
              strokeDasharray: '5,5',
            },
          },
        ],
      },
    ],

    'architecture-school-21': [
      {
        position: 'top-left',
        relations: [
          {
            targetId: 'architecture-school-21-top-edge',
            sourceAnchor: 'right',
            targetAnchor: 'top',
            style: {
              ...LINE_STYLE,
            },
          },
          {
            targetId: 'architecture-whatz-b2c-top-edge-left',
            sourceAnchor: 'middle',
            targetAnchor: 'top',
            style: {
              ...LINE_STYLE,
              strokeDasharray: '5,5',
            },
          },
        ],
      },
      {
        position: 'top-edge',
      },
    ],

    'architecture-whatz-accelerator': [
      {
        position: 'top-edge-left',
      },
    ],

    'architecture-whatz-b2b': [
      {
        position: 'top-edge-left',
      },
    ],

    'architecture-whatz-b2c': [
      {
        position: 'top-edge-left',
      },
    ],
  },
  '2cols': {
    'architecture-base-components': [
      {
        position: 'bottom-edge',
        relations: [
          {
            targetId: 'architecture-base-components-bottom',
            sourceAnchor: 'bottom',
            targetAnchor: 'middle',
            style: {
              ...LINE_STYLE,
              endMarker: false,
            },
          },
        ],
      },
      {
        position: 'bottom',
        relations: [
          {
            targetId: 'architecture-example-top-edge',
            sourceAnchor: 'middle',
            targetAnchor: 'top',
            style: {
              ...LINE_STYLE,
            },
          },
          {
            targetId: 'architecture-whatzclass-top-left',
            sourceAnchor: 'middle',
            targetAnchor: 'left',
            style: {
              ...LINE_STYLE,
              endMarker: false,
            },
          },
        ],
      },
    ],

    'architecture-example': [
      {
        position: 'top-edge',
      },
      {
        position: 'tr',
        relations: [
          {
            targetId: 'architecture-edutoria-tr',
            sourceAnchor: 'middle',
            targetAnchor: 'middle',
            style: {
              ...LINE_STYLE,
              endMarker: false,
            },
          },
        ],
      },
    ],

    'architecture-whatzclass': [
      {
        position: 'top-edge',
      },
      {
        position: 'top-left',
        relations: [
          {
            targetId: 'architecture-whatzclass-top-edge',
            sourceAnchor: 'right',
            targetAnchor: 'top',
            style: {
              ...LINE_STYLE,
            },
          },
          {
            targetId: 'architecture-whatz-accelerator-top-edge-left',
            sourceAnchor: 'middle',
            targetAnchor: 'top',
            style: {
              ...LINE_STYLE,
              strokeDasharray: '5,5',
            },
          },
        ],
      },
    ],

    'architecture-whatz-accelerator': [
      {
        position: 'top-edge-left',
      },
    ],

    'architecture-school-21': [
      {
        position: 'top-left',
        relations: [
          {
            targetId: 'architecture-school-21-top-edge',
            sourceAnchor: 'right',
            targetAnchor: 'top',
            style: {
              ...LINE_STYLE,
            },
          },
          {
            targetId: 'architecture-whatz-b2c-top-edge-left',
            sourceAnchor: 'middle',
            targetAnchor: 'top',
            style: {
              ...LINE_STYLE,
              strokeDasharray: '5,5',
            },
          },
        ],
      },
      {
        position: 'top-edge',
      },
    ],

    'architecture-whatz-b2c': [
      {
        position: 'top-edge-left',
      },
    ],

    'architecture-edutoria': [
      {
        position: 'top-edge',
      },
      {
        position: 'top-right',
        relations: [
          {
            targetId: 'architecture-edutoria-top-edge',
            sourceAnchor: 'left',
            targetAnchor: 'top',
            style: {
              ...LINE_STYLE,
            },
          },
          {
            targetId: 'architecture-whatz-b2b-top-edge-right',
            sourceAnchor: 'middle',
            targetAnchor: 'top',
            style: {
              ...LINE_STYLE,
              strokeDasharray: '5,5',
            },
          },
        ],
      },
      {
        position: 'tr',
        relations: [
          {
            targetId: 'architecture-edutoria-top-right',
            sourceAnchor: 'left',
            targetAnchor: 'middle',
            style: {
              ...LINE_STYLE,
              endMarker: false,
            },
          },
          {
            targetId: 'architecture-school-21-top-left',
            sourceAnchor: 'middle',
            targetAnchor: 'left',
            style: {
              ...LINE_STYLE,
              endMarker: false,
            },
          },
        ],
      },
    ],

    'architecture-whatz-b2b': [
      {
        position: 'top-edge-right',
      },
    ],
  },
  '1col': {
    'architecture-base-components': [
      {
        position: 'left-edge',
        relations: [
          {
            targetId: 'architecture-base-components-left-bottom',
            sourceAnchor: 'left',
            targetAnchor: 'top',
            style: {
              ...LINE_STYLE,
              endMarker: false,
            },
          },
        ],
      },
      {
        position: 'left-bottom',
        relations: [
          {
            targetId: 'architecture-example-left',
            sourceAnchor: 'bottom',
            targetAnchor: 'top',
            style: {
              ...LINE_STYLE,
              endMarker: false,
            },
          },
        ],
      },
    ],

    'architecture-example': [
      {
        position: 'left',
        relations: [
          {
            targetId: 'architecture-example-left-edge',
            sourceAnchor: 'middle',
            targetAnchor: 'left',
            style: {
              ...LINE_STYLE,
            },
          },
          {
            targetId: 'architecture-example-bl',
            sourceAnchor: 'middle',
            targetAnchor: 'middle',
            style: {
              ...LINE_STYLE,
              endMarker: false,
            },
          },
        ],
      },
      {
        position: 'left-edge',
      },
      {
        position: 'bl',
        relations: [
          {
            targetId: 'architecture-whatzclass-top-left',
            sourceAnchor: 'middle',
            targetAnchor: 'middle',
            style: {
              ...LINE_STYLE,
              endMarker: false,
            },
          },
          {
            targetId: 'architecture-edutoria-tl',
            sourceAnchor: 'middle',
            targetAnchor: 'middle',
            style: {
              ...LINE_STYLE,
              endMarker: false,
            },
          },
        ],
      },
    ],

    'architecture-whatzclass': [
      {
        position: 'top-edge',
      },
      {
        position: 'top-left',
        relations: [
          {
            targetId: 'architecture-whatzclass-top-edge',
            sourceAnchor: 'right',
            targetAnchor: 'top',
            style: {
              ...LINE_STYLE,
            },
          },
          {
            targetId: 'architecture-whatz-accelerator-top-edge-left',
            sourceAnchor: 'middle',
            targetAnchor: 'top',
            style: {
              ...LINE_STYLE,
              strokeDasharray: '5,5',
            },
          },
        ],
      },
    ],

    'architecture-whatz-accelerator': [
      {
        position: 'top-edge-left',
      },
    ],

    'architecture-edutoria': [
      {
        position: 'top-edge',
      },
      {
        position: 'top-left',
        relations: [
          {
            targetId: 'architecture-edutoria-top-edge',
            sourceAnchor: 'right',
            targetAnchor: 'top',
            style: {
              ...LINE_STYLE,
            },
          },
          {
            targetId: 'architecture-whatz-b2b-top-edge-left',
            sourceAnchor: 'middle',
            targetAnchor: 'top',
            style: {
              ...LINE_STYLE,
              strokeDasharray: '5,5',
            },
          },
        ],
      },
      {
        position: 'tl',
        relations: [
          {
            targetId: 'architecture-edutoria-top-left',
            sourceAnchor: 'middle',
            targetAnchor: 'middle',
            style: {
              ...LINE_STYLE,
              endMarker: false,
            },
          },
          {
            targetId: 'architecture-whatz-b2b-bl-y-0',
            sourceAnchor: 'middle',
            targetAnchor: 'middle',
            style: {
              ...LINE_STYLE,
              endMarker: false,
            },
          },
        ],
      },
    ],

    'architecture-whatz-b2b': [
      {
        position: 'top-edge-left',
      },
      {
        position: 'bl-y-0',
        relations: [
          {
            targetId: 'architecture-whatz-b2b-bl-x-0',
            sourceAnchor: 'bottom',
            targetAnchor: 'left',
            style: {
              ...LINE_STYLE,
              endMarker: false,
            },
          },
        ],
      },
      {
        position: 'bl-x-0',
        relations: [
          {
            targetId: 'architecture-school-21-top-left',
            sourceAnchor: 'right',
            targetAnchor: 'middle',
            style: {
              ...LINE_STYLE,
              endMarker: false,
            },
          },
        ],
      },
    ],

    'architecture-school-21': [
      {
        position: 'top-left',
        relations: [
          {
            targetId: 'architecture-school-21-top-edge',
            sourceAnchor: 'right',
            targetAnchor: 'top',
            style: {
              ...LINE_STYLE,
            },
          },
          {
            targetId: 'architecture-whatz-b2c-top-edge-left',
            sourceAnchor: 'middle',
            targetAnchor: 'top',
            style: {
              ...LINE_STYLE,
              strokeDasharray: '5,5',
            },
          },
        ],
      },
      {
        position: 'top-edge',
      },
    ],

    'architecture-whatz-b2c': [
      {
        position: 'top-edge-left',
      },
    ],
  },
};
