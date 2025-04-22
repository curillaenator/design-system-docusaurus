import React from 'react';
import cn from 'classnames';
import { Example, ExampleBaseProps } from '@pcbl-ui-v4/storybook-components/src/Example';
import { CodeCutter } from '@pcbl-ui-v4/storybook-components/src/CodeCutter';

import styles from './examples.module.scss';

const Component: React.FC<Omit<ExampleBaseProps, 'id'>> = ({ children, preset: Divider, ...props }) => {
  if (!Divider) return null;
  return (
    <div className={cn(styles.examples, styles.examples_variant_2inRow)}>
      <Example id="horizontal" title="Horizontal" frameClassName={styles.frame} {...props}>
        <CodeCutter id="horizontal">
          <div className={styles.block}>
            <div className={styles.content} />

            <Divider orientation="horizontal" />

            <div className={styles.content} />
          </div>
        </CodeCutter>
      </Example>

      <Example id="vertical" title="Vertical" frameClassName={styles.frame} {...props}>
        <CodeCutter id="vertical">
          <div className={cn(styles.block, styles.block_row)}>
            <div className={styles.content} />

            <Divider orientation="vertical" />

            <div className={styles.content} />
          </div>
        </CodeCutter>
      </Example>
    </div>
  );
};

export default Component;
