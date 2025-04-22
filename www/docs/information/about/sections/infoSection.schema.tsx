import React, { ReactNode } from 'react';
import { Button } from '@kit-xyz/button';

import StorybookIcon from '../assets/icons/StorybookIcon';
import ConfluenceIcon from '../assets/icons/ConfluenceIcon';
import FigmaIcon from '../assets/icons/FigmaIcon';
import BitbucketIcon from '../assets/icons/BitbucketIcon';
import documentation from '../assets/infosections/documentation.jpg';
import beginning from '../assets/infosections/beginning.jpg';
import developmentSources from '../assets/infosections/developmentSources.png';
import dummy from '../assets/infosections/dummy.jpg';

type Appearances = 'neutral-300-200' | 'neutral-700-600' | 'neutral-700-accent-1-700';

export interface InfoSectionProps {
  id: string;
  title: string;
  imageURL: string;
  description?: string;
  flip?: boolean;
  appearance?: Appearances;
  button?: ReactNode;
}

export const INFO_SHEMAS: Record<string, InfoSectionProps> = {
  'info-section-documentation': {
    id: 'info-section-documentation',
    title: 'Документация',
    imageURL: documentation,
    description:
      'Актуальное описание, дизайн, ĸод и настройĸи стилей и ĸомпонентов размещены на специальном web–ресурсе для документации',
    button: (
      <Button appearance='tertiary-solid' IconLeft={StorybookIcon}>
        Storybook Kit
      </Button>
    ),
  },

  'info-section-beginning': {
    id: 'info-section-beginning',
    flip: true,
    title: 'Начало работы',
    appearance: 'neutral-700-accent-1-700',
    imageURL: beginning,
    button: (
      <Button appearance='tertiary-solid' IconLeft={ConfluenceIcon}>
        Confluence Page
      </Button>
    ),
    description:
      'Пошаговая инструкция по началу работы с дизайн–системой как для создания минимальных версий и концептов, так и для масштабирования крупных проектов',
  },

  'info-section-design-sources': {
    id: 'info-section-design-sources',
    title: 'Дизайн–ресурсы',
    appearance: 'neutral-700-600',
    imageURL: dummy,
    description:
      'Дизайн стилей, компонент и утилит доступных для использования опубликован в виде библиотек в графическом редакторе',
    button: (
      <Button appearance='tertiary-solid' IconLeft={FigmaIcon}>
        Figma Team
      </Button>
    ),
  },

  'info-section-development-sources': {
    flip: true,
    id: 'info-section-development-sources',
    title: 'Ресурсы для разработки',
    appearance: 'neutral-300-200',
    imageURL: developmentSources,
    description:
      'Компоненты и стили поставляются в виде библиотек и пакетов, содержат всю исчерпывающую информацию и доступны для подключения и использования «из коробки»',
    button: (
      <Button appearance='tertiary-solid' IconLeft={BitbucketIcon}>
        Bitbucket Repository
      </Button>
    ),
  },
};
