import React, { FC } from 'react';
import cn from 'classnames';
import { Example, ExampleBaseProps } from '@pcbl-ui-v4/storybook-components/src/Example';
import { CodeCutter } from '@pcbl-ui-v4/storybook-components/src/CodeCutter';

import styles from '../docs.module.scss';

const Component: FC<Omit<ExampleBaseProps, 'id'>> = ({ children, preset: Bubble, ...props }) => {
  if (!Bubble) return null;
  return (
    <div className={cn(styles.examples, styles.examples_2inRow)}>
      <Example id="rounded" title="Rounded" frameClassName={styles.frame} {...props}>
        <CodeCutter id="rounded">
          <Bubble size="2xl" title="Привет" subTitle="10:15" shape="rounded" appearance="primary" />
        </CodeCutter>
      </Example>

      <Example id="circular" title="Circular" frameClassName={styles.frame} {...props}>
        <CodeCutter id="circular">
          <Bubble size="2xl" title="Привет" subTitle="10:15" shape="circular" appearance="primary" />
        </CodeCutter>
      </Example>
    </div>
  );
};

export default Component;
