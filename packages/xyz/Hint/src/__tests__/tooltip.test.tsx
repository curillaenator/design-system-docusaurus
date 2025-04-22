// import React, { FC } from 'react';
// import { render, screen, fireEvent } from '@pcbl/fe-scripts/configs/test-utils';
// import { renderHook } from '@testing-library/react-hooks';

// import { Tooltip, Hint, useControledDropdown, TooltipPlacements, TooltipProps } from '../index';
// import { DEFAULT_TEST_ID } from '../constants';

// describe('Tooltip', () => {
//   const TRIGGER_TEST_ID = 'TRIGGER_TEST_ID';
//   const TOOLTIP_TEXT = 'TOOLTIP_TEXT';

//   const Element: FC = () => (
//     <Tooltip customContent={TOOLTIP_TEXT}>
//       <p data-testid={TRIGGER_TEST_ID}>{TRIGGER_TEST_ID}</p>
//     </Tooltip>
//   );

//   it('принимает элементы в качестве триггера', () => {
//     render(<Element />);

//     const trigger = screen.getByTestId(TRIGGER_TEST_ID);

//     expect(trigger).toBeInTheDocument();
//     expect(trigger).toHaveTextContent(TRIGGER_TEST_ID);
//   });

//   it('открывается при наведении', () => {
//     render(<Element />);

//     const targetElement = screen.getByTestId(TRIGGER_TEST_ID);

//     expect(screen.queryByText(TOOLTIP_TEXT)).not.toBeInTheDocument();

//     fireEvent.mouseEnter(targetElement);

//     setTimeout(() => {
//       const hint = screen.getByTestId(DEFAULT_TEST_ID);

//       expect(hint).toBeInTheDocument();
//       expect(hint).toHaveTextContent(TOOLTIP_TEXT);
//     }, 200);
//   });

//   it('Заданы параметры', () => {
//     const props: TooltipProps = {
//       dataTestId: 'Tooltip',
//       customContent: TOOLTIP_TEXT,
//       trigger: 'click',
//       placement: 'bottom-left' as TooltipPlacements,
//       maxWidth: 900,
//       children: null,
//     };

//     render(
//       <Tooltip {...props}>
//         <p data-testid={TRIGGER_TEST_ID}>{TRIGGER_TEST_ID}</p>
//       </Tooltip>,
//     );

//     const trigger = screen.getByTestId(TRIGGER_TEST_ID);

//     expect(trigger).toHaveTextContent(TRIGGER_TEST_ID);
//   });

//   it('Экспорт useControledDropdown', () => {
//     const { result } = renderHook(() => useControledDropdown({ fullControl: false, openByDefault: false }));

//     expect(result.current).toBeInstanceOf(Object);
//   });
// });

// describe('Hint', () => {
//   it('Hint рендерится', () => {
//     const TRIGGER_TEST_ID = 'TRIGGER_TEST_ID';

//     render(
//       <Hint text="Label" iconName="master-card">
//         <p data-testid={TRIGGER_TEST_ID}>Наведи на меня</p>
//       </Hint>,
//     );

//     expect(screen.getByTestId(TRIGGER_TEST_ID)).toBeInTheDocument();
//   });

//   it('Hint рендерится с text по умолчанию', () => {
//     const TRIGGER_TEST_ID = 'TRIGGER_TEST_ID';

//     render(
//       <Hint iconName="master-card">
//         <p data-testid={TRIGGER_TEST_ID}>Наведи на меня</p>
//       </Hint>,
//     );

//     expect(screen.getByTestId(TRIGGER_TEST_ID)).toBeInTheDocument();
//   });
// });
