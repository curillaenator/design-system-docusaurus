import React from 'react';
import cn from 'classnames';
import { Example, ExampleBaseProps } from '@pcbl-ui-v4/storybook-components/src/Example';
import { CodeCutter } from '@pcbl-ui-v4/storybook-components/src/CodeCutter';
import PlusIcon from '@kit-xyz/icon/src/assets/solid/PlusIcon';

import styles from '../styles.module.scss';

const chipProps = {
  iconName: PlusIcon,
  shape: 'circular',
  appearance: 'dark',
  size: 'xl',
};

const Component: React.FC<Omit<ExampleBaseProps, 'id'>> = ({ children, preset: Chip, ...props }) => {
  if (!Chip) return null;
  return (
    <div className={cn(styles.examples, styles.examples_4inRow)}>
      <Example id="variant-elevate" title="elevate" frameClassName={styles.frame} {...props}>
        <CodeCutter id="variant-elevate">
          <Chip {...chipProps} variant="elevate">
            Добавлено
          </Chip>
        </CodeCutter>
      </Example>

      <Example id="variant-solid" title="solid" frameClassName={styles.frame} {...props}>
        <CodeCutter id="variant-solid">
          <Chip {...chipProps} variant="solid">
            Добавлено
          </Chip>
        </CodeCutter>
      </Example>

      <Example id="variant-ghost" title="ghost" frameClassName={styles.frame} {...props}>
        <CodeCutter id="variant-ghost">
          <Chip {...chipProps} variant="ghost">
            Добавлено
          </Chip>
        </CodeCutter>
      </Example>

      <Example id="variant-ghost-outline" title="ghost-outline" frameClassName={styles.frame} {...props}>
        <CodeCutter id="variant-ghost-outline">
          <Chip {...chipProps} variant="ghost-outline">
            Добавлено
          </Chip>
        </CodeCutter>
      </Example>
    </div>
  );
};

export default Component;
