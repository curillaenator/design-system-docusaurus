import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Link from '@tiptap/extension-link';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import Placeholder from '@tiptap/extension-placeholder';
import { lowlight } from 'lowlight';

import css from 'highlight.js/lib/languages/css';
import js from 'highlight.js/lib/languages/javascript';
import ts from 'highlight.js/lib/languages/typescript';
import html from 'highlight.js/lib/languages/xml';

import type { EditorOptions, AnyExtension } from '@tiptap/react';

lowlight.registerLanguage('html', html);
lowlight.registerLanguage('css', css);
lowlight.registerLanguage('js', js);
lowlight.registerLanguage('ts', ts);

interface ExtensionsConfig {
  placeholder?: string;
  openLinkOnClick?: boolean;
}

type getExtensionsType = (config: ExtensionsConfig) => EditorOptions['extensions'];

export const getExtensions: getExtensionsType = (cfg) => [
  StarterKit.configure({
    code: {
      HTMLAttributes: { 'data-set': 'inline' },
    },

    // выключает дефолтный код-блок из StarterKit, вместо него CodeBlockLowlight ниже
    codeBlock: false,
  }) as AnyExtension,

  Underline,

  TextAlign.configure({
    types: ['heading', 'paragraph'],
    defaultAlignment: 'justify',
  }),

  CodeBlockLowlight.configure({
    lowlight,
    HTMLAttributes: { 'data-set': 'highlighted-code' },
  }),

  Placeholder.configure({
    placeholder: cfg.placeholder,
  }),

  Link.configure({
    openOnClick: cfg.openLinkOnClick,
    autolink: true,
  }),
];
