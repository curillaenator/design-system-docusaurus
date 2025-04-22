import React from 'react';
import cn from 'classnames';
import { Example, ExampleBaseProps } from '@pcbl-ui-v4/storybook-components/src/Example';
import { CodeCutter } from '@pcbl-ui-v4/storybook-components/src/CodeCutter';

import styles from './examples.module.scss';

const Component: React.FC<Omit<ExampleBaseProps, 'id'>> = ({ children, preset: Divider, ...props }) => {
  if (!Divider) return null;
  return (
    <div className={cn(styles.examples, styles.examples_variant_2inRow)}>
      <Example id="rounded" title="Rounded" frameClassName={styles.frame} {...props}>
        <CodeCutter id="rounded">
          <Divider />
        </CodeCutter>
      </Example>

      <Example id="cornered" title="Cornered" frameClassName={styles.frame} {...props}>
        <CodeCutter id="cornered">
          <Divider shape="cornered" />
        </CodeCutter>
      </Example>
    </div>
  );
};

export default Component;
