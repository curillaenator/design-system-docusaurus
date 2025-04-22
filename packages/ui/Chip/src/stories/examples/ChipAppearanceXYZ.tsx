import React from 'react';
import cn from 'classnames';
import { Example, ExampleBaseProps } from '@pcbl-ui-v4/storybook-components/src/Example';
import { CodeCutter } from '@pcbl-ui-v4/storybook-components/src/CodeCutter';
import PlusIcon from '@kit-xyz/icon/src/assets/solid/PlusIcon';

import styles from '../styles.module.scss';

const chipProps = {
  Icon: PlusIcon,
  shape: 'circular',
  size: 'xl',
};

const Component: React.FC<Omit<ExampleBaseProps, 'id'>> = ({ children, preset: Chip, ...props }) => {
  if (!Chip) return null;
  return (
    <div className={styles.container}>
      <div className={cn(styles.examples, styles.examples_2inRow)}>
        <Example id="appearance-primary" title="Primary" frameClassName={styles.frame} {...props}>
          <CodeCutter id="appearance-primary">
            <Chip {...chipProps} appearance="primary">
              Добавлено
            </Chip>
          </CodeCutter>
        </Example>

        <Example id="appearance-secondary" title="Secondary" frameClassName={styles.frame} {...props}>
          <CodeCutter id="appearance-secondary">
            <Chip {...chipProps} appearance="secondary">
              Добавлено
            </Chip>
          </CodeCutter>
        </Example>
      </div>

      <div className={cn(styles.examples, styles.examples_4inRow)}>
        <Example id="appearance-informative" title="Informative" frameClassName={styles.frame} {...props}>
          <CodeCutter id="appearance-informative">
            <Chip {...chipProps} appearance="informative">
              Добавлено
            </Chip>
          </CodeCutter>
        </Example>

        <Example id="appearance-positive" title="Positive" frameClassName={styles.frame} {...props}>
          <CodeCutter id="appearance-positive">
            <Chip {...chipProps} appearance="positive">
              Добавлено
            </Chip>
          </CodeCutter>
        </Example>

        <Example id="appearance-attention" title="Attention" frameClassName={styles.frame} {...props}>
          <CodeCutter id="appearance-attention">
            <Chip {...chipProps} appearance="attention">
              Добавлено
            </Chip>
          </CodeCutter>
        </Example>

        <Example id="appearance-negative" title="Negative" frameClassName={styles.frame} {...props}>
          <CodeCutter id="appearance-negative">
            <Chip {...chipProps} appearance="negative">
              Добавлено
            </Chip>
          </CodeCutter>
        </Example>
      </div>

      <div className={cn(styles.examples, styles.examples_2inRow)}>
        <Example id="appearance-light" title="Light" frameClassName={cn(styles.frame, styles.frame_dark)} {...props}>
          <CodeCutter id="appearance-light">
            <Chip {...chipProps} appearance="light">
              Добавлено
            </Chip>
          </CodeCutter>
        </Example>

        <Example id="appearance-dark" title="Dark" frameClassName={styles.frame} {...props}>
          <CodeCutter id="appearance-dark">
            <Chip {...chipProps} appearance="dark">
              Добавлено
            </Chip>
          </CodeCutter>
        </Example>
      </div>
    </div>
  );
};

export default Component;
