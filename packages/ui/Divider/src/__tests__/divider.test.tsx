import React from 'react';
import { render, screen } from '@testing-library/react';

import { Divider } from '../Divider';
import { DEFAULT_TEST_ID } from '../constants';

jest.mock('@kit-xyz/icon', () => ({
  Icon: 'svg',
}));

describe('Тесты компонента Divider', () => {
  const TEXT = 'Caption text';

  it('Divider рендерится по дефолту', () => {
    render(<Divider />);
    const divider = screen.getByTestId(DEFAULT_TEST_ID);
    expect(divider).toBeInTheDocument();
  });

  it('Divider стилизован и рендерится с текстом', () => {
    render(<Divider text={TEXT} dataTestId={DEFAULT_TEST_ID} className='ADDITIONAL' />);

    const divider = screen.getByTestId(DEFAULT_TEST_ID);
    const text = screen.getByTestId(`${DEFAULT_TEST_ID}.Text`);

    expect(divider).toHaveClass('ADDITIONAL');
    expect(text).toHaveTextContent(TEXT);
  });

  it('Divider рендерится вертикально', () => {
    render(<Divider orientation='vertical' />);

    const divider = screen.getByTestId(DEFAULT_TEST_ID);
    expect(divider).toBeInTheDocument();
  });

  it('Divider рендерится вертикально с текстом', () => {
    render(<Divider orientation='vertical' text={TEXT} />);

    const text = screen.getByTestId(`${DEFAULT_TEST_ID}.Text`);

    expect(text).toHaveTextContent(TEXT);
  });
});
