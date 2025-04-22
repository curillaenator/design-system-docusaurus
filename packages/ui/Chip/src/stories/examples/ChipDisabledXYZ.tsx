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
    <div className={cn(styles.examples, styles.examples_3inRow)}>
      <Example id="disabled-solid" title="Disabled-solid" frameClassName={styles.frame} {...props}>
        <CodeCutter id="disabled-solid">
          <Chip {...chipProps} variant="solid" disabled>
            Добавлено
          </Chip>
        </CodeCutter>
      </Example>

      <Example id="disabled-ghost" title="Disabled-ghost" frameClassName={styles.frame} {...props}>
        <CodeCutter id="disabled-ghost">
          <Chip {...chipProps} variant="ghost" disabled>
            Добавлено
          </Chip>
        </CodeCutter>
      </Example>

      <Example id="disabled-ghost-outline" title="Disabled-ghost-outline" frameClassName={styles.frame} {...props}>
        <CodeCutter id="disabled-ghost-outline">
          <Chip {...chipProps} variant="ghost-outline" disabled>
            Добавлено
          </Chip>
        </CodeCutter>
      </Example>
    </div>
  );
};

export default Component;
