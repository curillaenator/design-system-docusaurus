import React from 'react';
import { Example, ExampleBaseProps } from '@pcbl-ui-v4/storybook-components/src/Example';
import { CodeCutter } from '@pcbl-ui-v4/storybook-components/src/CodeCutter';

import styles from './examples.module.scss';

const Component: React.FC<Omit<ExampleBaseProps, 'id'>> = ({ children, preset: Divider, ...props }) => {
  if (!Divider) return null;
  return (
    <div className={styles.examples}>
      <Example id="disabled" title="Disabled" frameClassName={styles.frame} {...props}>
        <CodeCutter id="disabled">
          <Divider disabled />
        </CodeCutter>
      </Example>
    </div>
  );
};

export default Component;
