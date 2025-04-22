import React, { useState, useCallback, ChangeEvent } from 'react';
import { Story } from '@storybook/react';

import { Textarea } from '../index';
import styles from './styles.module.scss';
import { TextareaProps } from '../interfaces';
import TextareaDocs from './TextareaDocs.mdx';

const TextareaStory: Story<TextareaProps> = (props) => {
  const [value, setValue] = useState('Text');
  const handleChangeValue = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      e.preventDefault();
      setValue(e.target.value);
    },
    [setValue],
  );

  return (
    <div className={styles.wrapper}>
      <Textarea {...props} value={value} onChange={handleChangeValue} id="textarea" />
    </div>
  );
};

TextareaStory.parameters = {
  controls: { hideNoControlsWarning: true },
  docs: {
    page: TextareaDocs,
  },
};

export default TextareaStory;
