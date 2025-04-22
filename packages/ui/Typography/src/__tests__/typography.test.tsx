import React from 'react';
import { render, screen } from '@testing-library/react';

import { Typography } from '../Typography';
import { DEFAULT_TEST_ID } from '../constants';

describe('Тесты компонента Typography', () => {
  const someText =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam ipsam beatae itaque non, earum doloribus!';

  it('Typography рендерится с children', () => {
    render(<Typography>{someText}</Typography>);

    expect(screen.getByTestId(DEFAULT_TEST_ID)).toBeInTheDocument();
    expect(screen.getByText(someText)).toBeInTheDocument();
  });

  it('Typography рендерится с соответствующим тегом', () => {
    render(<Typography as='p'>{someText}</Typography>);

    expect(screen.getByTestId(DEFAULT_TEST_ID)).toBeInTheDocument();
  });
});
