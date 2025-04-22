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
      <Example id="textarea-variant-elevated" title="Elevated" frameClassName={styles.exampleContent} {...props}>
        <div className={styles.componentWrapper}>
          <CodeCutter id="textarea-variant-elevated">
            <Textarea
              variant="elevate"
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

      <Example id="textarea-variant-solid" title="Solid" frameClassName={styles.exampleContent} {...props}>
        <div className={styles.componentWrapper}>
          <CodeCutter id="textarea-variant-solid">
            <Textarea
              variant="solid"
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

      <Example id="textarea-variant-solid-outline" title="Solid Outline" frameClassName={styles.exampleContent} {...props}>
        <div className={styles.componentWrapper}>
          <CodeCutter id="textarea-variant-solid-outline">
            <Textarea
              variant="solid-outline"
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

      <Example id="textarea-variant-ghost-outline" title="Ghost Outline" frameClassName={styles.exampleContent} {...props}>
        <div className={styles.componentWrapper}>
          <CodeCutter id="textarea-variant-ghost-outline">
            <Textarea
              variant="ghost-outline"
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
