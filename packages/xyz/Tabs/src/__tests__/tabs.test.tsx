import React from 'react';
import { render, screen } from '@testing-library/react';
import PlusIcon from '@kit-xyz/icon/src/assets/solid/PlusIcon';

import { Tabs, TabsItemProps } from '../index';
import { DEFAULT_TEST_ID } from '../constants';

const items = [
  {
    id: 'item-1',
    title: 'item-1',
  },
  {
    dataTestId: 'item-2',
    id: 'item-2',
    title: 'item-2',
    Icon: PlusIcon,
  },
  {
    dataTestId: 'item-3',
    id: 'item-3',
    title: 'item-3',
    disabled: true,
  },
] as TabsItemProps[];

const currentId = items[0].id;

describe('Tabs', () => {
  const onChange = jest.fn();

  it('рендерятся по умолчанию', () => {
    render(<Tabs dataTestId={DEFAULT_TEST_ID} currentItemId={currentId} items={items} onChange={onChange} />);

    expect(screen.getByTestId(DEFAULT_TEST_ID)).toBeInTheDocument();
  });

  it('могут иметь иконки', () => {
    render(<Tabs dataTestId={DEFAULT_TEST_ID} currentItemId={currentId} items={items} onChange={onChange} />);

    expect(screen.getByTestId('XYZKit.Icon')).toBeInTheDocument();
  });
});
