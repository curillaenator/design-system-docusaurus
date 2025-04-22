import React, { FC, useState, useCallback, useEffect } from 'react';
import cn from 'classnames';
import { useCurrentEditor } from '@tiptap/react';

import { ToolbarButton } from '../ToolbarButton';
import { Dropdown } from '../Dropdown';
import PencileIcon from '@kit-xyz/icon/src/assets/solid/PencileIcon';

import {
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

import { useToolbarObserver } from './useToolbarObserver';
import { getTarget as getTiptapNodeName } from './utils';

import type {
  ToolbarProps,
  ParagraphCommand,
  EditorCommand,
  TextAlignCommand,
  TextFormatCommand,
  UpdatePayload,
} from './interfaces';

import {
  LEFT_SELECT_COMMANDS,
  TEXT_ALIGN_COMMANDS,
  TEXT_FORMAT_COMMANDS,
  TEXT_EDIT_COMMANDS,
  ITEMS,
  EDIT_ITEMS,
  TEXT_ALIGN_ITEMS,
  TEXT_FORMAT_ITEMS,
  NODE_TO_COMMAND_NAMES_ASSOC,
} from './constants';
import styles from './Toolbar.module.scss';

const Toolbar: FC<ToolbarProps> = (props) => {
  const { disabled, placement, className } = props;

  const { containerRef, composition } = useToolbarObserver({
    resetLeftDropdown: () => setLeftSelectValue('paragraph'),
  });

  const { editor } = useCurrentEditor();

  const [leftSelectValue, setLeftSelectValue] = useState<ParagraphCommand | EditorCommand>('paragraph');
  const [textAlign, setTextAlign] = useState<TextAlignCommand>('justify');
  const [textFormat, setTextFormat] = useState<TextFormatCommand | null>(null);

  const onUpdateFunc = useCallback(
    ({ editor: edtr }: UpdatePayload) => {
      const nodeName = getTiptapNodeName(edtr, composition);

      setLeftSelectValue(NODE_TO_COMMAND_NAMES_ASSOC[nodeName]);

      if (composition !== 'full') {
        const currAlign = (Object.keys(TEXT_ALIGN_COMMANDS).filter((command) =>
          edtr.isActive({ textAlign: command }),
        )[0] || 'justify') as TextAlignCommand;

        setTextAlign(currAlign);

        const currentFormatCommands = Object.keys(TEXT_FORMAT_COMMANDS).filter((command) => edtr.isActive(command));
        setTextFormat(currentFormatCommands.length ? (currentFormatCommands[0] as TextFormatCommand) : null);
      }
    },
    [composition],
  );

  useEffect(() => {
    editor?.on('selectionUpdate', onUpdateFunc).on('update', onUpdateFunc);
    return () => {
      editor?.off('selectionUpdate', onUpdateFunc).off('update', onUpdateFunc);
    };
  }, [editor, onUpdateFunc]);

  return (
    <div
      ref={containerRef}
      className={cn(styles.toolbar, styles[`_${composition}`], className, {
        [styles.toolbar_top]: placement === 'top',
        [styles.toolbar_bottom]: placement === 'bottom',
      })}
    >
      <div className={cn(styles.toolbarBlock, styles[`_${composition}`])}>
        <div className={styles.toolbarSection}>
          <Dropdown
            value={leftSelectValue}
            isOpenNodeCaption={composition === 'full'}
            onChange={(commandId) => setLeftSelectValue(commandId)}
            disabled={disabled}
            placement='bottom-start'
            closeOnItemClick
            maxHeight={360}
            items={[
              ...ITEMS.map((group) =>
                group.map((item) => ({
                  ...item,
                  onClick: () => LEFT_SELECT_COMMANDS[item.id](editor!.chain().focus()),
                })),
              ),
              composition === 'minimal'
                ? EDIT_ITEMS.map((item) => ({
                    ...item,
                    onClick: () => TEXT_EDIT_COMMANDS[item.id](editor!.chain().focus()),
                  }))
                : [],
            ].filter((arr) => !!arr.length)}
          />
        </div>

        {composition !== 'minimal' && (
          <div className={styles.toolbarSection}>
            <ToolbarButton
              disabled={disabled}
              onClick={() => TEXT_EDIT_COMMANDS.hr(editor!.chain().focus())}
              //
            >
              <IconDivider />
            </ToolbarButton>

            <ToolbarButton
              disabled={disabled}
              onClick={() => TEXT_EDIT_COMMANDS.blockquote(editor!.chain().focus())}
              active={!disabled && editor?.isActive('blockquote')}
            >
              <IconTogglerBlockquote />
            </ToolbarButton>

            <ToolbarButton
              disabled={disabled}
              onClick={() => TEXT_EDIT_COMMANDS.codeBlock(editor!.chain().focus())}
              active={!disabled && editor?.isActive('codeBlock')}
            >
              <IconTogglerCodeblock />
            </ToolbarButton>
          </div>
        )}
      </div>

      <div className={cn(styles.toolbarBlock, styles[`_${composition}`])}>
        <div className={styles.toolbarSection}>
          {composition === 'full' ? (
            <>
              <ToolbarButton
                disabled={disabled}
                onClick={() => TEXT_ALIGN_COMMANDS.left(editor!.chain().focus())}
                active={!disabled && editor?.isActive({ textAlign: 'left' })}
              >
                <IconTextAlignLeft />
              </ToolbarButton>

              <ToolbarButton
                disabled={disabled}
                onClick={() => TEXT_ALIGN_COMMANDS.center(editor!.chain().focus())}
                active={!disabled && editor?.isActive({ textAlign: 'center' })}
              >
                <IconTextAlignCenter />
              </ToolbarButton>

              <ToolbarButton
                disabled={disabled}
                onClick={() => TEXT_ALIGN_COMMANDS.justify(editor!.chain().focus())}
                active={!disabled && editor?.isActive({ textAlign: 'justify' })}
              >
                <IconTextAlignJustify />
              </ToolbarButton>

              <ToolbarButton
                disabled={disabled}
                onClick={() => TEXT_ALIGN_COMMANDS.right(editor!.chain().focus())}
                active={!disabled && editor?.isActive({ textAlign: 'right' })}
              >
                <IconTextAlignRight />
              </ToolbarButton>
            </>
          ) : (
            <Dropdown
              value={textAlign}
              isOpenNodeCaption={false}
              onChange={(align) => setTextAlign(align)}
              disabled={disabled}
              placement='bottom-end'
              closeOnItemClick
              maxHeight={320}
              items={[
                TEXT_ALIGN_ITEMS.map((item) => ({
                  ...item,
                  onClick: () => TEXT_ALIGN_COMMANDS[item.id](editor!.chain().focus()),
                })),
              ]}
            />
          )}
        </div>

        <div className={styles.toolbarSection}>
          {composition === 'full' ? (
            <>
              <ToolbarButton
                disabled={disabled}
                onClick={() => TEXT_FORMAT_COMMANDS.code(editor!.chain().focus())}
                active={!disabled && editor?.isActive('code')}
              >
                <IconTogglerInline />
              </ToolbarButton>

              <ToolbarButton
                disabled={disabled}
                onClick={() => TEXT_FORMAT_COMMANDS.bold(editor!.chain().focus())}
                active={!disabled && editor?.isActive('bold')}
              >
                <IconBold />
              </ToolbarButton>

              <ToolbarButton
                disabled={disabled}
                onClick={() => TEXT_FORMAT_COMMANDS.italic(editor!.chain().focus())}
                active={!disabled && editor?.isActive('italic')}
              >
                <IconItalic />
              </ToolbarButton>

              <ToolbarButton
                disabled={disabled}
                onClick={() => TEXT_FORMAT_COMMANDS.strike(editor!.chain().focus())}
                active={!disabled && editor?.isActive('strike')}
              >
                <IconStrikeThrough />
              </ToolbarButton>

              <ToolbarButton
                disabled={disabled}
                onClick={() => TEXT_FORMAT_COMMANDS.underline(editor!.chain().focus())}
                active={!disabled && editor?.isActive('underline')}
              >
                <IconUnderline />
              </ToolbarButton>
            </>
          ) : (
            <Dropdown
              icon={() => (
                <div className={cn(styles.p4, styles.noShrink)}>
                  <PencileIcon size='m' />
                </div>
              )}
              isOpenNodeCaption={false}
              value={textFormat}
              onChange={(format) => setTextFormat(format)}
              disabled={disabled}
              placement='bottom-end'
              closeOnItemClick
              maxHeight={320}
              items={[
                TEXT_FORMAT_ITEMS.map((item) => ({
                  ...item,
                  onClick: () => TEXT_FORMAT_COMMANDS[item.id](editor!.chain().focus()),
                })),
              ]}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
