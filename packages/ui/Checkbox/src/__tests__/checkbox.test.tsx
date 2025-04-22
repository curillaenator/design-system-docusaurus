import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { DEFAULT_TEST_ID } from '../constants';
import { Checkbox, CheckboxBaseProps } from '../index';

describe('Тесты компонента Checkbox', () => {
  const chbxId = 'checkboxId';
  const chbxLabel = 'checkboxLabel';
  const addClassName = 'addClassName';
  const onChange = jest.fn();

  const Element = (checkboxPropsVariants: CheckboxBaseProps[]) => (
    <>
      {checkboxPropsVariants.map(({ id, ...rest }) => (
        <Checkbox {...rest} key={id} />
      ))}
    </>
  );

  it('Checkbox рендериться по умолчанию, реагирует на клик', () => {
    render(<Checkbox id={chbxId} value='default' checked={false} onChange={onChange} className={addClassName} />);

    const checkbox = screen.getByTestId(`${DEFAULT_TEST_ID}.Label`);
    const input = screen.getByTestId(`${DEFAULT_TEST_ID}.Label.Input`);

    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveClass(addClassName);
    expect(checkbox).not.toHaveTextContent(chbxLabel);
    expect(input).toBeInTheDocument();

    fireEvent.click(checkbox);

    expect(onChange).toBeCalled();
  });

  it('Checkbox рендерит текстовый лэйбл в разном позиционировании', () => {
    const positionVariants: CheckboxBaseProps[] = [
      {
        dataTestId: `${chbxId}1`,
        id: `${chbxId}1`,
        value: `${chbxId}1`,
        label: `${chbxLabel}1`,
        reversed: true,
        checked: false,
        onChange,
      },
      {
        dataTestId: `${chbxId}2`,
        id: `${chbxId}2`,
        value: `${chbxId}2`,
        label: `${chbxLabel}2`,
        reversed: false,
        checked: false,
        onChange,
      },
    ];

    render(Element(positionVariants));

    const checkboxes = positionVariants.map((variant) => screen.getByTestId(`${variant.dataTestId}.Label`));

    checkboxes.forEach((checkbox, i) => {
      expect(checkbox).toBeInTheDocument();
      expect(checkbox).toHaveTextContent(`${positionVariants[i].label}`);
    });
  });

  it('Checkbox рендерит дополнительный лэйбл в разном позиционировании', () => {
    const positionVariants: CheckboxBaseProps[] = [
      {
        dataTestId: `${chbxId}1`,
        id: `${chbxId}1`,
        value: `${chbxId}1`,
        label: `${chbxLabel}1`,
        labelSecondary: 'test secondary label',
        reversed: true,
        checked: false,
        onChange,
      },
      {
        dataTestId: `${chbxId}2`,
        id: `${chbxId}2`,
        value: `${chbxId}2`,
        label: `${chbxLabel}2`,
        labelSecondary: 'test secondary label',
        reversed: false,
        checked: false,
        onChange,
      },
    ];

    render(Element(positionVariants));

    const checkboxes = positionVariants.map((variant) => screen.getByTestId(`${variant.dataTestId}.Label`));

    checkboxes.forEach((checkbox, i) => {
      expect(checkbox).toBeInTheDocument();
      expect(checkbox).toHaveTextContent(`${positionVariants[i].labelSecondary}`);
    });
  });

  it('Checkbox рендерится checked', () => {
    render(<Checkbox id={chbxId} value={chbxId} label={chbxLabel} checked onChange={onChange} />);

    const input = screen.getByTestId(`${DEFAULT_TEST_ID}.Label.Input`);
    const glyph = screen.getByTestId(`${DEFAULT_TEST_ID}.Glyph`); // элемент есть только при чекд

    expect(input).not.toBeDisabled();
    expect(glyph).toBeInTheDocument();
  });

  it('Checkbox рендерится disabled', () => {
    render(<Checkbox id={chbxId} value={chbxId} disabled label={chbxLabel} checked={false} onChange={onChange} />);

    const input = screen.getByTestId(`${DEFAULT_TEST_ID}.Label.Input`);

    expect(input).toBeDisabled();
  });
});
