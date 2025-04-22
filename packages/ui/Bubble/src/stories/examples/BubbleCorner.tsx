import React, { FC } from 'react';
import cn from 'classnames';
import { Example, ExampleBaseProps } from '@pcbl-ui-v4/storybook-components/src/Example';
import { CodeCutter } from '@pcbl-ui-v4/storybook-components/src/CodeCutter';

import styles from '../docs.module.scss';
import { BubbleCorner } from '../../interfaces';
import { upperFirstLetter } from './helpers';

const CORNERS = ['none', 'top-right', 'bottom-right', 'bottom-left', 'top-left'];

const Component: FC<Omit<ExampleBaseProps, 'id'>> = ({ children, preset: Bubble, ...props }) => {
  if (!Bubble) return null;
  return (
    <>
      <div className={cn(styles.examples, styles.examples_2inRow)}>
        {CORNERS.slice(0, 2).map((corner) => (
          <Example key={`corner-${corner}`} id={`corner-${corner}`} title={upperFirstLetter(corner)} frameClassName={styles.frame} {...props}>
            <CodeCutter id={`corner-${corner}`}>
              {corner === 'none' ? (
                <Bubble size="2xl" appearance="primary" title="Привет" subTitle="10:15" />
              ) : (
                <Bubble size="2xl" corner={corner as BubbleCorner} appearance="primary" title="Привет" subTitle="10:15" />
              )}
            </CodeCutter>
          </Example>
        ))}
      </div>
      <div className={cn(styles.examples, styles.examples_3inRow, styles.examples_3inRowWithGap)}>
        {CORNERS.slice(2).map((corner) => (
          <Example key={`corner-${corner}`} id={`corner-${corner}`} title={upperFirstLetter(corner)} frameClassName={styles.frame} {...props}>
            <CodeCutter id={`corner-${corner}`}>
              <Bubble size="2xl" corner={corner as BubbleCorner} appearance="primary" title="Привет" subTitle="10:15" />
            </CodeCutter>
          </Example>
        ))}
      </div>
    </>
  );
};

export default Component;
