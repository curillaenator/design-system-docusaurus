import { ElementType, ComponentPropsWithRef, ComponentProps, PropsWithChildren, ReactElement } from 'react';

type OmitComponentPropsWithRef<Component extends ElementType, Props> = Omit<
  ComponentPropsWithRef<Component>,
  keyof Props
>;

type OverridePropsWithRef<Props, Component extends ElementType> = Props &
  OmitComponentPropsWithRef<Component, keyof Props>;

type OverridableComponentPropsWithRef<Component extends ElementType, Props, K extends string> = {
  [Property in K]?: Component;
} & OverridePropsWithRef<PropsWithChildren<Props>, Component>;

export type PolymorphicComponentWithRef<P, K extends string, D extends ElementType> = {
  <C extends ElementType = D>(props: OverridableComponentPropsWithRef<C, P, K>): ReactElement | null;
  displayName?: string | undefined;
};

type OmitComponentProps<Component extends ElementType, Props> = Omit<ComponentProps<Component>, keyof Props>;

type OverrideProps<Props, Component extends ElementType> = Props & OmitComponentProps<Component, keyof Props>;

type OverridableComponentProps<Component extends ElementType, Props, K extends string> = {
  [Property in K]?: Component;
} & OverrideProps<PropsWithChildren<Props>, Component>;

export type PolymorphicComponent<P, D extends ElementType, K extends string> = {
  <C extends ElementType = D>(props: OverridableComponentProps<C, P, K>): ReactElement | null;
  displayName?: string | undefined;
};
