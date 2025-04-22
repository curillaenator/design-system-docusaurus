// /* eslint-disable */
// // Отключен eslint из-за варнингов в консоле при исправлении на корректный eslint'у код.

// import React from 'react';
// import { render, screen, fireEvent, act, queryByAttribute, waitFor } from '@testing-library/react';

// import { ToastContainer, toast, closeToast } from '../index';
// import { DEFAULT_TEST_ID } from '../constants';

// const getById = queryByAttribute.bind(null, 'id');

// jest.mock('@kit-edu/icon', () => ({
//   Icon: 'svg',
// }));

// jest.useFakeTimers();

// const MESSAGE_TEXT = 'Описание тоста';
// const TOAST_CONTAINER_ID = 'toast-container';

// const defaultProps = {
//   dataTestId: DEFAULT_TEST_ID,
//   message: MESSAGE_TEXT,
// };

// describe('ToastContainer', () => {
//   it('рендерит тосты', () => {
//     render(<ToastContainer limit={2} containerId={TOAST_CONTAINER_ID} />);

//     [...Array(5)].fill(1).forEach(() => toast({ ...defaultProps, containerId: TOAST_CONTAINER_ID }));

//     act(() => {
//       jest.runAllTimers();
//     });

//     expect(screen.getAllByText(MESSAGE_TEXT).length).toBe(2);
//   });

//   it('рендерит тосты в режиме мультиконтейнера', () => {
//     const firstContainerId = TOAST_CONTAINER_ID;
//     const secondContainerId = `${TOAST_CONTAINER_ID}_TWO`;

//     render(
//       <>
//         <ToastContainer enableMultiContainer containerId={firstContainerId} />

//         <ToastContainer enableMultiContainer containerId={secondContainerId} />
//       </>,
//     );

//     toast({
//       ...defaultProps,
//       containerId: firstContainerId,
//       dataTestId: `${firstContainerId}_toast`,
//     });

//     toast({
//       ...defaultProps,
//       containerId: secondContainerId,
//       dataTestId: `${secondContainerId}_toast`,
//     });

//     act(() => {
//       jest.runAllTimers();
//     });

//     const firstContainer = getById(document.body, firstContainerId);
//     const secondContainer = getById(document.body, secondContainerId);

//     expect(firstContainer).toBeInTheDocument();
//     expect(secondContainer).toBeInTheDocument();

//     expect(screen.getAllByTestId(`${firstContainerId}_toast`).length).toBe(1);
//     expect(screen.getAllByTestId(`${secondContainerId}_toast`).length).toBe(1);
//   });
// });

// describe('Toast', () => {
//   let toastContainer: HTMLElement;

//   beforeEach(() => {
//     const { container } = render(<ToastContainer containerId={TOAST_CONTAINER_ID} />);

//     toastContainer = container;

//     jest.spyOn(window, 'requestAnimationFrame').mockImplementation((callback) => {
//       callback(1);
//       return 1;
//     });
//   });

//   afterEach(() => {
//     closeToast();

//     toastContainer.remove();
//     (window.requestAnimationFrame as jest.Mock).mockRestore();
//   });

//   it('открывается в ToastContainer', async () => {
//     toast({
//       ...defaultProps,
//       containerId: TOAST_CONTAINER_ID,
//     });

//     const container = getById(document.body, TOAST_CONTAINER_ID);

//     expect(container).toBeInTheDocument();

//     await waitFor(() => {
//       expect(screen.getByTestId(DEFAULT_TEST_ID)).toBeInTheDocument();
//     });

//     await waitFor(() => {
//       expect(screen.getByText(MESSAGE_TEXT)).toBeInTheDocument();
//     });
//   });

//   it('открывается с нужным appearance', async () => {
//     toast({
//       ...defaultProps,
//       appearance: 'light',
//       containerId: TOAST_CONTAINER_ID,
//     });

//     toast({
//       ...defaultProps,
//       appearance: 'dark',
//       containerId: TOAST_CONTAINER_ID,
//     });

//     toast({
//       ...defaultProps,
//       appearance: 'positive',
//       containerId: TOAST_CONTAINER_ID,
//     });

//     toast({
//       ...defaultProps,
//       appearance: 'negative',
//       containerId: TOAST_CONTAINER_ID,
//     });

//     await waitFor(() => {
//       const toasts = screen.getAllByTestId(DEFAULT_TEST_ID);

//       expect(toasts.length).toBe(4);

//       toasts.forEach((t) => {
//         expect(t).toBeInTheDocument();
//         expect(t).toHaveTextContent(MESSAGE_TEXT);
//       });
//     });
//   });

//   it('закрывается по клику на него', () => {
//     toast(defaultProps);

//     act(() => {
//       jest.runAllTimers();
//     });

//     const toastElement = screen.getByTestId(DEFAULT_TEST_ID);
//     expect(toastElement).toBeInTheDocument();

//     act(() => {
//       toastElement.click();
//       jest.runAllTimers();
//       fireEvent.animationEnd(toastElement);
//       jest.runAllTimers();
//     });

//     expect(toastElement).not.toBeInTheDocument();
//   });

//   it('не закрывается при closeOnClick: false', () => {
//     toast({ ...defaultProps, closeOnClick: false });

//     act(() => {
//       jest.runAllTimers();
//     });

//     const toastElement = screen.getByTestId(DEFAULT_TEST_ID);

//     expect(toastElement).toBeInTheDocument();

//     act(() => {
//       toastElement.click();

//       jest.runAllTimers();
//       fireEvent.animationEnd(toastElement);
//       jest.runAllTimers();
//     });

//     expect(toastElement).toBeInTheDocument();
//   });

//   it('рендерится в другом позиционировании', () => {
//     toast({ ...defaultProps, position: 'top-left' });

//     act(() => {
//       jest.runAllTimers();
//     });

//     const container = getById(document.body, TOAST_CONTAINER_ID);
//     expect(container.firstChild).toHaveClass('Toastify__toast-container--top-left');
//   });

//   it('закрывается в ручном режиме по id', () => {
//     const TOAST_ID = 'toast_id';

//     toast({ ...defaultProps, toastId: TOAST_ID });

//     act(() => {
//       jest.runAllTimers();
//     });

//     const toastElement = screen.getByTestId(DEFAULT_TEST_ID);

//     expect(screen.getByTestId(DEFAULT_TEST_ID)).toBeInTheDocument();

//     act(() => {
//       closeToast(TOAST_ID);
//       jest.runAllTimers();
//       fireEvent.animationEnd(toastElement);
//       jest.runAllTimers();
//     });

//     expect(toastElement).not.toBeInTheDocument();
//   });

//   it('закрывается в ручном режиме', () => {
//     [...Array(10)].fill(1).forEach(() => toast(defaultProps));

//     act(() => {
//       jest.runAllTimers();
//     });

//     const toasts = screen.getAllByTestId(DEFAULT_TEST_ID);

//     expect(toasts.length).toBe(10);

//     act(() => {
//       closeToast();
//       jest.runAllTimers();
//       toasts.forEach((item) => {
//         fireEvent.animationEnd(item);
//         jest.runAllTimers();
//       });
//     });

//     expect(screen.queryAllByText(MESSAGE_TEXT).length).toBe(0);
//   });
// });
