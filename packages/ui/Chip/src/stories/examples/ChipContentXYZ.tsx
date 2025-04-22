import React from 'react';
import cn from 'classnames';
import { Example, ExampleBaseProps } from '@pcbl-ui-v4/storybook-components/src/Example';
import PlusIcon from '@kit-xyz/icon/src/assets/solid/PlusIcon';

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
    <div className={cn(styles.examples, styles.examples_2inRow)}>
      <Example id="TextOnly" title="Text Only" frameClassName={styles.frame} {...props}>
        <CodeCutter id="TextOnly">
          <Chip {...chipProps}>Добавлено</Chip>
        </CodeCutter>
      </Example>

      <Example id="IconOnly" title="Icon Only" frameClassName={styles.frame} {...props}>
        <CodeCutter id="IconOnly">
          <Chip {...chipProps} Icon={PlusIcon} />
        </CodeCutter>
      </Example>

      <Example id="IconText" title="Icon + Text" frameClassName={styles.frame} {...props}>
        <CodeCutter id="IconText">
          <Chip {...chipProps} Icon={PlusIcon}>
            Добавлено
          </Chip>
        </CodeCutter>
      </Example>

      <Example id="FullContent" title="Full Content" frameClassName={styles.frame} {...props}>
        <CodeCutter id="FullContent">
          <Chip {...chipProps} textSecondary="Text" Icon={PlusIcon}>
            Добавлено
          </Chip>
        </CodeCutter>
      </Example>
    </div>
  );
};

export default Component;
