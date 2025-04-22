import React from 'react';
import { render } from '@testing-library/react';

import { COMPONENT_NAME } from '../COMPONENT_NAME';

const testId = 'test-component';

describe('COMPONENT_NAME test', () => {
  it('корректный рендер children', () => {
    const mockText = 'mock text';

    const { getByTestId } = render(<COMPONENT_NAME dataTestId={testId}>{mockText}</COMPONENT_NAME>);

    expect(getByTestId(testId)).toHaveTextContent(mockText);
  });
});
