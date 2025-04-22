import React from 'react';
import { render, screen } from '@testing-library/react';
import Icon from '@kit-xyz/icon/src/assets/solid/BellIcon';

import { Bubble } from '../Bubble';
import { DEFAULT_TEST_ID } from '../constants';

const titleMock = 'Some title';
const subTitleMock = '10:00';

describe('BubbleChat test', () => {
  it('корректный рендер title', () => {
    render(<Bubble dataTestId={DEFAULT_TEST_ID} title={titleMock} />);

    expect(screen.getByTestId(DEFAULT_TEST_ID)).toHaveTextContent(titleMock);
  });

  it('корректный рендер subTitle', () => {
    render(<Bubble dataTestId={DEFAULT_TEST_ID} title={titleMock} subTitle={subTitleMock} />);

    expect(screen.getByTestId(DEFAULT_TEST_ID)).toHaveTextContent(subTitleMock);
  });

  it('корректный рендер иконок', () => {
    const DEFAULT_IMAGE_TEST_ID = 'XYZKit.Icon';

    render(
      <Bubble
        dataTestId={DEFAULT_TEST_ID}
        title={titleMock}
        subTitle={subTitleMock}
        IconLeft={Icon}
        IconRight={Icon}
      />,
    );

    expect(screen.getAllByTestId(DEFAULT_IMAGE_TEST_ID)).toHaveLength(2);
  });
});
