// import React from 'react';
// import { screen, render, fireEvent } from '@testing-library/react';

// import { BaseAccordion } from '..';
// import { DEFAULT_TEST_ID } from '../constants';
// import styles from '../styles/accordion.module.scss';

// describe('Тесты для компонента Accordion', () => {
// const DEFAULT_TITLE = 'Критерии оценивания';
// const DEFAULT_CONTENT = 'Полнота ответа. Написано не менее 5 предложений, раскрывающих суть вопроса.';
// const DEFAULT_IMAGE_TEST_ID = 'UIKit.Icon';
// const CARET_ICON = <span data-testid={DEFAULT_IMAGE_TEST_ID}>test caret icon</span>;

// it('Accordion рендерится с заданным заголовком', () => {
//   render(<BaseAccordion dataTestId={DEFAULT_TEST_ID} title={DEFAULT_TITLE} caretIcon={CARET_ICON} />);
//   const title = screen.getByTestId(`${DEFAULT_TEST_ID}.Title`);

//   expect(title).toHaveTextContent(DEFAULT_TITLE);
// });

// it('Accordion: параметр iconPosition: left', () => {
//   render(
//     <BaseAccordion title={DEFAULT_TITLE} dataTestId={DEFAULT_TEST_ID} iconPosition="left" caretIcon={CARET_ICON}>
//       {DEFAULT_CONTENT}
//     </BaseAccordion>,
//   );

//   const accordion = screen.getByTestId(`${DEFAULT_TEST_ID}`);

//   expect(accordion).toHaveClass(styles._iconPositionLeft);
// });

// it('Accordion: параметр iconPosition: right', () => {
//   render(
//     <BaseAccordion title={DEFAULT_TITLE} dataTestId={DEFAULT_TEST_ID} iconPosition="right" caretIcon={CARET_ICON}>
//       {DEFAULT_CONTENT}
//     </BaseAccordion>,
//   );

//   const accordion = screen.getByTestId(`${DEFAULT_TEST_ID}`);

//   expect(accordion).not.toHaveClass(styles._iconPositionLeft);
// });

// it('Accordion закрыт', () => {
//   render(
//     <BaseAccordion title={DEFAULT_TITLE} dataTestId={DEFAULT_TEST_ID} caretIcon={CARET_ICON}>
//       {DEFAULT_CONTENT}
//     </BaseAccordion>,
//   );
//   const container = screen.getByTestId(`${DEFAULT_TEST_ID}.Container`);
//   expect(container).not.toBeNull();
//   expect(container).toHaveStyle('maxHeight: 0');
// });

// it('Accordion по умолчанию открыт', () => {
//   render(
//     <BaseAccordion title={DEFAULT_TITLE} dataTestId={DEFAULT_TEST_ID} openByDefault caretIcon={CARET_ICON}>
//       {DEFAULT_CONTENT}
//     </BaseAccordion>,
//   );

//   expect(screen.getByText(DEFAULT_CONTENT)).toBeInTheDocument();
// });

// it('Клик по области заголовка открывает accordion', () => {
//   render(
//     <BaseAccordion title={DEFAULT_TITLE} dataTestId={DEFAULT_TEST_ID} caretIcon={CARET_ICON}>
//       {DEFAULT_CONTENT}
//     </BaseAccordion>,
//   );

//   fireEvent.click(screen.getByRole('button', { hidden: true }));

//   expect(screen.getByText(DEFAULT_CONTENT)).toBeInTheDocument();
// });
// });
