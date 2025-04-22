import React, { FC, useCallback } from 'react';

import { Paper } from '@kit-xyz/paper';
import { Wysiwyg, type EditorPresenterProps, type EditorChangeEvent } from '@kit-xyz/wysiwyg';

import { useViewportContext } from '@site/src/components/DocViewport';

import { MOCK_CONTENT } from './constants';

import styles from '@site/src/components/Card/display.module.scss';
import './reset.scss';

// @ts-expect-error check types
export const WysiwygWrapper: FC<Pick<EditorPresenterProps, 'toolbarPlacement' | 'maxHeight'>> = (props) => {
  const { toolbarPlacement = 'top', maxHeight } = props;
  const { colorMode } = useViewportContext();

  const onChange = useCallback((editorChangeEvent: EditorChangeEvent) => {
    console.table(editorChangeEvent);
  }, []);

  return (
    <Paper
      colorMode={colorMode}
      fullwidth
      appearance='solid-alt'
      borderRadius='none'
      padding='none'
      className={styles.paper}
    >
      <Wysiwyg
        maxHeight={maxHeight}
        initialValue={MOCK_CONTENT}
        editable
        onChange={onChange}
        toolbarPlacement={toolbarPlacement}
        placeholder='Начните писать что-нибудь...'
      />
    </Paper>
  );
};
