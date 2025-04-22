import React, { FC, useState, useCallback, useRef, useEffect, type ChangeEvent } from 'react';

import { TextareaAutosize } from '@kit-base/textarea';
import { Paper } from '@kit-xyz/paper';
import { Checkbox, type CheckboxProps } from '@kit-xyz/checkbox';

import { useViewportContext } from '../../../../src/components/DocViewport';

import styles from './todolist.module.scss';

interface CheckboxItem {
  id: string;
  checked: boolean;
  label: string;
}

type TodoListType = Record<CheckboxProps['id'], CheckboxItem>;

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const generateId = (): CheckboxProps['id'] => {
  const idArr = [];

  for (let i = 0; i < 12; i++) {
    const lq = Math.ceil(Math.random() * (ALPHABET.length - 1));
    const hq = Math.ceil(Math.random() * (ALPHABET.length - 1));

    idArr.push(`${ALPHABET.charAt(lq)}${ALPHABET.charAt(hq).toUpperCase()}`);
  }

  return idArr.join('');
};

const INIT_CHECKBOXES: TodoListType = {
  one: {
    id: 'one',
    checked: false,
    label: 'Создать чат по задаче',
  },
  two: {
    id: 'two',
    checked: true,
    label: 'Включить функционал бета–версий',
  },
  three: {
    id: 'three',
    checked: false,
    label: 'Напишите системные требования к WYSIWYG–редактору',
  },
};

interface TodoItemProps extends Partial<CheckboxItem> {
  colorMode: CheckboxProps['colorMode'];
  onAdd?: (label: string) => void;
  onUpdate?: (id: string, label: string) => void;
  onRemove?: (id: string) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

// @ts-expect-error Call signature return types 'Element' and 'ReactElement<any, any>' are incompatible. ???
const TodoItem: FC<TodoItemProps> = (props) => {
  const { id, checked, label, colorMode, onChange, onUpdate, onRemove, onAdd } = props;

  const isListItem = !!onChange;

  const textarea = useRef<HTMLTextAreaElement>(null);

  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [value, setValue] = useState<string>(label || '');

  useEffect(() => {
    if (isListItem && textarea.current) textarea.current.focus();
  });

  return (
    <div className={styles.createItem}>
      <Checkbox
        id={id}
        checked={checked}
        onChange={onChange}
        className={styles.checkboxTracker}
        disabled={!isListItem}
        colorMode={colorMode}
      />

      {isListItem && !isEditable && <span onClick={() => setIsEditable((prev) => !prev)}>{label}</span>}

      {(!isListItem || isEditable) && (
        <TextareaAutosize
          ref={(inst) => (textarea.current = inst)}
          id={`textarea-${id}`}
          minRows={1}
          value={value}
          autoComplete='off'
          onChange={(e) => {
            setValue(e.target.value);

            if (isEditable && isListItem) {
              onUpdate(id, e.target.value);
            }
          }}
          placeholder={isListItem ? 'Заполните пукт' : 'Начните писать новый пункт'}
          onBlur={() => {
            if (isListItem) {
              setIsEditable(false);
            }

            if (!isListItem) {
              setValue('');
            }
          }}
          onKeyDown={(e) => {
            e.stopPropagation();

            if (isListItem && !value.length && e.key === 'Backspace') return onRemove(id);

            if (!value.length && e.key === 'Enter') return e.preventDefault();

            if (!isListItem && !!value.length && e.key === 'Enter') {
              // хак для TextareaAutosize
              setTimeout(() => {
                onAdd(value);
                setValue('');
              }, 0);
              return;
            }

            if (isListItem && !!value.length && e.key === 'Enter') {
              e.preventDefault();
              setIsEditable(false);
              return;
            }
          }}
        />
      )}
    </div>
  );
};

// @ts-expect-error Call signature return types 'Element' and 'ReactElement<any, any>' are incompatible. ???
export const TodoList: FC = () => {
  const { colorMode } = useViewportContext(); // colorMode при необходимости у вас свой

  const [todos, setTodos] = useState<TodoListType>(INIT_CHECKBOXES);

  const onRemove = useCallback(
    (id: string) => {
      const filtered = Object.fromEntries(Object.entries(todos).filter(([itemId]) => itemId !== id));
      setTodos(filtered);
    },
    [todos],
  );

  const onAdd = useCallback((label: string) => {
    const newId = generateId();

    setTodos((prev) => ({
      ...prev,
      [newId]: {
        id: newId,
        checked: false,
        label,
      },
    }));
  }, []);

  const onUpdate = useCallback((id: string, label: string) => {
    setTodos((prev) => ({
      ...prev,
      [id]: { ...prev[id], label },
    }));
  }, []);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const id = e.target.id;

    setTodos((prev) => ({
      ...prev,
      [id]: { ...prev[id], checked: !prev[id].checked },
    }));
  }, []);

  const todosMap = Object.entries(todos).map(([id, chbxItem]) => ({ id, ...chbxItem }));

  return (
    <Paper colorMode={colorMode} fullwidth appearance='solid-alt' borderRadius='l' padding='xl'>
      <div className={styles.container} tabIndex={0}>
        {todosMap.map(({ id, checked, label }) => (
          <TodoItem
            key={id}
            id={id}
            label={label}
            checked={checked}
            onChange={onChange}
            onUpdate={onUpdate}
            onRemove={onRemove}
            colorMode={colorMode}
          />
        ))}

        <TodoItem onAdd={onAdd} checked={false} colorMode={colorMode} />
      </div>
    </Paper>
  );
};
