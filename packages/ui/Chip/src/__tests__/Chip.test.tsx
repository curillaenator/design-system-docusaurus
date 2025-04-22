import React from 'react';
import { render, screen } from '@testing-library/react';

import { Chip } from '../Chip';
import { ChipProps } from '../interfaces';

const testId = 'test-component';

const defaultChipProps = {
  dataTestId: testId,
} as ChipProps;

describe('Chip test', () => {
  it('корректный рендер children', () => {
    const mockText = 'mock text';

    render(
      <Chip {...defaultChipProps} component='span'>
        {mockText}
      </Chip>,
    );

    expect(screen.getByTestId(testId)).toHaveTextContent(mockText);
  });
});
