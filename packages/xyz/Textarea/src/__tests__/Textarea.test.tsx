import React from 'react';
import { render } from '@testing-library/react';

import { Textarea } from '../Textarea';

const testId = 'test-component';

describe('Textarea test', () => {
  it('корректный рендер компонента', () => {
    const mockText = 'mock text';

    const { getByTestId } = render(<Textarea dataTestId={testId} value={mockText} onChange={jest.fn()} />);

    expect(getByTestId(testId)).toHaveTextContent(mockText);
  });
});
