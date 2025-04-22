import React, { FC } from 'react';
import cn from 'classnames';
import { useEditor, EditorContext, EditorContent } from '@tiptap/react';

import { getExtensions } from './extensions';
import Toolbar from './components/Toolbar';

import { parseJSONWithoutError } from './utils';
import type { EditorContainerProps } from './intefaces';

import styles from './Editor.module.scss';
import 'highlight.js/styles/github.css';

export const Wysiwyg: FC<EditorContainerProps> = (props) => {
  const {
    initialValue,
    onChange = () => {},
    editable,
    toolbarClassName,
    toolbarPlacement = 'top',
    ...presenterProps
  } = props;

  const { disabled, dataTestId, maxHeight, className, placeholder } = presenterProps;

  const editor = useEditor(
    {
      editable,

      extensions: getExtensions({ placeholder }),

      content: parseJSONWithoutError(initialValue),

      onUpdate: (v) => {
        onChange({
          value: v.editor.getJSON(),

          // когда редактор пуст и пользователь сразу создает элементы документа
          // синтаксисом (например список через ввод символа * + space ). В момент преобразования вводимых символов в
          // элементы доукумента текстовый контент документа исчезает, но контент не пуст
          isSemiEmpty: !!v.editor
            .getJSON()
            .content?.map((el) => el.type as string)
            .filter((elType) => !!elType ?? elType !== 'paragraph').length,

          hasText: !!v.editor.getText().trim().length,

          isEditable: !!editable,
        });
      },
    },
    [editable, initialValue, onChange],
  );

  return (
    <EditorContext.Provider value={{ editor }}>
      <div
        className={cn(styles.editor, styles._theme_concept, className, {
          [styles._disabled]: disabled,
          [styles.editor_toolbarTop]: toolbarPlacement === 'top',
        })}
        data-testid={dataTestId}
      >
        <div style={{ maxHeight }} className={styles.scrollbarContainer}>
          <EditorContent
            placeholder={placeholder}
            editor={editor}
            className={styles.content}
            // onClick={() => editor?.commands.focus()}
          />
        </div>

        {editable && <Toolbar placement={toolbarPlacement} disabled={disabled} className={cn(toolbarClassName)} />}
      </div>
    </EditorContext.Provider>
  );
};
