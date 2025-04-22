import React, { FC } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Example, ExampleBaseProps } from '@pcbl-ui-v4/storybook-components/src/Example';
import { CodeCutter } from '@pcbl-ui-v4/storybook-components/src/CodeCutter';

import { Breadcrumbs } from '../../index';

import styles from '../styles.module.scss';

const Component: FC<Omit<ExampleBaseProps, 'id'>> = ({ children, ...props }) => (
  <MemoryRouter>
    <Example id="base" frameClassName={styles.examples} {...props}>
      <CodeCutter id="base">
        <Breadcrumbs
          items={[
            {
              id: 1,
              title: 'Первая ссылка',
              href: '#',
            },
            {
              id: 2,
              title: 'Вторая ссылка',
              href: '#',
            },
            {
              id: 3,
              title: 'Третья ссылка',
              href: '#',
            },
            {
              id: 4,
              title: 'Четвертая ссылка',
              href: '#',
            },
          ]}
        />
      </CodeCutter>
    </Example>
  </MemoryRouter>
);

export default Component;
