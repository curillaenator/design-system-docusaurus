import React from 'react';
import { render, screen } from '@testing-library/react';

import { DEFAULT_TEST_ID } from '../constants';
import { Radio, RadioSize } from '../index';

describe('Тесты компонента Radio', () => {
  const TESTID1 = 'radio1';
  const TESTID2 = 'radio2';
  const DEFAULT_LABEL = 'RadioButton';
  const onChange = jest.fn();

  const RADIOS = [
    { dataTestId: TESTID1, id: 'radio1', label: `${DEFAULT_LABEL}1`, value: 'radio1', checked: false, onChange },
    { dataTestId: TESTID2, id: 'radio2', label: `${DEFAULT_LABEL}2`, value: 'radio2', checked: true, onChange },
  ];

  it('Radio рендерится с базовыми props', () => {
    const Element = () => (
      <>
        {RADIOS.map((radio) => (
          <Radio {...radio} key={radio.id} />
        ))}
      </>
    );

    render(Element());

    const radio1 = screen.getByTestId(TESTID1);
    const radio2 = screen.getByTestId(TESTID2);
    const labelText1 = screen.getByTestId(`${TESTID1}.Label.Text`);
    const labelText2 = screen.getByTestId(`${TESTID2}.Label.Text`);

    expect(radio1).toBeInTheDocument();
    expect(radio2).toBeInTheDocument();
    expect(labelText1).toHaveTextContent(`${DEFAULT_LABEL}1`);
    expect(labelText2).toHaveTextContent(`${DEFAULT_LABEL}2`);
  });

  it('Radio разных размеров рендерятся', () => {
    const sizes: RadioSize[] = ['xs'];
    const radiosSized = sizes.map((size, i) => ({
      id: `radio${i}`,
      text: `radio${i}`,
      value: `radio${i}`,
      size,
      checked: false,
      onChange,
    }));

    const Element = () => (
      <>
        {radiosSized.map((radio) => (
          <Radio {...radio} key={radio.id} />
        ))}
      </>
    );

    render(Element());

    const allGlyphs = screen.getAllByTestId(`${DEFAULT_TEST_ID}.Label.Glyph`);

    allGlyphs.forEach((glyph) => {
      expect(glyph).toBeInTheDocument();
    });
  });

  it('Radio рендерится без лейбла', () => {
    render(<Radio id='noLabel' value='noLabel' label='' checked={false} onChange={onChange} />);
    const label = screen.queryByTestId(`${DEFAULT_TEST_ID}.Label.Text`);

    expect(label).toBeNull();
  });
});
