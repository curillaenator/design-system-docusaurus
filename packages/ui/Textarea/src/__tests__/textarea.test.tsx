import React, { useState } from 'react';
import { screen, render, fireEvent, waitFor } from '@testing-library/react';

import { TextareaBase as Textarea } from '../index';
import {
  DEFAULT_TEST_ID,
  INPUT_FIELD_TEST_ID,
  ICON_LEFT_TEST_ID,
  ICON_RIGHT_TEST_ID,
  LABEL_LEFT_TEST_ID,
  LABEL_RIGHT_TEST_ID,
  ICON_META_LEFT_TEST_ID,
  CAPTION_LEFT_TEST_ID,
  ICON_META_RIGHT_TEST_ID,
  CAPTION_RIGHT_TEST_ID,
} from '../constants';
import { TextareaProps } from '../interfaces';

describe('Тесты компонента Textarea', () => {
  const getProps = (props?: Partial<TextareaProps>): TextareaProps => ({
    value: '',
    onChange: jest.fn(),
    isFocused: false,
    setIsFocused: jest.fn(),
    ...props,
  });

  it('Textarea рендерится при значениях по умолчанию', () => {
    const props = getProps();
    render(<Textarea {...props} />);

    expect(screen.getByTestId(DEFAULT_TEST_ID)).toBeInTheDocument();
  });

  it('Textarea рендерит поле ввода и плейсхолдер', () => {
    const placeholderContent = 'Placeholder Content';

    const props = getProps({ placeholder: placeholderContent });

    render(<Textarea {...props} />);

    expect(screen.getByPlaceholderText(placeholderContent)).toBeInTheDocument();
  });

  it('Textarea рендерит текст', () => {
    const value = 'Некоторый текст';

    const props = getProps({ value });

    render(<Textarea {...props} />);

    const element = screen.getByTestId(INPUT_FIELD_TEST_ID);

    expect(element).toHaveValue(value);
  });

  it('Textarea onChange', async () => {
    const defaultValue = '';

    const Component: React.FC = () => {
      const [value, setValue] = useState(defaultValue);
      const handleChangeValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.preventDefault();
        setValue(e.target.value);
      };

      return <Textarea value={value} onChange={handleChangeValue} isFocused={false} setIsFocused={jest.fn()} />;
    };

    const userEnteredValue = 'Текст для теста';

    render(<Component />);
    const element = screen.getByTestId(INPUT_FIELD_TEST_ID);

    expect(element).toHaveValue(defaultValue);

    fireEvent.change(element, { target: { value: userEnteredValue } });

    await waitFor(() => {
      expect(element).toHaveValue(userEnteredValue);
    });
  });

  it.each([
    ['iconLeft', { iconLeft: <svg data-testid={ICON_LEFT_TEST_ID} /> }, ICON_LEFT_TEST_ID],
    ['iconRight', { iconRight: <svg data-testid={ICON_RIGHT_TEST_ID} /> }, ICON_RIGHT_TEST_ID],
    ['iconMetaLeft', { iconMetaLeft: <svg data-testid={ICON_META_LEFT_TEST_ID} /> }, ICON_META_LEFT_TEST_ID],
    ['iconMetaRight', { iconMetaRight: <svg data-testid={ICON_META_RIGHT_TEST_ID} /> }, ICON_META_RIGHT_TEST_ID],
  ])(`Textarea рендерит %s`, (_propName, prop, testId) => {
    const props = getProps({ ...(prop as TextareaProps) });

    render(<Textarea {...props} />);

    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });

  it.each([
    ['labelLeft', 'left text', LABEL_LEFT_TEST_ID],
    ['labelRight', 'right text', LABEL_RIGHT_TEST_ID],
    ['captionLeft', 'text meta left', CAPTION_LEFT_TEST_ID],
    ['captionRight', 'text meta right', CAPTION_RIGHT_TEST_ID],
  ])(`Textarea рендерит %s`, (propName, propValue, testId: string) => {
    const props = getProps({ [propName]: propValue });

    render(<Textarea {...props} />);

    expect(screen.getByTestId(testId)).toHaveTextContent(propValue);
  });
});
