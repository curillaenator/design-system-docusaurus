import React, { FC } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Example, ExampleBaseProps } from '@pcbl-ui-v4/storybook-components/src/Example';
import { CodeCutter } from '@pcbl-ui-v4/storybook-components/src/CodeCutter';

import { Breadcrumbs } from '../../index';

import styles from '../styles.module.scss';
import { SolidHome } from '@kit-xyz/icon';

const Component: FC<Omit<ExampleBaseProps, 'id'>> = ({ children, ...props }) => {
  return (
    <MemoryRouter>
      <Example id="item" frameClassName={styles.examples} {...props}>
        <CodeCutter id="item">
          <Breadcrumbs
            items={[
              {
                id: 1,
                title: 'Нажми меня',
                href: '#',
                Icon: SolidHome,
                onClick: () => alert('Тык'),
              },
              {
                id: 2,
                title: 'Вторая ссылка',
                href: '#',
                Icon: SolidHome,
              },
              {
                id: 3,
                title: 'Обработчик по клику',
                href: '#',
                onClick: () => alert('еще один тык'),
              },
              {
                id: 4,
                title: 'Четвертая ссылка',
                href: '#',
                Icon: SolidHome,
              },
            ]}
          />
        </CodeCutter>
      </Example>
    </MemoryRouter>
  );
};

export default Component;
