import React, { FC } from 'react';
import cn from 'classnames';
import { Example, ExampleBaseProps } from '@pcbl-ui-v4/storybook-components/src/Example';
import { CodeCutter } from '@pcbl-ui-v4/storybook-components/src/CodeCutter';

import styles from '../docs.module.scss';

const Component: FC<Omit<ExampleBaseProps, 'id'>> = ({ children, preset: Bubble, ...props }) => {
  if (!Bubble) return null;
  return (
    <div className={cn(styles.examples, styles.examples_2inRow)}>
      <Example id="solid" title="Solid" frameClassName={styles.frame} {...props}>
        <CodeCutter id="solid">
          <Bubble size="2xl" title="Привет" subTitle="10:15" variant="solid" appearance="primary" />
        </CodeCutter>
      </Example>

      <Example id="elevate" title="Elevate" frameClassName={styles.frame} {...props}>
        <CodeCutter id="elevate">
          <Bubble size="2xl" title="Привет" subTitle="10:15" variant="elevate" appearance="primary" />
        </CodeCutter>
      </Example>
    </div>
  );
};

export default Component;
