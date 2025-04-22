import React from 'react';
import { render, screen } from '@testing-library/react';
import { within } from '@testing-library/dom';
import { MemoryRouter } from 'react-router-dom';
import PlusIcon from '@kit-xyz/icon/src/assets/solid/PlusIcon';

import { Breadcrumbs } from '../Breadcrumbs';
import { DEFAULT_TEST_ID } from '../constants';
import { BreadcrumbsItemProps } from '../interfaces';

describe('Тесты для Breadcrumbs', () => {
  it('Breadcrumbs рендерится с одним пунктом', () => {
    const items: BreadcrumbsItemProps[] = [{ id: 1, href: '#', title: 'Home', Icon: PlusIcon }];
    const titles = items.map((el) => el.title);

    render(
      <MemoryRouter>
        <Breadcrumbs items={items} />
      </MemoryRouter>,
    );

    const navEl = screen.getByTestId(DEFAULT_TEST_ID);
    const ulEl = screen.getByTestId(`${DEFAULT_TEST_ID}.List`);
    const liEls = screen.getAllByTestId(`${DEFAULT_TEST_ID}.List.Item`);
    const linkEls = screen.getAllByTestId(`${DEFAULT_TEST_ID}.List.Item.Link`);

    expect(navEl).toBeInTheDocument();
    expect(ulEl).toBeInTheDocument();

    expect(liEls).toHaveLength(items.length);
    expect(linkEls).toHaveLength(items.length);

    /**
     * Проверка на то, что внутри элемента li рендерится ссылка
     */
    liEls.forEach((ulItem, idx) => {
      expect(ulItem).toContainElement(linkEls[idx]);
    });

    /**
     * Проверка, что отображается текст для ссылок
     */
    titles.forEach((title) => {
      screen.getByText(title);
    });
  });

  it('Breadcrumbs рендерится с несколькими пунктами', () => {
    const items: BreadcrumbsItemProps[] = [
      { id: 1, href: '#', title: 'Home', Icon: PlusIcon },
      { id: 2, href: '#', title: 'First page' },
      { id: 3, href: '#', title: 'Second page', Icon: PlusIcon },
      { id: 4, href: '#', title: 'Third page' },
      { id: 5, href: '#', title: 'Fourth page', Icon: PlusIcon },
    ];

    render(
      <MemoryRouter>
        <Breadcrumbs items={items} />
      </MemoryRouter>,
    );

    const navEl = screen.getByTestId(DEFAULT_TEST_ID);
    const ulEl = screen.getByTestId(`${DEFAULT_TEST_ID}.List`);
    const liEls = screen.getAllByTestId(`${DEFAULT_TEST_ID}.List.Item`);
    const linkEls = screen.getAllByTestId(`${DEFAULT_TEST_ID}.List.Item.Link`);

    expect(navEl).toBeInTheDocument();
    expect(ulEl).toBeInTheDocument();

    expect(liEls).toHaveLength(items.length);
    expect(linkEls).toHaveLength(items.length);

    /**
     * Проверка на то, что внутри элемента li рендерится ссылка,
     * иконка (если есть) и текст ссылки
     */
    liEls.forEach((ulItem, idx) => {
      expect(ulItem).toContainElement(linkEls[idx]);

      within(linkEls[idx]).getByText(items[idx].title);
    });
  });
});
