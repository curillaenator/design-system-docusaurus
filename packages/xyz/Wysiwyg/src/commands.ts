import type { Editor } from '@tiptap/react';

type CommandEvent = Editor | null;

export const COMMANDS = {
  paragraph: (e: CommandEvent) => !!e?.chain().focus().setParagraph().run(),
  h1: (e: CommandEvent) => !!e?.chain().focus().toggleHeading({ level: 1 }).run(),
  h2: (e: CommandEvent) => !!e?.chain().focus().toggleHeading({ level: 2 }).run(),
  h3: (e: CommandEvent) => !!e?.chain().focus().toggleHeading({ level: 3 }).run(),
  h4: (e: CommandEvent) => !!e?.chain().focus().toggleHeading({ level: 4 }).run(),
  h5: (e: CommandEvent) => !!e?.chain().focus().toggleHeading({ level: 5 }).run(),
  h6: (e: CommandEvent) => !!e?.chain().focus().toggleHeading({ level: 6 }).run(),
  bulletList: (e: CommandEvent) => !!e?.chain().focus().toggleBulletList().run(),
  orderedList: (e: CommandEvent) => !!e?.chain().focus().toggleOrderedList().run(),

  codeblock: (e: CommandEvent) => !!e?.chain().focus().toggleCodeBlock().run(),
  codeinline: (e: CommandEvent) => !!e?.chain().focus().toggleCode().run(),
  blockquote: (e: CommandEvent) => !!e?.chain().setParagraph().toggleBlockquote().focus().run(),
  hr: (e: CommandEvent) => !!e?.chain().setHorizontalRule().focus().run(),
  bold: (e: CommandEvent) => !!e?.chain().focus().toggleBold().run(),
  italic: (e: CommandEvent) => !!e?.chain().focus().toggleItalic().run(),
  strike: (e: CommandEvent) => !!e?.chain().focus().toggleStrike().run(),
  underline: (e: CommandEvent) => !!e?.chain().focus().toggleUnderline().run(),
  textAlignLeft: (e: CommandEvent) => !!e?.chain().focus().setTextAlign('left').run(),
  textAlignRight: (e: CommandEvent) => !!e?.chain().focus().setTextAlign('right').run(),
  textAlignCenter: (e: CommandEvent) => !!e?.chain().focus().setTextAlign('center').run(),
  textAlignJustify: (e: CommandEvent) => !!e?.chain().focus().setTextAlign('justify').run(),
} as const;
