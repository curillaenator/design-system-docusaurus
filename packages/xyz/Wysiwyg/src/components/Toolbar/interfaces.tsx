import type { Editor as CoreEditor } from '@tiptap/core';
import { Transaction } from '@tiptap/pm/state';

export type TiptapNodeName = 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6' | 'UL' | 'OL' | 'P' | 'BLOCKQUOTE' | 'CODEBLOCK';

export type HeadingCommand = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type ParagraphCommand = 'paragraph' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'bulletList' | 'orderedList';
export type EditorCommand = 'blockquote' | 'codeBlock' | 'hr';
export type TextAlignCommand = 'left' | 'center' | 'right' | 'justify';
export type TextFormatCommand = 'code' | 'bold' | 'italic' | 'strike' | 'underline';

export interface ToolbarProps {
  disabled?: boolean;
  className?: string;
  placement?: 'top' | 'bottom';
}

export interface UpdatePayload {
  editor: CoreEditor;
  transaction: Transaction;
}

export type ToolbarCompositionTypeName = 'full' | 'compact' | 'minimal';
