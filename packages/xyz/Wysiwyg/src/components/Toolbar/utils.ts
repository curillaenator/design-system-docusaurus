import type { Editor } from '@tiptap/core';
import type { TiptapNodeName, ToolbarCompositionTypeName } from './interfaces';

interface TargetOptions {
  title: string;
  options?: object;
}

const TARGETS: Record<TiptapNodeName, TargetOptions> = {
  H1: { title: 'heading', options: { level: 1 } },
  H2: { title: 'heading', options: { level: 2 } },
  H3: { title: 'heading', options: { level: 3 } },
  H4: { title: 'heading', options: { level: 4 } },
  H5: { title: 'heading', options: { level: 5 } },
  H6: { title: 'heading', options: { level: 6 } },
  UL: { title: 'bulletList' },
  OL: { title: 'orderedList' },

  BLOCKQUOTE: { title: 'blockquote' },
  CODEBLOCK: { title: 'codeBlock' },

  P: { title: 'paragraph' },
};

const LIST: TiptapNodeName[] = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'UL', 'OL'];
const ADDITIONAL: TiptapNodeName[] = ['BLOCKQUOTE', 'CODEBLOCK'];

export const getTarget = (editor: Editor, composition: ToolbarCompositionTypeName): TiptapNodeName => {
  const composedTargets = composition === 'minimal' ? [...LIST, ...ADDITIONAL] : LIST;

  for (let i = 0; i < composedTargets.length; i++) {
    const key = composedTargets[i];
    const { title, options } = TARGETS[key];
    if (editor.isActive(title, options)) return key;
  }

  return 'P';
};
