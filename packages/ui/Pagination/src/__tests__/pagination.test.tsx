import React from 'react';
import { render, screen } from '@testing-library/react';

import { Pagination } from '../Pagination';
import { DEFAULT_TEST_ID } from '../constants';

describe('<Pagination />', () => {
  it('рендерит детей', () => {
    render(<Pagination dataTestId={DEFAULT_TEST_ID} count={1} page={1} />);

    expect(screen.getByTestId(DEFAULT_TEST_ID)).toBeInTheDocument();
  });
});
