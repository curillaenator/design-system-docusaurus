import React from 'react';
import { Example, ExampleBaseProps } from '@pcbl-ui-v4/storybook-components/src/Example';
import { CodeCutter } from '@pcbl-ui-v4/storybook-components/src/CodeCutter';

import styles from '../styles.module.scss';

const chipProps = {
  shape: 'circular',
  appearance: 'dark',
  size: 'xl',
};

const Component: React.FC<Omit<ExampleBaseProps, 'id'>> = ({ children, preset: Chip, ...props }) => {
  if (!Chip) return null;
  return (
    <div className={styles.examples}>
      <Example id="base-chip" title="Base" frameClassName={styles.frame} {...props}>
        <CodeCutter id="base-chip">
          <Chip {...chipProps}>Добавлено</Chip>
        </CodeCutter>
      </Example>
    </div>
  );
};

export default Component;
