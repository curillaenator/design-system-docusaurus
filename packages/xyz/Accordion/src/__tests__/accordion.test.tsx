// import React from 'react';
// import { screen, render, fireEvent } from '@testing-library/react';

// import { Accordion } from '..';
// import { DEFAULT_TEST_ID } from '../constants';
// import styles from '../styles/accordion.module.scss';

// describe('Тесты для компонента Accordion', () => {
//   const DEFAULT_TITLE = 'Критерии оценивания';
//   const DEFAULT_CONTENT = 'Полнота ответа. Написано не менее 5 предложений, раскрывающих суть вопроса.';

//   it('Accordion рендерится с заданным заголовком', () => {
//     render(<Accordion dataTestId={DEFAULT_TEST_ID} title={DEFAULT_TITLE} />);
//     const title = screen.getByTestId(`${DEFAULT_TEST_ID}.Title`);

//     expect(title).toHaveTextContent(DEFAULT_TITLE);
//   });

//   it('Accordion: параметр iconPosition: left', () => {
//     render(
//       <Accordion title={DEFAULT_TITLE} dataTestId={DEFAULT_TEST_ID} iconPosition="left">
//         {DEFAULT_CONTENT}
//       </Accordion>,
//     );

//     const accordion = screen.getByTestId(`${DEFAULT_TEST_ID}`);

//     expect(accordion).toHaveClass(styles._iconPositionLeft);
//   });

//   it('Accordion: параметр iconPosition: right', () => {
//     render(
//       <Accordion title={DEFAULT_TITLE} dataTestId={DEFAULT_TEST_ID} iconPosition="right">
//         {DEFAULT_CONTENT}
//       </Accordion>,
//     );

//     const accordion = screen.getByTestId(`${DEFAULT_TEST_ID}`);

//     expect(accordion).not.toHaveClass(styles._iconPositionLeft);
//   });

//   it('Accordion закрыт', () => {
//     render(
//       <Accordion title={DEFAULT_TITLE} dataTestId={DEFAULT_TEST_ID}>
//         {DEFAULT_CONTENT}
//       </Accordion>,
//     );
//     const container = screen.getByTestId(`${DEFAULT_TEST_ID}.Container`);
//     expect(container).not.toBeNull();
//     expect(container).toHaveStyle('maxHeight: 0');
//   });

//   it('Accordion по умолчанию открыт', () => {
//     render(
//       <Accordion title={DEFAULT_TITLE} dataTestId={DEFAULT_TEST_ID} openByDefault>
//         {DEFAULT_CONTENT}
//       </Accordion>,
//     );

//     expect(screen.getByText(DEFAULT_CONTENT)).toBeInTheDocument();
//   });

//   it('Клик по области заголовка открывает accordion', () => {
//     render(
//       <Accordion title={DEFAULT_TITLE} dataTestId={DEFAULT_TEST_ID}>
//         {DEFAULT_CONTENT}
//       </Accordion>,
//     );

//     fireEvent.click(screen.getByRole('button', { hidden: true }));

//     expect(screen.getByText(DEFAULT_CONTENT)).toBeInTheDocument();
//   });
// });
