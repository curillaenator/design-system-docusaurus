import React from 'react';
import { Example, ExampleBaseProps } from '@pcbl-ui-v4/storybook-components';
import { CodeCutter } from '@pcbl-ui-v4/storybook-components';

import { COMPONENT_NAME } from '../../index';
import styles from '../story.module.scss';

const Component: React.FC<Omit<ExampleBaseProps, 'id'>> = ({ children, ...props }) => {
  return (
    <div className={styles.examples}>
      <Example id="base" title="Base" frameClassName={styles.frame} {...props}>
        <CodeCutter id="base">
          <COMPONENT_NAME />
        </CodeCutter>
      </Example>
    </div>
  );
};

export default Component;
