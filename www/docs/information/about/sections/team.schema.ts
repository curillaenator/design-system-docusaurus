import { BadgeProps } from '@kit-xyz/badge';
import type { Anchors, RelationType } from '@kit-xyz/arrows';

import type { Breakpoints } from '../interfaces';
import oastakhov from '../assets/avatars/oastakhov.png';
import bazhenov from '../assets/avatars/ebazhenov.jpg';
import vzubkov from '../assets/avatars/vzubkov.png';
import karturov from '../assets/avatars/karturov.png';
import ayashvili from '../assets/avatars/ayashvili.jpg';
import eustinov from '../assets/avatars/eustinov.png';

export interface CardProps {
  id: string;
  to?: string;
  avatarURL?: string;
  title: string;
  subtitle?: string;
  badge: BadgeProps;
  required?: boolean;
  anchors?: Anchors[];
  className?: string;
}

// content

export const TEAM_SCHEMA: CardProps[][] = [
  [
    {
      id: 'team-manager',
      required: true,
      title: 'Менеджер проекта',
      badge: { children: 'Есть потребность', appearance: 'primary-transparent', withBorder: true },
    },
  ],
  [
    {
      id: 'product-owner',
      to: 'https://mm.pcbltools.ru/slack-export/messages/@astakhov',
      required: false,
      avatarURL: oastakhov,
      title: 'Олег Астахов',
      subtitle: 'Владелец продукта',
      badge: { children: 'oevastakhov@xyz.ru', appearance: 'secondary-solid' },
    },
  ],
  [
    {
      id: 'tech-leader',
      to: 'https://mm.pcbltools.ru/slack-export/messages/@ealbazhenov',
      required: false,
      avatarURL: bazhenov,
      title: 'Евгений Баженов',
      subtitle: 'Технический лидер',
      badge: { children: 'ebazhenov@xyz.ru', appearance: 'secondary-solid' },
    },
    {
      id: 'tech-leader-vz',
      to: 'https://mm.pcbltools.ru/slack-export/messages/@valeriizubkov',
      required: false,
      avatarURL: vzubkov,
      title: 'Валерий Зубков',
      subtitle: 'Технический лидер',
      badge: { children: 'vpazubkov@xyz.ru', appearance: 'secondary-solid' },
    },
    {
      id: 'fe-developer-ka',
      to: 'https://mm.pcbltools.ru/slack-export/messages/@kaarturov',
      required: false,
      avatarURL: karturov,
      title: 'Кирилл Артуров',
      subtitle: 'FE разработчик',
      badge: { children: 'kaarturov@xyz.ru', appearance: 'secondary-solid' },
    },
    {
      id: 'fe-tester-ayashvili',
      to: 'https://mm.pcbltools.ru/slack-export/messages/@aayashvili',
      required: false,
      avatarURL: ayashvili,
      title: 'Анна Яшвили',
      subtitle: 'Тестировщик',
      badge: { children: 'ayashvili@xyz.ru', appearance: 'secondary-solid' },
    },
    {
      id: 'fe-developer-required',
      required: true,
      title: 'FE разработчик',
      badge: { children: 'Открытая вакансия', appearance: 'tertiary-solid', withBorder: true },
    },
    {
      id: 'fe-mobile-developer-required',
      required: true,
      title: 'Mobile разработчик',
      badge: { children: 'Есть потребность', appearance: 'primary-transparent', withBorder: true },
    },
  ],
  [
    {
      id: 'design-leader',
      required: true,
      title: 'Дизайн–лидер',
      badge: { children: 'Есть потребность', appearance: 'primary-transparent', withBorder: true },
    },
    {
      id: 'designer-eu',
      to: 'https://mm.pcbltools.ru/slack-export/messages/@eustinov',
      required: false,
      avatarURL: eustinov,
      title: 'Евгений Устинов',
      subtitle: 'Дизайнер',
      badge: { children: 'eseustinov@xyz.ru', appearance: 'secondary-solid', withBorder: true },
    },
    {
      id: 'designer-required',
      required: true,
      title: 'Дизайнер',
      badge: { children: 'Есть потребность', appearance: 'primary-transparent', withBorder: true },
    },
  ],
];

// arrrrrrows layout

const LINE_STYLE: RelationType['style'] = {
  endShape: {
    arrow: {
      arrowLength: 5,
      arrowThickness: 5,
    },
  },
};

export const layoutGenerators: Record<string, (breakpoint: Breakpoints) => Pick<CardProps, 'anchors'>> = {
  'team-manager': (bp) => {
    if (bp === 'desktop2K') {
      return {
        anchors: [
          {
            position: 'right-edge',
            relations: [
              {
                targetId: 'product-owner-left-edge',
                sourceAnchor: 'right',
                targetAnchor: 'left',
                style: {
                  ...LINE_STYLE,
                  endMarker: true,
                },
              },
            ],
          },
        ],
      };
    }

    return {
      anchors: [
        {
          position: 'left-edge',
          relations: [
            {
              targetId: 'team-manager-left-bottom',
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
              targetId: 'product-owner-left-top',
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
    };
  },

  'product-owner': (bp) => {
    if (bp === 'desktop2K') {
      return {
        anchors: [
          {
            position: 'left-edge',
          },
          {
            position: 'top-edge',
            relations: [
              {
                targetId: 'product-owner-top-right',
                sourceAnchor: 'top',
                targetAnchor: 'left',
                style: {
                  ...LINE_STYLE,
                  endMarker: false,
                },
              },
            ],
          },
          {
            position: 'top-right',
            relations: [
              {
                targetId: 'tech-leader-top',
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
      };
    }

    if (bp === 'desktopL') {
      return {
        anchors: [
          {
            position: 'left-edge',
          },
          {
            position: 'top-edge',
            relations: [
              {
                targetId: 'product-owner-top-right',
                sourceAnchor: 'top',
                targetAnchor: 'left',
                style: {
                  ...LINE_STYLE,
                  endMarker: false,
                },
              },
            ],
          },
          {
            position: 'left-top',
            relations: [
              {
                targetId: 'product-owner-left-edge',
                sourceAnchor: 'bottom',
                targetAnchor: 'left',
                style: {
                  ...LINE_STYLE,
                  endMarker: true,
                },
              },
            ],
          },
          {
            position: 'top-right',
            relations: [
              {
                targetId: 'tech-leader-top',
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
      };
    }

    if (bp === 'tablet' || bp === 'laptop' || bp === 'desktop') {
      return {
        anchors: [
          {
            position: 'left-edge',
          },
          {
            position: 'left-top',
            relations: [
              {
                targetId: 'product-owner-left-edge',
                sourceAnchor: 'bottom',
                targetAnchor: 'left',
                style: {
                  ...LINE_STYLE,
                  endMarker: true,
                },
              },
            ],
          },
          {
            position: 'bottom-edge',
            relations: [
              {
                targetId: 'product-owner-bottom',
                sourceAnchor: 'bottom',
                targetAnchor: 'top',
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
                targetId: 'tech-leader-top-right',
                sourceAnchor: 'left',
                targetAnchor: 'right',
                style: {
                  ...LINE_STYLE,
                  endMarker: false,
                },
              },
              {
                targetId: 'design-leader-top-left',
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
      };
    }

    return {
      anchors: [
        {
          position: 'left-edge',
        },
        {
          position: 'right-edge',
          relations: [
            {
              targetId: 'product-owner-right-bottom',
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
          position: 'left-top',
          relations: [
            {
              targetId: 'product-owner-left-edge',
              sourceAnchor: 'bottom',
              targetAnchor: 'left',
              style: {
                ...LINE_STYLE,
                endMarker: true,
              },
            },
          ],
        },
        {
          position: 'right-bottom',
          relations: [
            {
              targetId: 'tech-leader-right',
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
    };
  },

  'tech-leader': (bp) => {
    const commonAnchors: Anchors[] = [
      {
        position: 'bottom-edge',
        relations: [
          {
            targetId: 'fe-developer-ka-top-edge',
            sourceAnchor: 'bottom',
            targetAnchor: 'top',
            style: {
              ...LINE_STYLE,
              endMarker: true,
            },
          },
        ],
      },
      {
        position: 'bottom-edge-left-left-left',
        relations: [
          {
            targetId: 'fe-mobile-developer-required-top-edge-left-left-left',
            sourceAnchor: 'bottom',
            targetAnchor: 'top',
            style: {
              ...LINE_STYLE,
              endMarker: true,
            },
          },
        ],
      },
      {
        position: 'bottom-edge-left-left',
        relations: [
          {
            targetId: 'fe-developer-required-top-edge-left-left',
            sourceAnchor: 'bottom',
            targetAnchor: 'top',
            style: {
              ...LINE_STYLE,
              endMarker: true,
            },
          },
        ],
      },
      {
        position: 'bottom-edge-left',
        relations: [
          {
            targetId: 'fe-tester-ayashvili-top-edge-left',
            sourceAnchor: 'bottom',
            targetAnchor: 'top',
            style: {
              ...LINE_STYLE,
              endMarker: true,
            },
          },
        ],
      },
      {
        position: 'bottom-edge-right',
        relations: [
          {
            targetId: 'tech-leader-vz-top-edge-right',
            sourceAnchor: 'bottom',
            targetAnchor: 'top',
            style: {
              ...LINE_STYLE,
              endMarker: true,
            },
          },
        ],
      },
    ];

    if (bp === 'desktopL' || bp === 'desktop2K') {
      return {
        anchors: [
          {
            position: 'top-edge',
          },
          {
            position: 'top',
            relations: [
              {
                targetId: 'tech-leader-top-edge',
                sourceAnchor: 'middle',
                targetAnchor: 'top',
                style: {
                  ...LINE_STYLE,
                  endMarker: true,
                },
              },
              {
                targetId: 'design-leader-top-left',
                sourceAnchor: 'middle',
                targetAnchor: 'middle',
                style: {
                  ...LINE_STYLE,
                  endMarker: false,
                },
              },
            ],
          },
          ...commonAnchors,
        ],
      };
    }

    if (bp === 'tablet' || bp === 'laptop' || bp === 'desktop') {
      return {
        anchors: [
          {
            position: 'top-edge',
          },
          {
            position: 'top-right',
            relations: [
              {
                targetId: 'tech-leader-top-edge',
                sourceAnchor: 'left',
                targetAnchor: 'top',
                style: {
                  ...LINE_STYLE,
                  endMarker: true,
                },
              },
            ],
          },
          ...commonAnchors,
        ],
      };
    }

    return {
      anchors: [
        {
          position: 'right-edge',
        },
        {
          position: 'right',
          relations: [
            {
              targetId: 'tech-leader-right-edge',
              sourceAnchor: 'middle',
              targetAnchor: 'right',
              style: {
                ...LINE_STYLE,
                endMarker: true,
              },
            },
            {
              targetId: 'design-leader-right-top',
              sourceAnchor: 'middle',
              targetAnchor: 'middle',
              style: {
                ...LINE_STYLE,
                endMarker: false,
              },
            },
          ],
        },
        ...commonAnchors,
      ],
    };
  },

  'tech-leader-vz': () => ({
    anchors: [
      {
        position: 'top-edge-right',
      },
    ],
    relations: [
      // {
      //   targetId: 'fe-developer-ka',
      //   sourceAnchor: 'bottom',
      //   targetAnchor: 'top',
      //   style: {
      //     ...LINE_STYLE,
      //     endMarker: true,
      //     startMarker: true,
      //   },
      // },
    ],
  }),

  'fe-developer-ka': () => ({
    anchors: [
      {
        position: 'top-edge',
      },
    ],
  }),

  'design-leader': (bp) => {
    const commonAnchors: Anchors[] = [
      {
        position: 'bottom-edge-left',
        relations: [
          {
            targetId: 'designer-required-top-edge-left',
            sourceAnchor: 'bottom',
            targetAnchor: 'top',
            style: {
              ...LINE_STYLE,
              endMarker: true,
            },
          },
        ],
      },
      {
        position: 'bottom-edge',
        relations: [
          {
            targetId: 'designer-eu-top-edge',
            sourceAnchor: 'bottom',
            targetAnchor: 'top',
            style: {
              ...LINE_STYLE,
              endMarker: true,
            },
          },
        ],
      },
    ];

    if (bp === 'tablet' || bp === 'laptop' || bp === 'desktop' || bp === 'desktopL' || bp === 'desktop2K') {
      return {
        anchors: [
          {
            position: 'top-edge',
          },
          {
            position: 'top-left',
            relations: [
              {
                targetId: 'design-leader-top-edge',
                sourceAnchor: 'right',
                targetAnchor: 'top',
                style: {
                  ...LINE_STYLE,
                  endMarker: true,
                },
              },
            ],
          },
          ...commonAnchors,
        ],
        // relations: [
        //   {
        //     targetId: 'designer-eu',
        //     sourceAnchor: 'bottom',
        //     targetAnchor: 'top',
        //     style: {
        //       ...LINE_STYLE,
        //       endMarker: true,
        //       startMarker: true,
        //     },
        //   },
        // ],
      };
    }

    return {
      anchors: [
        {
          position: 'right-edge',
        },
        {
          position: 'right-top',
          relations: [
            {
              targetId: 'design-leader-right-edge',
              sourceAnchor: 'bottom',
              targetAnchor: 'right',
              style: {
                ...LINE_STYLE,
                endMarker: true,
              },
            },
          ],
        },
        ...commonAnchors,
      ],
    };
  },

  'designer-eu': () => ({
    anchors: [
      {
        position: 'top-edge',
      },
    ],
  }),

  'designer-required': () => ({
    anchors: [
      {
        position: 'top-edge-left',
      },
    ],
  }),

  'fe-tester-ayashvili': () => ({
    anchors: [
      {
        position: 'top-edge-left',
      },
    ],
  }),

  'fe-developer-required': () => ({
    anchors: [{ position: 'top-edge-left-left' }],
  }),

  'fe-mobile-developer-required': () => ({
    anchors: [
      {
        position: 'top-edge-left-left-left',
      },
    ],
  }),
};
