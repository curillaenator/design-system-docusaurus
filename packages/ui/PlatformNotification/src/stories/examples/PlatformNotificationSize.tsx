import React, { FC } from 'react';
import { Example, ExampleBaseProps } from '@pcbl-ui-v4/storybook-components/src/Example';
import { CodeCutter } from '@pcbl-ui-v4/storybook-components/src/CodeCutter';
import cn from 'classnames';

import styles from '../styles.module.scss';

const Component: FC<Omit<ExampleBaseProps, 'id'>> = ({ children, preset: PlatformNotification, ...props }) => {
  if (!PlatformNotification) return null;

  return (
    <>
      <div className={cn(styles.examples)}>
        <Example id="Size default" title="default" {...props} frameClassName={styles.frame}>
          <CodeCutter id="Size default">
            <PlatformNotification
              size="default"
              actions={[
                {
                  key: 1,
                  appearance: 'primary',
                  children: 'Обновить',
                },
                {
                  key: 2,
                  appearance: 'secondary',
                  children: 'Перегрузить',
                },
              ]}
              title="Ваш браузер устарел"
              description="Чтобы платформа работала корректно, рекомендуем вам обновить"
              closeButton
            />
          </CodeCutter>
        </Example>
        <Example id="Size compact" title="compact" {...props} frameClassName={styles.frame}>
          <CodeCutter id="Size compact">
            <PlatformNotification
              size="compact"
              actions={[
                {
                  key: 1,
                  appearance: 'primary',
                  children: 'Обновить',
                },
                {
                  key: 2,
                  appearance: 'secondary',
                  children: 'Перегрузить',
                },
              ]}
              title="Ваш браузер устарел"
              description="Чтобы платформа работала корректно, рекомендуем вам обновить"
              closeButton
            />
          </CodeCutter>
        </Example>
      </div>
    </>
  );
};

export default Component;
