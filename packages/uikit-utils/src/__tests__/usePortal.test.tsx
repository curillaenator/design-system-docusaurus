import React from 'react';
import { createPortal } from 'react-dom';
import { render } from '@testing-library/react';

import { createRootElement, addRootElement, removeRootElement, usePortal } from '../usePortal';

const portalId = 'portal-id';
const portalContentDataTestId = 'portal-content-data-test-id';

function ComponentWithHook() {
  const portalTarget = usePortal(portalId);

  return createPortal(<h1 data-testid={portalContentDataTestId}>portal content goes here</h1>, portalTarget);
}

describe('Тесты утилит из файла usePortal', () => {
  it('createRootElement создает div и добавлет ему атрибут id', () => {
    const elem = createRootElement(portalId);
    render(<div id='wrapper' />);

    const wrapper = document.getElementById('wrapper');
    wrapper?.appendChild(elem);

    expect(elem).toBeInTheDocument();
    expect(elem).toHaveAttribute('id', portalId);
  });

  it('addRootElement добавляет элемент в конец body', () => {
    render(<></>);

    const elem = createRootElement(portalId);

    addRootElement(elem, false);
    expect(document.body.lastChild).toHaveAttribute('id', portalId);
  });

  it('removeRootElement удаляет элемент из body', () => {
    render(<div />);

    const elem = createRootElement(portalId);

    addRootElement(elem, false);
    expect(document.body.lastChild).toHaveAttribute('id', portalId);

    removeRootElement(elem, false);
    expect(elem).not.toBeInTheDocument();
  });
});

describe('Тесты хука usePortal', () => {
  it('usePortal создает портал и вставляет контент внутрь контейнера с переданным id', () => {
    render(<ComponentWithHook />);

    const portal = document.getElementById(portalId);
    const content = document.querySelector(`[data-testid="${portalContentDataTestId}"]`);

    expect(portal).toBeInTheDocument();
    expect(content).toBeInTheDocument();
  });
});
