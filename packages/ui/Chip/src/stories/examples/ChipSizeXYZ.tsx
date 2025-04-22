import React from 'react';
import cn from 'classnames';
import { Example, ExampleBaseProps } from '@pcbl-ui-v4/storybook-components/src/Example';
import { CodeCutter } from '@pcbl-ui-v4/storybook-components/src/CodeCutter';
import PlusIcon from '@kit-xyz/icon/src/assets/solid/PlusIcon';

import styles from '../styles.module.scss';

const chipProps = {
  iconName: PlusIcon,
  shape: 'circular',
  appearance: 'dark',
};

const Component: React.FC<Omit<ExampleBaseProps, 'id'>> = ({ children, preset: Chip, ...props }) => {
  if (!Chip) return null;
  return (
    <div className={cn(styles.examples, styles.examples_3inRow)}>
      <Example id="size-2xl" title="2xl" frameClassName={styles.frame} {...props}>
        <CodeCutter id="size-2xl">
          <Chip {...chipProps} size="2xl">
            Добавлено
          </Chip>
        </CodeCutter>
      </Example>

      <Example id="size-xl" title="xl" frameClassName={styles.frame} {...props}>
        <CodeCutter id="size-xl">
          <Chip {...chipProps} size="xl">
            Добавлено
          </Chip>
        </CodeCutter>
      </Example>

      <Example id="size-l" title="l" frameClassName={styles.frame} {...props}>
        <CodeCutter id="size-l">
          <Chip {...chipProps} size="l">
            Добавлено
          </Chip>
        </CodeCutter>
      </Example>

      <Example id="size-m" title="m" frameClassName={styles.frame} {...props}>
        <CodeCutter id="size-m">
          <Chip {...chipProps} size="m">
            Добавлено
          </Chip>
        </CodeCutter>
      </Example>

      <Example id="size-s" title="s" frameClassName={styles.frame} {...props}>
        <CodeCutter id="size-s">
          <Chip {...chipProps} size="s">
            Добавлено
          </Chip>
        </CodeCutter>
      </Example>

      <Example id="size-xs" title="xs" frameClassName={styles.frame} {...props}>
        <CodeCutter id="size-xs">
          <Chip {...chipProps} size="xs">
            Добавлено
          </Chip>
        </CodeCutter>
      </Example>
    </div>
  );
};

export default Component;
