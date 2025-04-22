import type { JSONContent } from '@tiptap/core';

export type ToolbarSize = '32px' | '40px' | '48px';

interface EditorChangeEvent {
  value: JSONContent;
  isEditable: boolean;
  hasText: boolean;
  isSemiEmpty: boolean;
}

interface EditorPresenterProps {
  maxHeight?: number | 'auto';
  className?: string;
  placeholder?: string;
  dataTestId?: string;
  disabled?: boolean;
  toolbarClassName?: string;
  toolbarPlacement?: 'top' | 'bottom';
}

interface EditorContainerProps extends EditorPresenterProps {
  initialValue?: string;
  editable?: boolean;
  onChange?: (changeEvent: EditorChangeEvent) => void;
}

export type { EditorContainerProps, EditorPresenterProps, JSONContent as EditorJSONContent, EditorChangeEvent };
