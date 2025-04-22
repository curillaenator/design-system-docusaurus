import React from 'react';
import cn from 'classnames';
import { Example, ExampleBaseProps } from '@pcbl-ui-v4/storybook-components/src/Example';
import { CodeCutter } from '@pcbl-ui-v4/storybook-components/src/CodeCutter';

import styles from './examples.module.scss';

const Component: React.FC<Omit<ExampleBaseProps, 'id'>> = ({ children, preset: Divider, ...props }) => {
  if (!Divider) return null;
  return (
    <>
      <div className={cn(styles.examples, styles.examples_variant_2inRow, styles.mb32)}>
        <Example id="divider-primary" title="Primary" frameClassName={styles.frame} {...props}>
          <CodeCutter id="divider-primary">
            <Divider appearance="primary" />
          </CodeCutter>
        </Example>

        <Example id="divider-secondary" title="Secondary" frameClassName={styles.frame} {...props}>
          <CodeCutter id="divider-secondary">
            <Divider appearance="secondary" />
          </CodeCutter>
        </Example>

        <Example id="divider-dark" title="Dark" frameClassName={styles.frame} {...props}>
          <CodeCutter id="divider-dark">
            <Divider appearance="dark" />
          </CodeCutter>
        </Example>

        <Example id="divider-neutral" title="Neutral" frameClassName={styles.frame} {...props}>
          <CodeCutter id="divider-neutral">
            <Divider appearance="neutral" />
          </CodeCutter>
        </Example>
      </div>

      <div className={cn(styles.examples, styles.examples_variant_4inRow)}>
        <Example id="divider-informative" title="Informative" frameClassName={styles.frame} {...props}>
          <CodeCutter id="divider-informative">
            <Divider appearance="informative" />
          </CodeCutter>
        </Example>

        <Example id="divider-positive" title="Positive" frameClassName={styles.frame} {...props}>
          <CodeCutter id="divider-positive">
            <Divider appearance="positive" />
          </CodeCutter>
        </Example>

        <Example id="divider-attention" title="Attention" frameClassName={styles.frame} {...props}>
          <CodeCutter id="divider-attention">
            <Divider appearance="attention" />
          </CodeCutter>
        </Example>

        <Example id="divider-negative" title="Negative" frameClassName={styles.frame} {...props}>
          <CodeCutter id="divider-negative">
            <Divider appearance="negative" />
          </CodeCutter>
        </Example>
      </div>
    </>
  );
};

export default Component;
