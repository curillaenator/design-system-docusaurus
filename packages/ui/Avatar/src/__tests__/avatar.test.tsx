// import React from 'react';
// import { render, screen } from '@testing-library/react';

// import { BaseAvatarImage as Avatar } from '../BaseAvatarImage';
// import { DEFAULT_TEST_ID } from '../constants';

// jest.mock('@kit-base/uikit-utils', () => ({
//   useImageLoader: (src?: string) => {
//     if (src) {
//       return { dataImg: src, error: false };
//     }

//     return { dataImg: '', error: true };
//   },
// }));

// describe('Тесты компонента Avatar', () => {
//   const TEXT = 'TX';
//   const CLASSNAME = 'ADDITIONAL';
//   const URL = '../stories/assets/image.png';

//   it('Avatar рендериться без переданных props', () => {
//     render(<Avatar />);
//     const avatar = screen.getByTestId(DEFAULT_TEST_ID);

//     expect(avatar).toBeInTheDocument();
//   });

//   it('Avatar рендериться с заданным текстом', () => {
//     render(<Avatar initials={TEXT} dataTestId={DEFAULT_TEST_ID} />);
//     const avatar = screen.getByTestId(DEFAULT_TEST_ID);

//     expect(avatar).toHaveTextContent(TEXT);
//   });

//   it('Avatar рендериться с заданным URL, текст не должен отображаться', () => {
//     render(<Avatar src={URL} alt={TEXT} initials={TEXT} title={TEXT} />);
//     const avatar = screen.getByTestId(DEFAULT_TEST_ID);
//     const image = screen.getByTestId(`${DEFAULT_TEST_ID}.Image`);

//     expect(avatar).not.toHaveTextContent(TEXT);
//     expect(image).toBeInTheDocument();
//   });

//   it('Avatar рендериться с дополнительным className', () => {
//     render(<Avatar className={CLASSNAME} />);
//     const avatar = screen.getByTestId(DEFAULT_TEST_ID);

//     expect(avatar).toHaveClass(CLASSNAME);
//   });

//   it('Avatar отбражает нотификации', () => {
//     render(<Avatar notion='top-left' />);
//     const notion = screen.getByTestId(`${DEFAULT_TEST_ID}.Notion`);

//     expect(notion).toBeInTheDocument();
//   });
// });
