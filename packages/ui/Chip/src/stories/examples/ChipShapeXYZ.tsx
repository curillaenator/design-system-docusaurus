import React from 'react';
import cn from 'classnames';
import { Example, ExampleBaseProps } from '@pcbl-ui-v4/storybook-components/src/Example';
import { CodeCutter } from '@pcbl-ui-v4/storybook-components/src/CodeCutter';
import PlusIcon from '@kit-xyz/icon/src/assets/solid/PlusIcon';

import styles from '../styles.module.scss';

const chipProps = {
  iconName: PlusIcon,
  size: '2xl',
  appearance: 'dark',
};

const Component: React.FC<Omit<ExampleBaseProps, 'id'>> = ({ children, preset: Chip, ...props }) => {
  if (!Chip) return null;
  return (
    <div className={cn(styles.examples, styles.examples_2inRow)}>
      <Example id="shape-rounded" title="Rounded" frameClassName={styles.frame} {...props}>
        <CodeCutter id="shape-rounded">
          <Chip {...chipProps} shape="rounded">
            Добавлено
          </Chip>
        </CodeCutter>
      </Example>

      <Example id="shape-circular" title="Circular" frameClassName={styles.frame} {...props}>
        <CodeCutter id="shape-circular">
          <Chip {...chipProps} shape="circular">
            Добавлено
          </Chip>
        </CodeCutter>
      </Example>
    </div>
  );
};

export default Component;
