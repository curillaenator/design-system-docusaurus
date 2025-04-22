import React from 'react';
import type { ChainedCommands } from '@tiptap/core';
import { ItemProps } from '../Dropdown';

import type {
  ParagraphCommand,
  EditorCommand,
  TextAlignCommand,
  TextFormatCommand,
  TiptapNodeName,
} from './interfaces';

import {
  IconParagraph,
  IconH2,
  IconH1,
  IconH3,
  IconH4,
  IconH5,
  IconH6,
  IconBulletedList,
  IconNumberedList,
  IconBold,
  IconItalic,
  IconStrikeThrough,
  IconUnderline,
  IconTextAlignLeft,
  IconTextAlignCenter,
  IconTextAlignJustify,
  IconTextAlignRight,
  IconTogglerBlockquote,
  IconTogglerCodeblock,
  IconTogglerInline,
  IconDivider,
} from '../../icons';

export const ITEMS: ItemProps<ParagraphCommand>[][] = [
  [
    { id: 'h1', caption: 'Заголовок 1', Icon: () => <IconH1 /> },
    { id: 'h2', caption: 'Заголовок 2', Icon: () => <IconH2 /> },
    { id: 'h3', caption: 'Заголовок 3', Icon: () => <IconH3 /> },
    { id: 'h4', caption: 'Заголовок 4', Icon: () => <IconH4 /> },
    { id: 'h5', caption: 'Заголовок 5', Icon: () => <IconH5 /> },
    { id: 'h6', caption: 'Заголовок 6', Icon: () => <IconH6 /> },
  ],
  [{ id: 'paragraph', caption: 'Текст', Icon: () => <IconParagraph /> }],
  [
    { id: 'bulletList', caption: 'Список', Icon: () => <IconBulletedList /> },
    { id: 'orderedList', caption: 'Нумерованный список', Icon: () => <IconNumberedList /> },
  ],
];

export const EDIT_ITEMS: ItemProps<EditorCommand>[] = [
  { id: 'hr', caption: 'Дивайдер', Icon: () => <IconDivider /> },
  { id: 'blockquote', caption: 'Цитата', Icon: () => <IconTogglerBlockquote /> },
  { id: 'codeBlock', caption: 'Блок кода', Icon: () => <IconTogglerCodeblock /> },
];

export const TEXT_ALIGN_ITEMS: ItemProps<TextAlignCommand>[] = [
  { id: 'left', caption: 'По левому краю', Icon: () => <IconTextAlignLeft /> },
  { id: 'right', caption: 'По правому краю', Icon: () => <IconTextAlignRight /> },
  { id: 'center', caption: 'По центру', Icon: () => <IconTextAlignCenter /> },
  { id: 'justify', caption: 'По ширине', Icon: () => <IconTextAlignJustify /> },
];

export const TEXT_FORMAT_ITEMS: ItemProps<TextFormatCommand>[] = [
  { id: 'bold', caption: 'Жирный', Icon: () => <IconBold /> },
  { id: 'code', caption: 'Код', Icon: () => <IconTogglerInline /> },
  { id: 'italic', caption: 'Курсив', Icon: () => <IconItalic /> },
  { id: 'strike', caption: 'Зачеркнутый', Icon: () => <IconStrikeThrough /> },
  { id: 'underline', caption: 'Подчеркнутый', Icon: () => <IconUnderline /> },
];

export const NODE_TO_COMMAND_NAMES_ASSOC: Record<TiptapNodeName, ParagraphCommand | EditorCommand> = {
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  H5: 'h5',
  H6: 'h6',
  OL: 'orderedList',
  UL: 'bulletList',
  P: 'paragraph',

  CODEBLOCK: 'codeBlock',
  BLOCKQUOTE: 'blockquote',
};

type CommandsSet<T extends string> = Record<T, (chain: ChainedCommands) => boolean>;

export const LEFT_SELECT_COMMANDS: CommandsSet<ParagraphCommand> = {
  paragraph: (chain) => chain.setParagraph().run(),
  h1: (chain) => chain.toggleHeading({ level: 1 }).run(),
  h2: (chain) => chain.toggleHeading({ level: 2 }).run(),
  h3: (chain) => chain.toggleHeading({ level: 3 }).run(),
  h4: (chain) => chain.toggleHeading({ level: 4 }).run(),
  h5: (chain) => chain.toggleHeading({ level: 5 }).run(),
  h6: (chain) => chain.toggleHeading({ level: 6 }).run(),
  bulletList: (chain) => chain.toggleBulletList().run(),
  orderedList: (chain) => chain.toggleOrderedList().run(),
};

export const TEXT_EDIT_COMMANDS: CommandsSet<EditorCommand> = {
  codeBlock: (chain) => chain.toggleCodeBlock().run(),
  blockquote: (chain) => chain.toggleBlockquote().run(),
  hr: (chain) => chain.setHorizontalRule().run(),
};

export const TEXT_ALIGN_COMMANDS: CommandsSet<TextAlignCommand> = {
  left: (chain) => chain.setTextAlign('left').run(),
  right: (chain) => chain.setTextAlign('right').run(),
  center: (chain) => chain.setTextAlign('center').run(),
  justify: (chain) => chain.setTextAlign('justify').run(),
};

export const TEXT_FORMAT_COMMANDS: CommandsSet<TextFormatCommand> = {
  bold: (chain) => chain.toggleBold().run(),
  code: (chain) => chain.toggleCode().run(),
  italic: (chain) => chain.toggleItalic().run(),
  strike: (chain) => chain.toggleStrike().run(),
  underline: (chain) => chain.toggleUnderline().run(),
};

export const TOOLBAR_MIN_FULL_WIDTH = 767;
export const TOOLBAR_MIN_COMPACT_WIDTH = 539;
