import React, { type ElementType, type HTMLAttributes } from 'react';
import cn from 'classnames';

const scrollbarStyles = 'KIT scrollbar styles';

type WithScrollbarHOCType = <ElType extends HTMLElement, Props extends HTMLAttributes<ElType>>(
  Component: ElementType<Props>,
) => (props: Props) => JSX.Element;

export const WithScrollbarHOC: WithScrollbarHOCType = (Component) => (props) => {
  const { className, ...rest } = props;
  // @ts-expect-error hard to type
  return <Component {...rest} className={cn(scrollbarStyles, className)} />;
};

export const Div = WithScrollbarHOC<HTMLDivElement, { className: string }>(
  ({ children, className: classNameHOCed }) => <div className={cn('cunsumerCN', classNameHOCed)}>{children}</div>,
);
