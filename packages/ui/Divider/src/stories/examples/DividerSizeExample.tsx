import React from 'react';
import cn from 'classnames';
import { Example, ExampleBaseProps } from '@pcbl-ui-v4/storybook-components/src/Example';
import { CodeCutter } from '@pcbl-ui-v4/storybook-components/src/CodeCutter';

import styles from './examples.module.scss';

const Component: React.FC<Omit<ExampleBaseProps, 'id'>> = ({ children, preset: Divider, ...props }) => {
  if (!Divider) return null;
  return (
    <div className={cn(styles.examples, styles.examples_variant_6inRow)}>
      <Example id="size-2xl" title="2XL" description="Border: 2px" frameClassName={styles.frame} {...props}>
        <CodeCutter id="size-2xl">
          <Divider size="2xl" />
        </CodeCutter>
      </Example>

      <Example id="size-xl" title="XL" description="Border: 2px" frameClassName={styles.frame} {...props}>
        <CodeCutter id="size-xl">
          <Divider size="xl" />
        </CodeCutter>
      </Example>

      <Example id="size-l" title="L" description="Border: 2px" frameClassName={styles.frame} {...props}>
        <CodeCutter id="size-l">
          <Divider size="l" />
        </CodeCutter>
      </Example>

      <Example id="size-m" title="M" description="Border: 1px" frameClassName={styles.frame} {...props}>
        <CodeCutter id="size-m">
          <Divider size="m" />
        </CodeCutter>
      </Example>

      <Example id="size-s" title="S" description="Border: 1px" frameClassName={styles.frame} {...props}>
        <CodeCutter id="size-s">
          <Divider size="s" />
        </CodeCutter>
      </Example>

      <Example id="size-xs" title="XS" description="Border: 1px" frameClassName={styles.frame} {...props}>
        <CodeCutter id="size-xs">
          <Divider size="xs" />
        </CodeCutter>
      </Example>
    </div>
  );
};

export default Component;
