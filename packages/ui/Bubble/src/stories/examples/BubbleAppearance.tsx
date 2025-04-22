import React, { FC } from 'react';
import cn from 'classnames';
import { Example, ExampleBaseProps } from '@pcbl-ui-v4/storybook-components/src/Example';
import { CodeCutter } from '@pcbl-ui-v4/storybook-components/src/CodeCutter';

import styles from '../docs.module.scss';

const Component: FC<Omit<ExampleBaseProps, 'id'>> = ({ children, preset: Bubble, ...props }) => {
  if (!Bubble) return null;
  return (
    <div className={cn(styles.examples, styles.examples_3inRow)}>
      <Example id="primary" title="Primary" frameClassName={styles.frame} {...props}>
        <CodeCutter id="primary">
          <Bubble size="2xl" title="Привет" subTitle="10:15" appearance="primary" />
        </CodeCutter>
      </Example>

      <Example id="dark" title="Dark" frameClassName={styles.frame} {...props}>
        <CodeCutter id="dark">
          <Bubble size="2xl" title="Привет" subTitle="10:15" appearance="dark" />
        </CodeCutter>
      </Example>

      <Example id="light" title="Light" frameClassName={cn(styles.frame, styles.frame_dark)} {...props}>
        <CodeCutter id="light">
          <Bubble size="2xl" title="Привет" subTitle="10:15" appearance="light" />
        </CodeCutter>
      </Example>
    </div>
  );
};

export default Component;
