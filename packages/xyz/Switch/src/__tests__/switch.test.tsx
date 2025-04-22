import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';

import { Switch } from '../index';
import { DEFAULT_TEST_ID } from '../constants';

describe('Тесты компонента Switch', () => {
  it('Switch рендерится', () => {
    render(<Switch dataTestId={DEFAULT_TEST_ID} checked={false} onChange={() => {}} />);

    expect(screen.getByTestId(DEFAULT_TEST_ID)).toBeInTheDocument();
  });

  it('Switch проверка onChange', () => {
    let value = 0;

    expect(value).toEqual(0);

    render(
      <Switch
        dataTestId={DEFAULT_TEST_ID}
        checked
        onChange={() => {
          value = 1;
        }}
      />,
    );

    const switchComponent = screen.getByTestId(DEFAULT_TEST_ID) as Element;
    fireEvent.click(switchComponent);

    expect(value).toEqual(1);
  });

  it('Switch disabled', () => {
    render(<Switch dataTestId={DEFAULT_TEST_ID} checked onChange={() => {}} disabled />);
    const input = screen.getByTestId(DEFAULT_TEST_ID).hasAttribute('disabled');

    expect(input).toEqual(true);
  });

  it('Switch id', () => {
    const id = 'test_id';
    render(<Switch dataTestId={DEFAULT_TEST_ID} checked onChange={() => {}} id={id} />);
    const input = screen.getByTestId(DEFAULT_TEST_ID).getAttribute('id');

    expect(input).toBe(id);
  });

  describe('Лейбл', () => {
    it('Switch label', () => {
      const labelContent = 'test label text';
      render(<Switch dataTestId={DEFAULT_TEST_ID} checked onChange={() => {}} label={labelContent} />);
      const label = screen.getByText(labelContent);

      expect(label).not.toBeNull();
    });

    it('Switch secondaryLabel', () => {
      const secondaryLabelContent = 'test label text';
      render(
        <Switch dataTestId={DEFAULT_TEST_ID} checked onChange={() => {}} labelSecondary={secondaryLabelContent} />,
      );
      const label = screen.getByText(secondaryLabelContent);

      expect(label).not.toBeNull();
    });
  });
});
