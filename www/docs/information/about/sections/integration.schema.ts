import type { Anchors, RelationType } from '@kit-xyz/arrows';

export interface StepProps {
  id: string;
  title?: string;
  appearance?: 'default' | 'primary' | 'disabled' | 'dummy';
  minWidth?: number;
  anchors?: Anchors[];
  index?: number;
  windowWidth?: number;
  onRender?: (id: string, index: number, ref: HTMLDivElement) => void;
}

export const CONTAINER_ID = 'integration-in-process-schema';

export const LINE_STYLE: RelationType['style'] = {
  endShape: {
    arrow: {
      arrowLength: 5,
      arrowThickness: 5,
    },
  },
};

export const INTEGRATION_SCHEMA: StepProps[] = [
  {
    id: 'begining-stage',
    title: 'Начало',
    appearance: 'disabled',
  },
  {
    id: 'infrastructure',
    title: 'Инфраструктура',
  },
  {
    id: 'vision-vision',
    title: 'Видение',
    minWidth: 7,
  },
  {
    id: 'goals-goals',
    title: 'Цели',
    appearance: 'disabled',
  },
  {
    id: 'ideas-hypothesis',
    title: 'Гипотезы и идеи',
  },
  {
    id: 'user-pathes',
    title: 'Пути пользователей',
    appearance: 'disabled',
  },
  {
    id: 'project-roadmap',
    title: 'Дорожная карта проекта',
  },
  {
    id: 'task-detalisation',
    title: 'Детализация задач',
  },
  {
    id: 'projects-examples',
    title: 'Примеры проектов',
    appearance: 'disabled',
  },
  {
    id: 'text-copywriting',
    title: 'Написание текстов и корректура',
    appearance: 'disabled',
  },
  {
    id: 'branding-branding',
    title: 'Брендинг',
    appearance: 'disabled',
  },
  {
    id: 'screens-sketches',
    title: 'Эскизы экранов',
  },
  {
    id: 'site-map-creation',
    title: 'Карта сайта',
  },
  {
    id: 'components-design',
    title: 'Дизайн компонентов',
    appearance: 'primary',
  },
  {
    id: 'screens-design',
    title: 'Дизайн экранов',
  },
  {
    id: 'adaptive-prototype-design',
    title: 'Адаптивный дизайн–прототип',
  },
  {
    id: 'combined-data',
    title: 'Данные',
  },
  {
    id: 'development-research',
    title: 'Исследования',
    minWidth: 8,
  },
  {
    id: 'components-development',
    title: 'Разработка компонентов',
    appearance: 'primary',
  },
  {
    id: 'services-review',
    title: 'Сервисы',
  },
  {
    id: 'services-development',
    title: 'Разработка',
  },
  {
    id: 'testing-stage',
    title: 'Тестирование',
  },
  {
    id: 'publishing-stage',
    title: 'Публикация',
  },
];

export type StepPositions = Record<number, { id: string; x: number }>;

interface GetAnchoredStepsProps {
  steps: StepProps[];
  positions: StepPositions;
  sectionWidth?: number;
}

export const getMinWidthMultiplier = (w: number) => {
  if (w >= 1280) return 64;
  if (w >= 997) return 56;
  return 32;
};

export const getAnchoredSteps = (props: GetAnchoredStepsProps): StepProps[] => {
  const {
    steps,
    positions,
    // sectionWidth
  } = props;

  const anchoredSteps: StepProps[] = [];

  const startRowElPosX = Object.values(positions).reduce((acc, { x }, i) => {
    if (i === 0) return x;
    if (x > acc) return acc;
    return x;
  }, 0);

  steps.forEach((step, i) => {
    const thisX = positions[i]?.x;
    const prevX = positions[i - 1]?.x;
    const nextX = positions[i + 1]?.x;

    const isFirstEl = i === 0;
    const isLastEl = i === steps.length - 1;

    const isEndRowEl = !isLastEl && i > 0 && thisX > prevX && thisX > nextX;
    const isStartRowEl = !isLastEl && i > 0 && thisX <= prevX && thisX < nextX;
    const isSingleInRowEl = thisX === nextX;
    const isStartRowLastEl = isLastEl && thisX === startRowElPosX;
    const isChainLink = !isLastEl && i > 0 && thisX > prevX && thisX < nextX;

    if (isFirstEl) {
      anchoredSteps.push({
        ...step,
        anchors: [
          {
            position: 'right-edge',
            relations: [
              {
                targetId: `${positions[i + 1].id}-left-edge`,
                sourceAnchor: 'right',
                targetAnchor: 'left',
                style: {
                  ...LINE_STYLE,
                },
              },
            ],
          },
        ],
      });

      return;
    }

    if (isSingleInRowEl) {
      anchoredSteps.push({
        ...step,
        anchors: [
          {
            position: 'tl-edge-x-1',
          },
          {
            position: 'tl-x-2',
            relations: [
              {
                targetId: `${positions[i].id}-tl-edge-x-1`,
                sourceAnchor: 'left',
                targetAnchor: 'top',
                style: {
                  ...LINE_STYLE,
                },
              },
            ],
          },
          {
            position: 'br-edge-x-1',
            relations: [
              {
                targetId: `${positions[i].id}-br-x-2`,
                sourceAnchor: 'bottom',
                targetAnchor: 'right',
                style: {
                  ...LINE_STYLE,
                  endMarker: false,
                },
              },
            ],
          },
          {
            position: 'br-x-2',
            relations: [
              {
                targetId: `${positions[i + 1].id}-tl-x-2`,
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
      });

      return;
    }

    if (isEndRowEl) {
      // console.log(step.id, sectionWidth - positions[i].x);

      anchoredSteps.push({
        ...step,
        // minWidth: sectionWidth - positions[i].x,
        anchors: [
          {
            position: 'left-edge',
          },
          {
            position: 'br-edge-x-1',
            relations: [
              {
                targetId: `${positions[i].id}-br-x-2`,
                sourceAnchor: 'bottom',
                targetAnchor: 'right',
                style: {
                  ...LINE_STYLE,
                  endMarker: false,
                  startMarker: false,
                },
              },
            ],
          },
          {
            position: 'br-x-2',
            relations: [
              {
                targetId: `${positions[i + 1].id}-tl-x-2`,
                sourceAnchor: 'left',
                targetAnchor: 'right',
                style: {
                  ...LINE_STYLE,
                  endMarker: false,
                  startMarker: false,
                },
              },
            ],
          },
        ],
      });

      return;
    }

    if (isStartRowLastEl) {
      anchoredSteps.push({
        ...step,
        anchors: [
          {
            position: 'tl-edge-x-1',
            relations: [
              {
                targetId: `${positions[i].id}-tl-x-2`,
                sourceAnchor: 'top',
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
            position: 'tl-x-2',
          },
        ],
      });

      return;
    }

    if (isLastEl) {
      anchoredSteps.push({
        ...step,
        anchors: [
          {
            position: 'left-edge',
          },
        ],
      });

      return;
    }

    if (isStartRowEl) {
      anchoredSteps.push({
        ...step,
        anchors: [
          {
            position: 'right-edge',
            relations: [
              {
                targetId: `${positions[i + 1].id}-left-edge`,
                sourceAnchor: 'right',
                targetAnchor: 'left',
                style: {
                  ...LINE_STYLE,
                },
              },
            ],
          },
          {
            position: 'tl-edge-x-1',
            relations: [
              {
                targetId: `${positions[i].id}-tl-x-2`,
                sourceAnchor: 'top',
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
            position: 'tl-x-2',
          },
        ],
      });

      return;
    }

    if (isChainLink) {
      anchoredSteps.push({
        ...step,
        anchors: [
          {
            position: 'left-edge',
          },
          {
            position: 'right-edge',
            relations: [
              {
                targetId: `${positions[i + 1].id}-left-edge`,
                sourceAnchor: 'right',
                targetAnchor: 'left',
                style: {
                  ...LINE_STYLE,
                },
              },
            ],
          },
        ],
      });

      return;
    }

    anchoredSteps.push({
      ...steps[i],
      anchors: [
        {
          position: 'top-edge',
        },
      ],
    });
  });

  return anchoredSteps;
};

export const getMobileAnchoredSteps = (props: Pick<GetAnchoredStepsProps, 'steps'>) => {
  const { steps } = props;

  const anchoredSteps: StepProps[] = [];

  steps.forEach((step, i) => {
    const isFirstEl = i === 0;
    const isLastEl = i === steps.length - 1;
    const isChainEl = !isFirstEl && !isLastEl;

    if (isFirstEl) {
      anchoredSteps.push({
        ...step,
        anchors: [
          {
            position: 'bottom-edge',
            relations: [
              {
                targetId: `${steps[i + 1].id}-top-edge`,
                sourceAnchor: 'bottom',
                targetAnchor: 'top',
                style: {
                  ...LINE_STYLE,
                },
              },
            ],
          },
        ],
      });

      return;
    }

    if (isChainEl) {
      anchoredSteps.push({
        ...step,
        anchors: [
          {
            position: 'top-edge',
          },
          {
            position: 'bottom-edge',
            relations: [
              {
                targetId: `${steps[i + 1].id}-top-edge`,
                sourceAnchor: 'bottom',
                targetAnchor: 'top',
                style: {
                  ...LINE_STYLE,
                },
              },
            ],
          },
        ],
      });

      return;
    }

    anchoredSteps.push({
      ...step,
      anchors: [
        {
          position: 'top-edge',
        },
      ],
    });
  });

  return anchoredSteps;
};
