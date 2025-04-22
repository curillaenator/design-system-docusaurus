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
    <div className={styles.examplesContainer_3col}>
      <Example id="textarea-size-2xl" title="2xl" frameClassName={styles.exampleContent} {...props}>
        <div className={styles.componentWrapper}>
          <CodeCutter id="textarea-size-2xl">
            <Textarea
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

      <Example id="textarea-size-xl" title="xl" frameClassName={styles.exampleContent} {...props}>
        <div className={styles.componentWrapper}>
          <CodeCutter id="textarea-size-xl">
            <Textarea
              size="xl"
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

      <Example id="textarea-size-l" title="l" frameClassName={styles.exampleContent} {...props}>
        <div className={styles.componentWrapper}>
          <CodeCutter id="textarea-size-l">
            <Textarea
              size="l"
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

      <Example id="textarea-size-m" title="m" frameClassName={styles.exampleContent} {...props}>
        <div className={styles.componentWrapper}>
          <CodeCutter id="textarea-size-m">
            <Textarea
              size="m"
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

      <Example id="textarea-size-s" title="s" frameClassName={styles.exampleContent} {...props}>
        <div className={styles.componentWrapper}>
          <CodeCutter id="textarea-size-s">
            <Textarea
              size="s"
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

      <Example id="textarea-size-xs" title="xs" frameClassName={styles.exampleContent} {...props}>
        <div className={styles.componentWrapper}>
          <CodeCutter id="textarea-size-xs">
            <Textarea
              size="xs"
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
