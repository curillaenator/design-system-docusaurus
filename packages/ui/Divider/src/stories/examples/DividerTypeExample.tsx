import React from 'react';
import cn from 'classnames';
import { Example, ExampleBaseProps } from '@pcbl-ui-v4/storybook-components/src/Example';
import { CodeCutter } from '@pcbl-ui-v4/storybook-components/src/CodeCutter';

import styles from './examples.module.scss';

const Component: React.FC<Omit<ExampleBaseProps, 'id'>> = ({ children, preset: Divider, ...props }) => {
  if (!Divider) return null;
  return (
    <div className={cn(styles.examples, styles.examples_variant_3inRow)}>
      <Example id="divider-single" title="Single" frameClassName={styles.frame} {...props}>
        <CodeCutter id="divider-single">
          <Divider />
        </CodeCutter>
      </Example>

      <Example id="divider-group1" title="Group with text" frameClassName={styles.frame} {...props}>
        <CodeCutter id="divider-group1">
          <Divider text="Два" textSecondary="Текста" />
        </CodeCutter>
      </Example>

      <Example id="divider-group2" title="Group with icons" frameClassName={styles.frame} {...props}>
        <CodeCutter id="divider-group2">
          <Divider iconLeftName="brand-facebook" text="Две иконки" iconRightName="brand-discord-solid" size="xl" />
        </CodeCutter>
      </Example>

      <Example id="divider-group3" title="Group with text + right icon" frameClassName={styles.frame} {...props}>
        <CodeCutter id="divider-group3">
          <Divider text="Иконка справа" iconRightName="brand-discord-solid" size="l" />
        </CodeCutter>
      </Example>

      <Example id="divider-group4" title="Group with left icon" frameClassName={styles.frame} {...props}>
        <CodeCutter id="divider-group4">
          <Divider iconLeftName="brand-discord-solid" size="m" />
        </CodeCutter>
      </Example>

      <Example id="divider-group5" title="Group with text + left icon" frameClassName={styles.frame} {...props}>
        <CodeCutter id="divider-group5">
          <Divider iconLeftName="brand-facebook" text="Иконка слева" size="s" />
        </CodeCutter>
      </Example>
    </div>
  );
};

export default Component;
