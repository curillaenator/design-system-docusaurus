import React, { ChangeEvent, useState } from 'react';

import { Example, ExampleBaseProps } from '@pcbl-ui-v4/storybook-components/src/Example';
import { CodeCutter } from '@pcbl-ui-v4/storybook-components/src/CodeCutter';
import styles from '../styles.module.scss';

const Component: React.FC<Omit<ExampleBaseProps, 'id'>> = ({ children, preset: Textarea, ...props }) => {
  const [value, setValue] = useState('Text');
  const handleChangeValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  if (!Textarea) return null;

  return (
    <div className={styles.examplesContainer_2col}>
      <Example id="textarea-shape-rounded" title="Rounded" frameClassName={styles.exampleContent} {...props}>
        <div className={styles.componentWrapper}>
          <CodeCutter id="textarea-shape-rounded">
            <Textarea
              shape="rounded"
              size="2xl"
              value={value}
              onChange={handleChangeValue}
              labelLeft="Text"
              iconLeft="arrow-clockwise-solid"
              labelRight="Text"
              iconRight="arrow-clockwise-solid"
              captionLeft="Text"
              iconMetaLeft="arrow-clockwise-solid"
              captionRight="Text"
              iconMetaRight="arrow-clockwise-solid"
            />
          </CodeCutter>
        </div>
      </Example>

      <Example id="textarea-shape-circular" title="Circular" frameClassName={styles.exampleContent} {...props}>
        <div className={styles.componentWrapper}>
          <CodeCutter id="textarea-shape-circular">
            <Textarea
              shape="circular"
              size="2xl"
              value={value}
              onChange={handleChangeValue}
              labelLeft="Text"
              iconLeft="arrow-clockwise-solid"
              labelRight="Text"
              iconRight="arrow-clockwise-solid"
              captionLeft="Text"
              iconMetaLeft="arrow-clockwise-solid"
              captionRight="Text"
              iconMetaRight="arrow-clockwise-solid"
            />
          </CodeCutter>
        </div>
      </Example>
    </div>
  );
};

export default Component;
