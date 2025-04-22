import React, { FC } from 'react';
import cn from 'classnames';
import { Example, ExampleBaseProps } from '@pcbl-ui-v4/storybook-components/src/Example';
import { CodeCutter } from '@pcbl-ui-v4/storybook-components/src/CodeCutter';

import styles from '../docs.module.scss';

const SIZES = ['2xl', 'xl', 'l', 'm', 's', 'xs'];

const Component: FC<Omit<ExampleBaseProps, 'id'>> = ({ children, preset: Bubble, ...props }) => {
  if (!Bubble) return null;
  return (
    <div className={cn(styles.examples, styles.examples_3inRow)}>
      {SIZES.map((size) => (
        <Example key={`Size-${size}`} id={`Size ${size}`} title={size} frameClassName={styles.frame} {...props}>
          <CodeCutter id="Size 2xl">
            <Bubble size={size} appearance="primary" title="Привет" subTitle="10:15" />
          </CodeCutter>
        </Example>
      ))}
    </div>
  );
};

export default Component;
