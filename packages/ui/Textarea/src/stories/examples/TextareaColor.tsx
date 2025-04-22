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
      <Example id="textarea-appearance-light" title="Light" frameClassName={styles.exampleContent} {...props}>
        <div className={styles.componentWrapper}>
          <CodeCutter id="textarea-appearance-light">
            <Textarea
              appearance="light"
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

      <Example id="textarea-appearance-lightest" title="Lightest" frameClassName={styles.exampleContent} {...props}>
        <div className={styles.componentWrapper}>
          <CodeCutter id="textarea-appearance-lightest">
            <Textarea
              appearance="lightest"
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
